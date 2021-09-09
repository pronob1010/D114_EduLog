import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import {
  useEffect,
  useState
} from "react";

function MyApp({
  Component,
  pageProps
}) {
  const [Userdata, setUserdata] = useState("");

  useEffect(() => {
    (async () => {
      const user = localStorage.getItem("userId");
      console.log("init user", String(user));
      if (user) {
        // console.log("Done");
        const response = await fetch("http://localhost:8000/api/auth/" + user, {
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
        })

        const content = await response.json();

        setUserdata(content);
        // console.log(content);

      }
    })();
  }, []);
  console.log("==", Userdata);
  return ( <
    Layout auth = {
      Userdata
    } >
    <
    Component {
      ...pageProps
    }
    /> <
    /Layout>
  );
}

export default MyApp;