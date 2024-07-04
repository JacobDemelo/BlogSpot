/*
 * Project Name: Blog Spot
 * File Name: Header.js
 * Purpose: This file is the Header for blog spot
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the header.scss styling file
import "./Header.scss";

//import the NavLink and Link from the router dom
import { NavLink, Link } from "react-router-dom";

//importing the logo from the src images
import logo from "../../Images/logo.png";

/**
 * Function Name: Header()
 * Purpose: this is our header component
 * Author: Jacob Demelo
 */
function Header() {
  //return the header divs
  return (
    //view
    <>
      {/*Display the header*/}
      <header>
        {/*Display the logo image*/}
        <Link to="/blogs">
          <img className="logo" alt="log" src={logo}></img>
        </Link>

        {/*Display the nav link components*/}
        <div className="nav-container">
          <nav className="top-nav">
            {/*Display links on the nav bar*/}
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Add A Blog
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About Us
            </NavLink>
          </nav>
        </div>
      </header>
    </>
    //end of the view
  ); //end of return
} //end of the header function

//export the header to the app
export default Header;
