import { Outlet } from "react-router";
import Navbar from "../Share/Header";
import Footer from "../Share/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;