import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [Userdata, setUserdata] = useState();
  const [CoursesbaseCategories, setCoursesbaseCategories] = useState([]);

  useEffect(() => {
    ( async () => {
      const user = localStorage.getItem("userId");
      // console.log("init user", String(user));
      if (user) {
        // console.log("Done");
        const response = await fetch("http://localhost:8000/api/auth/" + user, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const content = await response.json();
        setUserdata(content);
      }
        const response2 = await fetch("http://localhost:8000/api/data/base-categories/",
        {
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const content2 = await response2.json();
        
        setCoursesbaseCategories(content2);
        // console.log("fdf", content2);
        // console.log(CoursesbaseCategories);
    })();
}, []);
  // console.log("==", Userdata);

  return (
    <Layout auth={Userdata} baseCategories={CoursesbaseCategories}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
