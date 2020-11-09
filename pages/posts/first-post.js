import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>My First Page Bitch</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to my first blog{" "}
            <a href="https://nextjs.org">Mother Fuck</a>
          </h1>

          <p className={styles.description}>
            Go back{" "}
            <Link href="/">
              <a>to home page</a>
            </Link>
          </p>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  );
}
