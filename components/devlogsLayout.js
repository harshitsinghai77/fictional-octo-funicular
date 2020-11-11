import Link from "next/link";
import SEO from "./seo";
import Alert from "./alert";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function DevLogsLayout({ children, home }) {
  return (
    <>
      <Alert preview={false} home={false} />
      <div className={styles.container}>
        <SEO title="Devlogs" />
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
