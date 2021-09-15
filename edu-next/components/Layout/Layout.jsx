import Header from "./components/Header/header";
import Loader from './components/preloder';
import Footer from './components/Footer/footer';
import { login } from "../../pages/redux/actions/login";
import { useDispatch } from 'react-redux';


export default function Layout({children}){
    const dispatch = useDispatch();
    dispatch(login());

    return(
        <>
            <Loader />
            <Header/>
            {children}
            <Footer />
        </>
    )
}