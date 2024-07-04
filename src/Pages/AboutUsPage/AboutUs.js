/*
 * Project Name: Blog Spot
 * File Name: AboutUs.js
 * Purpose: this file is to display the about us page
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import react and Link
import React from "react";
import { Link } from "react-router-dom";

//import the footer component
import Footer from "../../components/Footer/Footer";

//import teh about us style page
import "./AboutUs.scss";

/**
 * Function Name: AboutUs()
 * Purpose: this function will display all the divs for about us
 * Author: Jacob Demelo
 */
function AboutUs() {
  //return the divs
  return (
    //start of the about us view
    <>
      {/*putting all the content into a container*/}
      <div className="aboutus-container">
        {/*title div*/}
        <div className="aboutus-title">
          <h2>About Us</h2>
        </div>

        {/*putting the statement into a div*/}
        <div className="statement">
          <p>
            This website will allow everyone from around the world to post
            blogs. Below is what this site is about and a brief description on
            how to use the site.
          </p>
        </div>
        <div className="aboutus-description">
          <p>
            Users will all be allowed to create blogs. users will also be
            allowed to view other users posted blogs. Our entire site is built
            using React.js and is connected to firebase fire store. Users will
            add the title, author, image and blog to their post. The date
            Created will then be programmatically added. Users can then see
            blogs and when pressing on the blog it will navigate to the actual
            full blog. Please enjoy and create as many blogs as you would like.
            Click the button below to add a post!
          </p>
        </div>

        {/*putting the about us button into a div and adding a link component*/}
        <div className="aboutus-button">
          <Link to={"/blogs"}>
            <button>Add Blog</button>
          </Link>
        </div>

        {/*Displaying the footer*/}
        <div className="aboutus-footer">
          <Footer />
        </div>
      </div>
    </>
    //end of view
  ); //end of return
} //end of AboutUs Function

//export the AboutUs function
export default AboutUs;
