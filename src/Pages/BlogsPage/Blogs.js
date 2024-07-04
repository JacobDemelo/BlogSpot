/*
 * Project Name: Blog Spot
 * File Name: Blogs.js
 * Purpose: This file is used to display the blogs screen
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the useNavigate from router
import { useNavigate } from "react-router-dom";

//import the blog
import Blog from "./Blog/Blog";

//import the footer
import Footer from "../../components/Footer/Footer";

//import the blogs.scss
import "./Blogs.scss";

/**
 * Function Name: Blogs()
 * Purpose: this function will display the blogs
 * Author: Jacob Demelo
 */
function Blogs({ blogs }) {
  //const navigate to useNavigate
  const navigate = useNavigate();

  //goTo add blog pages
  const goTo = () => {
    navigate("/add");
  };

  //return function
  return (
    <div className="blogs-component">
      {/*Display the background image*/}
      <div className="background-image">
        <h3>
          Create Your Blogs And Post them <br></br> For everyone to see!
        </h3>
        <button onClick={goTo}>Add A Blog</button>
      </div>

      {/*Display the title*/}
      <div className="title-container">
        <h2 className="blog-title">
          Posted Blogs<hr color="#FE6232"></hr>
        </h2>
      </div>

      {/*Display a table with the blogs*/}
      <div className="table">
        {/* Renders each blog.*/}
        {blogs.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>

      {/*Display the footer*/}
      <Footer />
    </div>
  ); //end of return
} //end of Blogs() function

//export the Blogs
export default Blogs;
