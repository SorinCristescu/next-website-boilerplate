import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Link</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Link</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Link</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;