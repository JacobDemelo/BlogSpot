/*
 * Project Name: Blog Spot
 * File Name: read.js
 * Purpose: This file has all the functions to read from the database
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the collection and database from firebase and config file
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

/**
 * Function Name: load()
 * Purpose: this is our load component
 * Author: Jacob Demelo
 */
export async function load() {
  //try function
  try {
    //set the const to query the database of collections by the name of "blogs"
    const querySnapshot = await getDocs(collection(db, "blogs"));

    //create an empty array called data
    const data = [];

    //do a forEach to query all the items in the database
    querySnapshot.forEach((doc) => {
      //push all of the items to data array
      data.push({
        ...doc.data(),
        id: doc.id,
      }); //end of push
    }); //end of loop

    //return the data
    return data;
  } catch (error) {
    //end of the try function

    //catch any errors
    //if there is an error then throw an error
    throw new Error("Failed to load the database");
  } //end of catch
} //end of load function
