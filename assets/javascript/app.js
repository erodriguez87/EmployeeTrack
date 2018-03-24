// GIPHY
// ------------

// Wait for the page to finish loading
$(document).ready(function() {
  
  //<===========================================================>
  //This section is for creating the dynamic buttons. I set up my initial array, do a for loop through the array and create dynamic buttons, attach the buttons to the page
  var btnArr = ['panda','sad panda','angry panda','sneezing panda','funny panda'];

  function createButtons() {
    $('.btnDiv').empty();
    for (var i = 0; i<btnArr.length; i++) {
      var ht = $('<button>');
      ht.attr('value', btnArr[i]);
      ht.attr('class', 'imgs btn-info');
      ht.text(btnArr[i]);
      $('.btnDiv').append(ht);
    }
  }
  createButtons();
  //<===========================================================>

  
  //<===========================================================>
  // This is for finding GIFS and adding them to the DIV
    $('.btnDiv').on('click', '.imgs', function () {

      var animal = $(this).attr('value'); 
        console.log('inside button click');
       // Set up my API URL and use the jquery ajax call to connect, create an array of the returned objects
        //<===========================================================>
        
        var key ="8KJTapEvX7j2KumIaK3ZwOLrgYOClMs3";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key="+key+"&limit=15";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            var objectsRet = response.data
            console.log('returned' + objectsRet);
        //<===========================================================>

        // for loop to add all the images to the div
        //<===========================================================>

        for (i = 0; i < objectsRet.length; i++) {
          var imgDisplay = $("<img>");
          var gifcapt = $('<labels>');

            imgDisplay.addClass("images img-fluid rounded mx-auto d-block text-center"); 
            imgDisplay.attr('src', objectsRet[i].images.original_still.url);
            imgDisplay.attr('dt-animate', objectsRet[i].images.original.url); 
            imgDisplay.attr('dt-still', objectsRet[i].images.original_still.url); 
            imgDisplay.attr('dt-state', 'still'); 
          
            imgDisplay.attr('rating', objectsRet[i].rating);

            var gifcapt = $('<labels>');
            var rtng = objectsRet[i].rating; 
            console.log(rtng); 
            var giflbl= $('<lbl>'); 
            giflbl.text('this is rated ' + rtng); 
            gifcapt.prepend(giflbl); 
            gifcapt.append(imgDisplay); 
            $('.gifDiv').prepend(gifcapt); 


        } // close the for loop
      }) // close the ajax call
    }) // close the on clicks for adding gifs to the DIV
    //<===========================================================>

    //<===========================================================>
    //Adds a new button when the user searches
  $('.find').on('click', function(event) {
    event.preventDefault(); //prevents submission of the form and refreshing of the page
    var newSearch = $('.clicky').val();
    newSearch += ' panda';
    btnArr.push(newSearch); 
    createButtons(); 
  });
    //<===========================================================>
  
    //<===========================================================>
    //Actions that happen when the gifs are clicked. If animated pause, else animate
    $('.gifDiv').on('click', '.images', function () {
      
      var playPause = $(this).attr('dt-state'); 
      var still = $(this).attr('dt-still'); 
      var anim = $(this).attr('dt-animate'); 
  
      if (playPause === 'still') {
        playPause = 'animate'; 
        $(this).attr('src', anim);
        $(this).attr('dt-state', 'animate');
      }  else {
        $(this).attr('src', still);
        $(this).attr('dt-state', 'still');
      }
    }); 
    //<===========================================================>

    //<===========================================================>
    //Clear section
    $(".clear").on("click", function() {
      $('.form-group :input').val('');
    });
  
  

});