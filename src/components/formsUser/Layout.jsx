import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="container">
        <nav>
            <NavLink to="/">OrderTrip</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/report">Report</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout