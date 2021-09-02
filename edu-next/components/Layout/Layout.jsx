import Header from "./components/Header/header";
import Loader from './components/preloder';
import Footer from './components/Footer/footer';

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