import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <div>
            <div className="h-16">
            <Navbar />
            </div>
            <div className="min-h-[calc(100vh-288px)] my-10 container mx-auto">
            <Outlet />
            </div>
            <Footer />       
        </div>
    );
};

export default RootLayout;