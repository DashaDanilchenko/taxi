
import { NavLink, Outlet } from "react-router-dom"

const Layout = ({isAuthorization}) => {

  return (
    <div >
        <nav>
            <NavLink to="/">OrderTrip</NavLink>
            {isAuthorization && <NavLink to="/history">History</NavLink> }
            {isAuthorization && <NavLink to="/report">Report</NavLink>}
            {isAuthorization && <NavLink to="/profile">Profile</NavLink>}
            {isAuthorization && <NavLink to="/settings">Settings</NavLink>}
        </nav>
        <main>
            <Outlet isAuthorization={isAuthorization}/>
        </main>
    </div>
  )
}

export default Layout