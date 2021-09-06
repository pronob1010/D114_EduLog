import Header from "./components/Header/header";
import Loader from './components/preloder';
import Footer from './components/Footer/footer';
import { useEffect } from "react";

export default function Layout({children}){

    return(
        <>
            <Loader />
            <Header />
            {children}
            <Footer />
        </>
    )
}