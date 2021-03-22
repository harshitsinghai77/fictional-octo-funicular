import React from "react";
import { AuthProvider, useAuth } from "../../lib/authentication/devlogs";
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

export const ProtectRoute = (devlogsData) => {
  const { isAuthenticated, user, login, loading } = useAuth();
  const [password, setPassword] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login(password);
    setPassword("");
  };

  let content = (
    <>
      <h1 className="text-6xl">You're not supposed to read this 🤔</h1>
      <form onSubmit={onSubmit}>
        <p className="text-2xl my-8">
          <span className="pr-5">Password:</span>
          <input
            className="p-2"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
      </form>
      <h1 className="text-2xl">Enter password to unlock the content</h1>
    </>
  );

  if (isAuthenticated) {
    content = <PostBody content={devlogsData.processedContent} />;
  }
  return (
    <DevLogsLayout home={false}>
      <h1 className={utilStyles.headingXl}>{devlogsData.title}</h1>
      <div className={utilStyles.lightText}>
        <DateFormatter dateString={devlogsData.date} />
      </div>
      {content}
    </DevLogsLayout>
  );
};

export default function DevLog({ devlogsData }) {
  return (
    <AuthProvider>
      <ProtectRoute {...devlogsData} />
    </AuthProvider>
  );
}
