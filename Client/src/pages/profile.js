import React from "react";
import AppLayout from "components/AppLayout";

const profile = () => {
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
        <div>profile</div>
      </AppLayout>
    </>
  );
};

export default profile;
