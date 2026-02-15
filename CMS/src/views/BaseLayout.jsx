import { Navigate, Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import notification from "../helpers/notification";


export default function BaseLayout() {

    if(!localStorage.access_token) {
        notification(`Please login first`, 'error')

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
                  <Sidebar />
                  <Outlet />
                  
                </div>
            </section>
        </>
    )
} 