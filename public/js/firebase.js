
//  const admin = require('firebase-admin');
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db= firebase.firestore();
//  const admindb= admin.firestore();

//  module.exports={
//   admindb,db
//  }
 
