
// Wait for the page to finish loading
$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyDKWABfmD5z9i_HHVeWAbSxukH1yZqeoAE",
    authDomain: "susangt2018.firebaseapp.com",
    databaseURL: "https://susangt2018.firebaseio.com",
    projectId: "susangt2018",
    storageBucket: "susangt2018.appspot.com",
    messagingSenderId: "271189265430"
  };
  firebase.initializeApp(config);
  
  var Name;
  var Role;
  var startDate; 
  var Worked;
  var Rate = 0;
  var Billed = 0;
  
  database.ref().push({
    name: Name,
    role: Role,
    startDate: startDate,
    rate: Rate
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});