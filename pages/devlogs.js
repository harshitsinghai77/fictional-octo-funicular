import Link from "next/link";
import DevLogsLayout from "../components/devlogs-layout";
import DateFormatter from "../components/date-formatter";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { getSortedDevLogsData } from "../lib/devlogs-api";

export function getStaticProps() {
  const alldevlogs = getSortedDevLogsData();
  return {
    props: {
      alldevlogs,
    },
  };
}

export default function Devlogs({ alldevlogs }) {
  return (
    <DevLogsLayout home={true}>
      <div className={styles.container}>
        <section>
          <p className={utilStyles.headingSd}>
            The main purpose of the dev logs is to help me identify and keep
            track of my daily progress. It helps me stay accountable to myself
            and serves as a historical record that I can look back on.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Dev Logs</h2>
          <ul className={utilStyles.list}>
            {alldevlogs.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/devlogs/${id}`}>
                  <a className={utilStyles.hyperlink}>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <DateFormatter dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </DevLogsLayout>
  );
}
