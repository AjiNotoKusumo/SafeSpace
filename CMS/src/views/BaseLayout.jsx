import { Navigate, Outlet, useNavigate } from "react-router";
import Navbar from "../components/NavBar"
import Sidebar from "../components/Sidebar"


export default function BaseLayout({email}) {

    if(!localStorage.access_token) {
        return (
            <>
                <Navigate to="/login" />
            </>
        )
    }

    return (
        <>
            <Navbar />

            <section className="container-fluid" id="home-section">
                <div className="row">
                  <Sidebar email={email}/>
                  <Outlet />
                  
                </div>
            </section>
        </>
    )
} 