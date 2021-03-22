import Menu from "./menu";
import SEO from "./seo";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Footer from "./footer";

export default function MoviesLayout({ children }) {
  return (
    <>
      <Menu />
      <div className="mt-16 xl:mx-36 lg:mx-36 md:mx-12 sm:mx-10 xs:mx-16">
        <SEO title="Movielogs | Harshit" />
        <div className={styles.header}>
          <h1 className={utilStyles.headingLg}>Movies Logs</h1>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
