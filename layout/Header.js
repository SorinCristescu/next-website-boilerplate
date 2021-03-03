import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header = ({ categories }) => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Logo</a>
      </Link>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link as={`/category/${category.id}`} href="/category/[id]">
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
