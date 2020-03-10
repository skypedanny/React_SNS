import React from "react";
import PropTypes from 'prop-types';

import Head from "next/head";
import AppLayout from "components/AppLayout";

const SNS = ({ Component }) => {
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
        <Component />
      </AppLayout>
    </>
  );
};

SNS.propTypes = {
  Component: PropTypes.elementType
};

export default SNS;