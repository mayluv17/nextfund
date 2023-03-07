import { useRouter } from "next/router";
function postDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    // when fallback is true load this then load the generated page
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h2>
          {post.id} {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export default postDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  }); //dynamically generate the path

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths: paths,
    fallback: "blocking", //false, true ,blocking
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
