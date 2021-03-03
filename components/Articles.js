import Card from "./Card";

import styles from "../styles/Articles.module.css";
const Articles = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => {
        return <Card article={article} key={`article__${article.id}`} />;
      })}
    </div>
  );
};

export default Articles;
