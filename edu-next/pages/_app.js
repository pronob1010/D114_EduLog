import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import myStore from "./redux/store";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={myStore}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;
