import Layout from "../components/Layout/Layout";
import { Provider, useDispatch } from 'react-redux';
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
