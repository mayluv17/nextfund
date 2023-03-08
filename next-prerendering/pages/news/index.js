import Link from "next/link";

function NewsList({ articles }) {
  return (
    <>
      <h2>List of news</h2>

      {articles.map((article) => {
        return (
          <Link href={`/news/${article.category}`} passHref>
            <div>
              <h6>
                {article.id} {article.title} | {article.category}
              </h6>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default NewsList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
