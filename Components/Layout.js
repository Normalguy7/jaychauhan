import styles from "../styles/Layout.module.scss";
import Nav from "../Components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Nav />;
    </>
  );
};

export default Layout;
