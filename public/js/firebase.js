
//  const admin = require('firebase-admin');
  const firebaseConfig = {
    apiKey: "AIzaSyCgJoRjz_SDp8iOVi8_2pEB_YEAjE2tJug",
    authDomain: "blog-website-ac113.firebaseapp.com",
    projectId: "blog-website-ac113",
    storageBucket: "blog-website-ac113.appspot.com",
    messagingSenderId: "1064174485539",
    appId: "1:1064174485539:web:08772022ce591b6dd83196"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db= firebase.firestore();
//  const admindb= admin.firestore();

//  module.exports={
//   admindb,db
//  }
 