import DevLogsLayout from "../../components/devlogs-layout";
import DateFormatter from "../../components/date-formatter";
import { getAllDevLogsIds, getDevLogById } from "../../lib/devlogs-api";
import PostBody from "../../components/post-body";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const devlogsData = await getDevLogById(params.id);
  return {
    props: {
      devlogsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllDevLogsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function DevLog({ devlogsData }) {
  return (
    <DevLogsLayout home={false}>
      <h1 className={utilStyles.headingXl}>{devlogsData.title}</h1>
      <div className={utilStyles.lightText}>
        <DateFormatter dateString={devlogsData.date} />
      </div>
      <PostBody content={devlogsData.processedContent} />
    </DevLogsLayout>
  );
}
