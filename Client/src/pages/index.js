import React from "react";
import Link from "next/link";

import Layout from 'components/AppLayout';

const Home = () => {
  return (
    <>
      <Layout>
        <Link href="/about">
          <a>about</a>
        </Link>
        <div>Hello, next</div>
      </Layout>
    </>
  );
};

export default Home;
