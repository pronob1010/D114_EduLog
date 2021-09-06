import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect( ()=> {
    (
        async () => {
            const response = await fetch('http://localhost:8000/api/token/refresh/',{
                credentials: "include",
                
            });

            const content = await response.json();

            console.log(content);
        }
    )();
});
  return (    
  <Layout >
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
