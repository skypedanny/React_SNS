import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import reducer from "reducers";
import withRedux from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Head from "next/head";
import AppLayout from "components/AppLayout";
import rootSaga from "sagas";

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

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          // typeof window !== "undefined" &&
          !options.isServer &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(SNS);
