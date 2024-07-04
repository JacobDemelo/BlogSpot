/*
 * Project Name: Blog Spot
 * File Name: Blog.js
 * Purpose: This file is used to display the blog
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the Link from react router
import { Link } from "react-router-dom";

//import the blog.scss
import "./Blog.scss";

/**
 * Function Name: Blog()
 * Purpose: this is the Blog function
 * Author: Jacob Demelo
 */
function Blog(props) {
  //return the blog components
  return (
    <Link to={"/blogs/" + props.blog.id} className="rows">
      {/*Display the image*/}
      <img className="image-container" src={props.blog.image} alt=""></img>

      {/*Display the data in a container*/}
      <div className="data-container">
        {/*Display the blogs title*/}
        <h3>{props.blog.title}</h3>

        {/*Display teh blog author*/}
        <div className="author">Author: {props.blog.author}</div>

        {/*Display the blog date*/}
        <div className="date">Date Created: {props.blog.date}</div>
      </div>
    </Link>
  );//end of return
}//end of Blog() function

//export the blog
export default Blog;
