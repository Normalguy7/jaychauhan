import Link from "next/link";
import navStyles from "../styles/nav.module.scss";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
