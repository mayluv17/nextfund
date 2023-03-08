function ArticleListByCategory() {
  return <div>Category</div>;
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const res = await fetch(`http://localhost:4000/category=${category}`);
  const data = await res.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
