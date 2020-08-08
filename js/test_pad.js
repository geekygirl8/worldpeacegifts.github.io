// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKDQwhx66GoFkJvvpcQSXvNZgRCesTkdM",
    authDomain: "nikita-world-peace-7e858.firebaseapp.com",
    databaseURL: "https://nikita-world-peace-7e858.firebaseio.com",
    projectId: "nikita-world-peace-7e858",
    storageBucket: "nikita-world-peace-7e858.appspot.com",
    messagingSenderId: "366120780869",
    appId: "1:366120780869:web:d07be1a486493474f20f2c",
    measurementId: "G-YB1H5DS8BK"
  };



firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref("issues/");

// Task 3 ------------------------------------------
//
// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: "yes",
//   severity: "minor"
// });
//
// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: "no",
//   severity: "moderate"
// });

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");
//
// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

var recordRef = firebase.database().ref("issues/delete-me");

recordRef.remove()
   .catch(function(error) {
     alert("Delete failed: " + error.message)
   });
