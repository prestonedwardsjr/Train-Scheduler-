
 // Initialize Firebase
var config = {
  apiKey: "AIzaSyBSh-Q96IW45BqnABhWBh6e4kbT_M722Sg",
  authDomain: "my-trainscheduler.firebaseapp.com",
  databaseURL: "https://my-trainscheduler.firebaseio.com",
  projectId: "my-trainscheduler",
  storageBucket: "my-trainscheduler.appspot.com",
  messagingSenderId: "581549746591"
};
firebase.initializeApp(config);.0

$("#submit").on("click", function (event) {
  event.preventDefault();
// Input From User saved as variable
var trainName = $("#trainName").val().trim();
var destination = $("#destination").val().trim();
var frequency = $("#frequency").val().trim();
var nextArrival = $("#nextArrival").val().trim();
var minutesAway = $("#minutesAway").val().trim();
// Test for variables entered
console.log(trainName);
console.log(destination);
console.log(frequency);
console.log(nextArrival);
console.log(minutesAway);

database.ref().push({
  trainName: trainName,
  destination: destination,
  frequency: frequency,
  nextArrival: nextArrival,
  minutesAway: minutesAway,
  
		
});
