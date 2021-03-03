import Link from "next/link";

import styles from "../styles/Card.module.css";
const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.id}`} href="/article/[id]">
      <a>
        <div className={styles.card}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${article.image.url}`}
            alt={`${process.env.NEXT_PUBLIC_API_URL}${article.image.alternativeText}`}
          />

          <div>
            {/* <p id="category">{article.category.name}</p> */}
            <h3>{article.title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
