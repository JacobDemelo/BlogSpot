/*
 * Project Name: Blog Spot
 * File Name: write.js
 * Purpose: This file is the write.js that will hold all of the write functions for our app
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

//import the collection and database from firebase and config file
import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

/**
 * Function Name: save()
 * Purpose: this is our save function
 * Author: Jacob Demelo
 */
export async function save(data) {
  //try function
  try {
    //declare a constant variable to get the collection from the server and write the inputed user data to the database
    const docRef = await addDoc(collection(db, "blogs"), data);

    //return the id
    return docRef.id;

    //catch teh error
  } catch (e) {
    //if there is an error then alert the user of the error
    alert("Error adding document", e);
  } //end of catch
} //end of
