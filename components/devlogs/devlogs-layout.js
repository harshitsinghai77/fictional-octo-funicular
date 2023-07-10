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
            <h1 className={utilStyles.headingLg}>My Dev Logs</h1>
          </Link>
        </div>
        <main>{children}</main>
        {home ? (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        ) : (
          <div className={styles.backToHome}>
            <Link href="/devlogs">← Back to devlogs</Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </>
  );
}
