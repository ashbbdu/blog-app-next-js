import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div>
      <Head>
        <title>First Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
    </Layout>
  );
}
