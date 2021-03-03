import Head from "../layout/Head";
import Articles from "../components/Articles";
import { getArticles, getCategories } from "../lib/api";
import Layout from "../layout/Layout";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const articles = await getArticles();
  const categories = await getCategories();
  return {
    props: { articles, categories },
    revalidate: 1,
  };
}

const Home = ({ articles, categories }) => {
  console.log("api url", process.env.NEXT_PUBLIC_API_URL);
  console.log("categories:", categories);
  return (
    <div>
      <Head title="Home" metaContent="something, something2, something3" />
      <Layout categories={categories}>
        <Articles articles={articles} />
      </Layout>
    </div>
  );
};

export default Home;
