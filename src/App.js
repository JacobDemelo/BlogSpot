/*
 * Project Name: Blog Spot
 * File Name: App.js
 * Purpose: this will display our entire app
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//imports from react and the router dom
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import uuid from "react-uuid";
import { useEffect } from "react";

//import the components
import Header from "./components/Header/Header";
import NotFound from "./components/Navigation/NotFound";
import Loading from "../src/components/Loading/index";

//import the pages
import Blogs from "../src/Pages/BlogsPage/Blogs";
import Form from "./Pages/BlogFormPage/BlogForm";
import AboutUs from "./Pages/AboutUsPage/AboutUs";
import BlogDetailsPage from "./Pages/BlogDetailsPage/BlogDetailsPage";

//import the database
import * as database from "./database";

/**
 * Function Name: App()
 * Purpose: display the app
 * Author: Jacob Demelo
 */
function App() {
  //declare an isloading variable to declare loading screen
  const [isLoading, setIsLoading] = useState(true);

  //call the useEffect once
  useEffect(() => {
    (async () => {
      //load the database
      const data = await database.load();

      //set the loading to false
      setIsLoading(false);

      //set blogs to the data from the database
      setBlogs(data);
    })();
  }); //empty array calls the useEffect once

  // Sets the initial state of blogs
  const [blogs, setBlogs] = useState([]);

  /**
   * Function Name: handleAddBlog()
   * Purpose: this function will be used to add a blog
   * Author: Jacob Demelo
   */
  const handleAddBlog = (title, author, date, image, blog) => {
    //set the blogs array to the users inputed data
    setBlogs([
      ...blogs,
      {
        id: uuid(),
        title: title,
        author: author,
        date: date,
        blog: blog,
        image: image,
      },
    ]); //end of array
  }; //end of fucntion

  //return the app
  return (
    //view
    <>
      <Header />

      {/*is loading*/}
      {isLoading ? (
        <Loading />
      ) : (
        <main className="page">
          {/*Declare the routes*/}
          <Routes>
            {/*Route for blogs*/}
            <Route
              path="/blogs"
              exact
              element={<Blogs blogs={blogs} />}
            ></Route>

            {/*Redirect / to blogs*/}
            <Route path="/" element={<Navigate to="/blogs" />}></Route>

            {/*Route for id for the selected blog*/}
            <Route
              path="/blogs/:id"
              element={<BlogDetailsPage data={blogs} />}
            ></Route>

            {/*Add blog route*/}
            <Route
              path="/add"
              exact
              element={<Form onAddBlog={handleAddBlog} />}
            ></Route>

            {/*If there is no url*/}
            <Route path="*" exact element={<NotFound />}></Route>

            {/*aboutus url*/}
            <Route path="/aboutus" element={<AboutUs />}>
              <Route path="" element={<NotFound />} />
            </Route>

            {/*End of routes*/}
          </Routes>
        </main>
      )}
    </>
    //end the view
  ); //end of return
} //end of app() function

//export the app
export default App;
