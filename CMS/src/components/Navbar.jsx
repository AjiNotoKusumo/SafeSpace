import logo from '../assets/SafeSpaceLogo.png';
import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <header
                className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
                id="navbar"
            >
                <NavLink to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
                {" "}
                <img
                    src={logo}
                    width={80}
                    className="d-inline-block me-2"
                    alt="logo"
                />
                Admin Panel
                </NavLink>
                <button
                className="navbar-toggler position-absolute d-md-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebar-menu"
                aria-controls="sidebar-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
            </header>
            {/* End Navbar */}
        </>
    )
}