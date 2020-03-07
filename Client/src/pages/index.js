import React from "react";
import Link from "next/link";
import { DatePicker } from 'antd';
import Head from "next/head";

import AppLayout from "components/AppLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>SNS</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.1/antd.min.js" />
      </Head>
      <AppLayout>
        <Link href="/about">
          <a>about</a>
        </Link>
        <div>Hello, next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
