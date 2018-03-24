
// Wait for the page to finish loading
$(document).ready(function() {

  /////// initialize and configure firebase db ///////
  var config = {
    apiKey: "AIzaSyC4rqt_jwRV4uK4XxSKKgAdZGysT62prY4",
    authDomain: "gtbootcamp2018-aw-1.firebaseapp.com",
    databaseURL: "https://gtbootcamp2018-aw-1.firebaseio.com",
    projectId: "gtbootcamp2018-aw-1",
    storageBucket: "gtbootcamp2018-aw-1.appspot.com",
    messagingSenderId: "725519115513"
  };

  firebase.initializeApp(config);
  var database = firebase.database();
  
  var currentDate = moment(Date()).format('MMDDYYYY');
  console.log(currentDate); 

  /////// button click to add employee /////
  $('button').on('click', function() {
    var name = $('#name').val().trim();
    var role = $('#role').val().trim();
    var startDate = $('#startDate').val().trim();
    var worked = moment().diff(startDate, 'months'); 
    // console.log(moment()); 
    // console.log(moment().diff(startDate, 'months'));  
    // console.log(worked); 
 

    var rate = $('#rate').val().trim();
    var billed = parseInt(rate * worked); 
    console.log(billed); 


    // console.log(name);
    // console.log(role);
    // console.log(startDate);
    // console.log(rate);

    var newEmp = {
      name: name,
      role: role, 
      startDate: startDate,
      worked: worked,
      rate: rate,
      billed: billed
    };

    // var tBody = $('.employee-board');
    // var tRow = $('<tr>');
    // var nameTd = $('<td class="name">').text(name);
    // var roleTd = $('<td class="role">').text(role);
    // var startTd = $('<td class="start">').text(startDate);
    // var workedTd = $('<td class="worked">').text(worked);
    // var rateTd = $('<td class="rate">').text(rate);
    // var billedTd = $('<td>').text(billed);

    // Adds new employee to the DOM
    // tRow.append(nameTd, roleTd, startTd, rateTd);
    // tBody.append(tRow);

    // Adds new employee to the DB
    database.ref().push(newEmp); 
    
  
  }); // END button click to add employee
  
  // database.ref().orderByChild('dateAdded').limitToLast(1).on("child_added", function(snapshot){});  
    
  // This event will be triggered once for each initial child at this location, and it will be triggered again every time a new child is added. 
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    // console.log(snapshot.val());
    var name = childSnapshot.val().name;
    var role = childSnapshot.val().role;
    var startDate = childSnapshot.val().startDate;
    var worked= childSnapshot.val().worked;
    var rate = childSnapshot.val().rate;
    var billed = parseInt(childSnapshot.val().billed);

    // console.log(name);
    // console.log(role);
    // console.log(startDate);
    // console.log(rate);
  
    // // // Change the HTML to reflect
    var tBody = $('.employee-board');
    var tRow = $('<tr>');
    var nameTd = $('<td class="name">').text(name);
    var roleTd = $('<td class="role">').text(role);
    var startTd = $('<td class="start">').text(startDate);
    var workedTd = $('<td class="worked">').text(worked);
    var rateTd = $('<td class="rate">').text('$' + rate);
    var billedTd = $('<td>').text('$' + billed);

    // Adds new employee to the DOM
    tRow.append(nameTd, roleTd, startTd, workedTd, rateTd, billedTd);
    tBody.append(tRow);





    // $("#name").text(name);
    // $("#role").text(role);
    // $("#startDate").text(startDate);
    // $("#rate").text(rate);
  
    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

  // database.ref().on('value'), function(snapshot){

//TODO: Math for dates and rates


//TODO: Display data directly from firebase

    
  

  

});