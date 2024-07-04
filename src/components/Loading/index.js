/*
 * Project Name: Blog Spot
 * File Name: Header.js
 * Purpose: This file is the Header for blog spot
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the loading.scss file to style the loading component
import "./Loading.scss";

/**
 * Function Name: Loading()
 * Purpose: this is our loading component
 * Author: Jacob Demelo
 */
export default function Loading() {
  //return all the divs in the loading screen
  return (
    //start the view
    <>
      {/*Display loading*/}
      <div className="loading-component">Loading...</div>
    </>
    //end of loading view
  ); //end of return
} //end of loading function
