import Link from "next/link";
import Menu from "components/menu";
import SEO from "components/seo";
import styles from "styles/layout.module.css";
import utilStyles from "styles/utils.module.css";

export default function DevLogsLayout({ children, home }) {
  return (
    <>
      <Menu />
      <div className={styles.container}>
        <SEO title="Devlogs | Harshit" />
        <div className={styles.header}>
          <Link href="/devlogs">
            <a>
              <h1 className={utilStyles.headingLg}>My Dev Logs</h1>
            </a>
          </Link>
        </div>
        <main>{children}</main>
        {home ? (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        ) : (
          <div className={styles.backToHome}>
            <Link href="/devlogs">
              <a>← Back to devlogs</a>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
