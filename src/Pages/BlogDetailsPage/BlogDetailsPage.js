/*
 * Project Name: Blog Spot
 * File Name: BlogDetailsPage.js
 * Purpose: This file is used to display the full contents of the blog
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the link and use params for navigation from the react router dom
import { Link, useParams } from "react-router-dom";

//import the footer component
import Footer from "../../components/Footer/Footer";

//import the BlogDetailsPage.scss for styling
import "./BlogDetailsPage.scss";

/**
 * Function Name: BlogDetailsPage()
 * Purpose: this is the BlogDetailsPage function to display the entire content for the blogs
 * Author: Jacob Demelo
 */
export default function BlogDetailsPage({ data }) {
  //declaring use params to get the id from the url
  const params = useParams();

  //declaring a variable to display back button text
  let backText = "< Back";

  //declaring all the variables needed to display the blog content
  let title = "";
  let author = "";
  let date = "";
  let picture = "";
  let blog = "";

  /**
     * For Loop Purpose: for loop will cylce throught the passed in data array and get all of the blogs data and assign
                         this data to the declared variables above
     * Author: Jacob Demelo
     * Date: 2023-04-11
     */
  for (var i = 0; i < data.length; i++) {
    //if the blog id in the data array matches teh selected id in the url
    if (data[i].id === params.id) {
      //Set all the variables to the corrisponding blogs id data
      title = data[i].title;
      author = data[i].author;
      date = data[i].date;
      picture = data[i].image;
      blog = data[i].blog;
    } //end of if statement
  } //end of for loop

  //return the BlogDetails
  return (
    //view
    <>
      {/*Wrap all the content in a page container*/}
      <div className="page-container">
        {/*Add a button div to hold the button*/}
        <div className="back-button">
          {/*wrapping the back button in a link so it will navigate and declaring the back text to make the button text look lik <Back */}
          <Link to={"/blogs"}> {backText} </Link>
        </div>

        {/*Blog details div will show the author and date */}
        <div className="blog-details-title">
          <h2>{title}</h2>
          <p>Author: {author}</p>
          <p>Date Created: {date}</p>
        </div>

        {/*Create a Line from left to right to seperate the title from the blog */}
        <hr></hr>

        {/*Blog image container will show the blogs image above the blog*/}
        <div className="blog-image-container">
          <img className="blog-image" src={picture} alt=""></img>
        </div>

        {/*Blog Title before blog*/}
        <div className="blog-paragraph-title">
          <h2>Blog</h2>
        </div>

        {/*Display the blog*/}
        <div className="blog-paragraph">
          <p>{blog}</p>
        </div>

        {/*Declaring the footer*/}
        <Footer />
      </div>
    </>
    //end of view
  ); //end of return
} //end of BlogDeatailsPage function
