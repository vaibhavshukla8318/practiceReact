import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <header className="header">
      <div className="Logo">
        <NavLink to="/"  className="userName">Hi, {user ? user.username : "User"}</NavLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={showMenu ? "nav-links active" : "nav-links"}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          {isLoggedIn ? (
            <>
              <li><NavLink to="/bookStore">Books</NavLink></li>
              <li><NavLink to="/logout">Logout</NavLink></li>
              <li><NavLink to="/admin/dashboard">Admin</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
