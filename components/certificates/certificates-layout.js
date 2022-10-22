import Menu from "components/menu";
import SEO from "components/seo";
import styles from "styles/layout.module.css";
import utilStyles from "styles/utils.module.css";
import Footer from "components/footer";

export default function CertificateLayout({ children }) {
  return (
    <>
      <Menu />
      <div className="mt-16 mx-24 xs:mx-10">
        <SEO title="Harshit Singhai Certifications | Harshit" />
        <div className={styles.header}>
          <h1 className={utilStyles.headingLg}>Certifications</h1>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
