
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSh-Q96IW45BqnABhWBh6e4kbT_M722Sg",
    authDomain: "my-trainscheduler.firebaseapp.com",
    databaseURL: "https://my-trainscheduler.firebaseio.com",
    projectId: "my-trainscheduler",
    storageBucket: "my-trainscheduler.appspot.com",
    messagingSenderId: "581549746591"
  };
  firebase.initializeApp(config);

// Create variable to reference the database
var database = firebase.database();

$("#submit").on("click", function (event) {
  event.preventDefault();
// Initial Values From User saved as variable
var trainName = $("#trainName").val().trim();
var destination = $("#destination").val().trim();
var frequency = $("#frequency").val().trim();
var nextArrival = $("#nextArrival").val().trim();
var minutesAway = $("#minutesAway").val().trim();
database.push({
  trainName: trainName,
  destination: destination,
  frequency: frequency,
  nextArrival: nextArrival,
  minutesAway: minutesAway,
});


});