var ingredients = [];
var apiKey = "19c8ef98b95c43ccbc622424c606372b";
//On click event to capture user input and pass to ingredients array, then makes AJAX call for API
$("#submitI").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();
    // This line will grab the text from the input box
    var ingredient = $("#add-ingredient").val().trim();
    // The ingredient from the textbox is then added to our array
    ingredients.push(ingredient);
    var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=d0f24b12&app_key=" + apiKey + "&from=0&to=5";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response)
    });         
});

// // Geolocation Information 
// var elMap = document.getElementById('loc');                 // HTML element
// var msg = 'Sorry, we were unable to get your location.';    // No location msg
// if (Modernizr.geolocation) {                                // Is geo supported
//   navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
//  if (elMap && elMap.textContent) {
//    elMap.textContent = 'Checking location...'; 
//  }               // Say checking...
// } else {                                                    // Not supported
//   elMap.textContent = msg;                                  // Add manual entry
// }
// function success(position) {                                // Got location
//   msg = $('<h3>Longitude:<br>');                               // Create message
//   msg += position.coords.longitude + '</h3>';               // Add longitude
//   msg += '<h3>Latitude:<br>';                               // Create message
//   msg += position.coords.latitude + '</h3>';                // Add latitude
//   elMap.innerHTML = msg;                                    // Show location
// }
// function fail(msg) {                                        // Not got location
//   elMap.textContent = msg;                                  // Show error message
//   console.log(msg.code);                                    // Log the error
// }