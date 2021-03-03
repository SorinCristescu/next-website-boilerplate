import Header from "./Header";

import styles from "../styles/Layout.module.css";

const Layout = ({ children, categories, article }) => {
  return (
    <>
      <Header categories={categories} />
      {article ? (
        <>
          <img
            className={styles.image}
            src={`${process.env.NEXT_PUBLIC_API_URL}${article.image.url}`}
            alt=""
          />
          <h1>{article.title}</h1>

          <div className={styles.container}>
            <main className={styles.main}>{children}</main>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      )}
    </>
  );
};

export default Layout;
