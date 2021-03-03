import Articles from "../../components/articles";
import { getCategory, getCategories } from "../../lib/api";
import Layout from "../../layout/Layout";

export async function getStaticProps({ params }) {
  const category = await getCategory(params.id);
  const categories = await getCategories();
  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default function Category({ category, categories }) {
  console.log(category);
  return (
    <Layout categories={categories}>
      <h1>{category.name}</h1>
      <Articles articles={category.articles} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((category) => `/category/${category.id}`),
    fallback: false,
  };
}
