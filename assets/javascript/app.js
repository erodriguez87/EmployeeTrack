
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
  var database = firebase.database();
  
  $('button').on('click', function() {

  var name = $('#name').val().trim();
  var role = $('#role').val().trim();
  var startDate = $('#startDate').val().trim();
  var worked = 0;
  var rate = $('#rate').val().trim();
  var billed = 0;
  
  console.log(name);
  console.log(role);
  console.log(startDate);
  console.log(rate);

  var tBody = $('.employee-board');
  var tRow = $('<tr>');

  var nameTd = $('<td>').text(name);
  var roleTd = $('<td>').text(role);
  var startTd = $('<td>').text(startDate);
  var rateTd = $('<td>').text(rate);

  console.log(nameTd);

  tRow.append(nameTd, roleTd, startTd, rateTd);
  tBody.append(tRow);

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    
  
  dataRef.ref().orderByChild('dateAdded').limitToLast(1).on("child_added", function(snapshot){ });

  database.ref().on('value'), function(snapshot){
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startDate);
      console.log(snapshot.val().rate);

      // // Change the HTML to reflect
      $("#name").text(snapshot.val().name);
      $("#role").text(snapshot.val().role);
      $("#startDate").text(snapshot.val().startDate);
      $("#rate").text(snapshot.val().rate);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);

//TODO: Math for dates and rates
//TODO: Display data directly from firebase

    
  });
  
  console.log(Date()); 
  }); 

  

});