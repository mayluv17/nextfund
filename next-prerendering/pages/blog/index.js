import Link from "next/link";
function PostsList({ posts }) {
  return (
    <>
      <h4>Posts from my blog</h4>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`blog/${post.id}`} passHref>
              <h6>{post.title}</h6>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostsList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
