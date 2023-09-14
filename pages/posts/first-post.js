import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FirstPost = () => {
  return (
    <div>
    <Head>
    <title>First Post Page</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div>

        <h1>FirstPost</h1>
        <Link href="/">Back To Home</Link>
    </div>
    <Image src="/public/images/profile.jpg" height={20} width={20} alt="profile-img" />
    <img src="/public/images/profile.jpg" height={20} width={20} alt="profile-img" />
    </div>
  )
}

export default FirstPost