import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import reducer from "reducers";
import withRedux from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";

import Head from "next/head";
import AppLayout from "components/AppLayout";

const SNS = ({ Component, store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

SNS.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    // typeof window !== "undefined" &&
      !options.isServer &&
      window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(SNS);
