import { Outlet } from "react-router-dom"
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout