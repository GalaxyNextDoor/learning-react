import { NavLink, Outlet } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <br />
            <Outlet />
        </div>
    )
}

export default NavBar