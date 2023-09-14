import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import profilePic from "/public/images/profile.jpg";

const FirstPost = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h1>FirstPost</h1>
          <Link href="/">Back To Home</Link>
        </div>
        <Image src={profilePic} alt="profile-img" />
      </div>
    </Layout>
  );
};

export default FirstPost;
