function ArticleListByCategory({ category, articles }) {
  return (
    <>
      <h1>Swowing news for {category} category</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            {article.id} {article.category} {article.category}
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
