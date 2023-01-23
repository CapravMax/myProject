import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import {Outlet} from 'react-router-dom';





const Layout = () =>  {

    return (
    <div className={'wrapper'}>
        <div className= {"layout"}>
        <Header />
       <main>
        <Outlet/>
       </main>
        <Footer />
        </div>
    </div>
    );
}

export default Layout