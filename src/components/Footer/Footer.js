/*
 * Project Name: Blog Spot
 * File Name: Footer.js
 * Purpose: This file is the footer for blog spot
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the footer.scss
import "./Footer.scss";

/**
 * Function Name: Footer()
 * Purpose: this is our footer component
 * Author: Jacob Demelo
 */
function Footer() {
  //returning the footer divs
  return (
    //view
    <>
      {/*Declaring the footer class div*/}
      <div className="footer">
        {/*<P> to display the copyright and authors name in the footer*/}
        <p className="footer-text">
          Copyright © Jacob Demelo, All rights reserved
        </p>
      </div>
    </>
    //end of footer view
  ); //end of return
} //end of footer function

//export the footer to the app
export default Footer;
