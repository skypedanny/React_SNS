import React from "react";
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
        <div>Hello, next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
