import { Outlet } from "react-router-dom"
import Footer from "./Footer.jsx"
import NavBar from "./NavBar.jsx"

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout