import { NavLink, useNavigate } from "react-router";

export default function Sidebar() {
    const navigate = useNavigate()

    async function handleLogout() {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            {/* Sidebar */}
            <nav
                className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                id="sidebar-menu"
            >
                <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                    <NavLink to="/lodgings" className={({ isActive }) => (isActive ? "text-decoration-underline nav-link" : "nav-link")} id="nav-product">
                        {" "}
                        <span className="icon material-symbols-outlined me-2">
                        hotel
                        </span>
                        Lodgings
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/types" className={({ isActive }) => (isActive ? "text-decoration-underline nav-link" : "nav-link")} id="nav-category">
                        {" "}
                        <span className="icon material-symbols-outlined me-2">
                        category
                        </span>
                        Types
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/register" className={({ isActive }) => (isActive ? "text-decoration-underline nav-link" : "nav-link")} id="nav-category">
                        {" "}
                        <span className="icon material-symbols-outlined me-2">
                        account_circle
                        </span>
                        Add User
                    </NavLink>
                    </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Account</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                    <a className="nav-link text-decoration-none">
                        {" "}
                        <span className="icon material-symbols-outlined me-2">
                        person
                        </span>
                        Hey, <span id="username">{localStorage.getItem('email') ? localStorage.getItem('email').split('@')[0] : 'SafeSpacer'}</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link" id="nav-logout" onClick={handleLogout}>
                        {" "}
                        <span className="icon material-symbols-outlined me-2">
                        logout
                        </span>
                        Logout
                    </button>
                    </li>
                </ul>
                </div>
            </nav>
            {/* End Sidebar */}  
        </>
    )
}