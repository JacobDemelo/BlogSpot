/*
 * Project Name: Blog Spot
 * File Name: NotFound.js
 * Purpose: This file will display the loading component
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import react
import React from "react";

//import the navigation.scss for the design of notfound
import "./Navigation.scss";

//import the Link from router dom
import { Link } from "react-router-dom";

/**
 * Function Name: NotFound()
 * Purpose: this is the notfound component
 * Author: Jacob Demelo
 */
export default function NotFound() {
  //return the divs from the notfound component
  return (
    //start of the loading view
    <>
      {/*Display the notfound div*/}
      <div className="not-found-title">
        {/*Display h2 error 404 page not found*/}
        <h2>Page Not Found error 404</h2>

        {/*Display the notfound sub menu discribe*/}
        <p className="notfound-sub">
          Your page was not found click the button below to navigate back to the
          blogs page!
        </p>

        {/*Display a button go to blogs wrapped in the link component to redirect the user back to blogs page*/}
        <Link to="/blogs">
          <button className="notfound-button">Go To Blogs</button>
        </Link>
      </div>
    </>
    //end of the loading view
  ); //end of return
} //end of the NotFound function
