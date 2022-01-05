import Menu from "./menu";
import SEO from "./seo";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Footer from "./footer";

export default function BooksLayout({ children }) {
  return (
    <>
      <Menu />
      <div className="mt-16 mx-28">
        <SEO title="BooksLogs | Harshit" />
        <div className={styles.header}>
          <h1 className={utilStyles.headingLg}>Books Logs</h1>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
