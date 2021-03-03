import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Moment from "react-moment";
import { getArticles, getArticle, getCategories } from "../../lib/api";
import Layout from "../../layout/Layout";

export async function getStaticProps({ params }) {
  const article = await getArticle(params.id);
  const categories = await getCategories();
  return {
    props: { article, categories },
    revalidate: 1,
  };
}

export default function Article({ article, categories }) {
  return (
    <Layout categories={categories} article={article}>
      <ReactMarkdown source={article.content} />
      <p style={{ width: "100%", textAlign: "left" }}>
        <Moment format="MMM Do YYYY">{article.published_at}</Moment>
      </p>
      <Link href="/">
        <a>
          <h2>Back</h2>
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = await getArticles();
  return {
    paths: articles.map((article) => `/article/${article.id}`),
    fallback: false,
  };
}
