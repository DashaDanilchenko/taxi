
import { NavLink, Outlet } from "react-router-dom"

const Layout = ({login}) => {

  return (
    <div >
        <nav>
            <NavLink to={`/${login}`}>OrderTrip</NavLink>
            {login && <NavLink to={`/${login}/history`}>History</NavLink> }
            {login && <NavLink to={`/${login}/report`}>Report</NavLink>}
            {login && <NavLink to={`/${login}/profile`}>Profile</NavLink>}
            {login && <NavLink to={`/${login}/settings`}>Settings</NavLink>}

            {login && <button>Вихід</button>}

            {!login && <NavLink to="/entrance">Вхід</NavLink>}
            {!login && <NavLink to="/registration">Рєєстрація</NavLink>}
        </nav>
        <main>
            <Outlet login={login}/>
        </main>
    </div>
  )
}

export default Layout