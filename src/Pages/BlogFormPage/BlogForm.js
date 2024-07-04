/*
 * Project Name: Blog Spot
 * File Name: BlogForm.js
 * Purpose: This file is used to add a blog to the blogs
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the useState and link from react
import { useState } from "react";
import { Link } from "react-router-dom";

//import the database functions and variables
import * as database from "../../database";

//import the footer component
import Footer from "../../components/Footer/Footer";

//import the BlogForm.scss for styling
import "./BlogForm.scss";

/**
 * Function Name: Form()
 * Purpose: this is our Form that will allow the user to add blogs
 * Author: Jacob Demelo
 */
function Form({ onAddBlog }) {
  //declaring all of the useState variables
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [blog, setBlog] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [picture, setPicture] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState("");

  //declaring a date variable
  let date = "";

  //declaring an isError variable and assigning it to false
  let isError = false;

  /**
   * Fucntion Name: handleFormSubmission
   * Purpose: Handle the form submission
   * Author: Jacob Demelo
   * Date: 2023-04-11
   */
  const handleFormSubmission = async (event) => {
    //prevent the default event
    event.preventDefault();

    /**
     * If Statement Purpose: check for data validation
     * Author: Jacob Demelo
     * Date: 2023-04-11
     */
    //if title is empty
    if (title === "") {
      //set isError to true
      isError = true;

      //else if author is empty
    } else if (author === "") {
      //set isError to true
      isError = true;

      //else if picture is empty
    } else if (picture === "") {
      //set isError to true
      isError = true;

      //else if blog is empty
    } else if (blog === "") {
      //set isError to true
      isError = true;
    } //end of if statement

    //if isError is true
    if (isError === true) {
      //set the error message
      setErrorMessage("Please enter all the listed fields");

      //else there is no error
    } else {
      //call getDate function
      getDate();

      // Add the task.
      onAddBlog(title, author, date, picture, blog);

      //declare a const called blogData
      const blogData = {
        title: title,
        author: author,
        date: date,
        image: picture,
        blog: blog,
      };

      //setIsSaving to true
      setIsSaving(true);

      //get the saved id from the database
      const savedId = await database.save(blogData);

      //setIsSaving to false
      setIsSaving(false);

      //if savedId
      if (savedId) {
        //setShowSuccess
        setShowSuccess("Your Blog has been posted! Check it out!");

        //set the error message to nothing
        setErrorMessage("");

        //clear the textfields
        setTitle("");
        setAuthor("");
        setBlog("");

        //else didnt save
      } else {
        //set the error message
        setErrorMessage("Failed To save data");
      } //end of else
    } //end of outer else
  }; //end of handle form submission function

  /**
   * Function Name: getDate()
   * Purpose: Get the current date
   * Author: Jacob Demelo
   * Date: 2023-04-11
   */
  const getDate = () => {
    //declare an array to hold the months
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    //declare a const variable to get the date
    const d = new Date();

    //get the month
    let month = months[d.getMonth()];

    //get the day
    let day = d.getDate();

    //get the year
    let year = d.getFullYear();

    //add all of the dates to one variable called fullDate
    let fullDate = month + " " + day + ", " + year;

    //set the date to equal the fullDate
    date = fullDate;
  }; //end of getDate function

  /**
   * Function Name: handlePictureSelection()
   * Purpose: Get the selected image from the users computer
   * Author: Jacob Demelo
   * Date: 2023-04-11
   */
  const handlePictureSelection = (event) => {
    //declare variable file and get all of the data from the file
    const file = event.target.files[0];

    //declare the fileReader variable as the new FileReader()
    const fileReader = new FileReader();

    //read the data as a url
    fileReader.readAsDataURL(file);

    //get the picture
    fileReader.onload = (event) => {
      //set the picture to result variable
      const result = event.target.result;

      //setPicture to the result
      setPicture(result);
    }; //end of onload
  }; //end of handlePictureSelection()

  //if there is saving
  if (isSaving) {
    //show the saving div
    return <div>Saving...</div>;
  } //end of if

  //return the function
  return (
    <form className="form-component" onSubmit={handleFormSubmission}>
      {/*Title*/}
      <h2>Add Your Blog!</h2>

      {/*Wrapp the content in a container*/}
      <div className="container">
        {/*display the content*/}
        <div className="content">
          {/* Conditional render of the error message */}
          {errorMessage !== "" && (
            <div className="error-message">{errorMessage}</div>
          )}
          {/*Conditional to showSuccess*/}
          {showSuccess !== "" && (
            <div className="success-message">
              {showSuccess}
              <Link to="/blogs">
                <button className="check-out">See My Blog!</button>
              </Link>
            </div>
          )}

          {/*Blog Title*/}
          <label>
            <span>Blog Title:</span>
            <input
              className="blog-title"
              type="text"
              maxLength={50}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          {/*Author*/}
          <label>
            <span>Author:</span>
            <input
              className="blog-title"
              type="text"
              maxLength={50}
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </label>

          {/*Select the image*/}
          <div className="parent">
            <div className="select-image">
              <label>
                <span>Select Image:</span>
                <input
                  className="pick-image"
                  type="file"
                  accept="image/*"
                  onChange={handlePictureSelection}
                />
              </label>
            </div>
          </div>

          {/*Blog*/}
          <label>
            <span>Blog:</span>
            <textarea
              name="paragraph_text"
              cols="100"
              rows="10"
              value={blog}
              onChange={(event) => setBlog(event.target.value)}
            ></textarea>
          </label>

          {/* Submission Button */}
          <button>Add Your Blog</button>
        </div>
      </div>

      {/*Display the footer*/}
      <Footer />
    </form>
  ); //end of return
} //end of the blogForm()

//export the form
export default Form;
