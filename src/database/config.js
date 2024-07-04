/*
 * Project Name: Blog Spot
 * File Name: config.js
 * Purpose: This file is the inizialization for firebase
 * Author: Jacob Demelo
 * Date: 2023-04-11
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB72v_w2HYDNEQ28N4wTtS8bkOaCqDPCTI",
  authDomain: "blog-spot-8eeec.firebaseapp.com",
  projectId: "blog-spot-8eeec",
  storageBucket: "blog-spot-8eeec.appspot.com",
  messagingSenderId: "532331213320",
  appId: "1:532331213320:web:f421fdd0dbb1522ccc57bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export db as our database
export const db = getFirestore(app);