// ------------------------------ EDAMAM API -------------------------------------------- //

// Edamam API call and ingredients/image placement----------
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
        console.log(response);

        var results = response.hits

        for (var i = 0; i < results.length; i++) {
            console.log(response.hits[i].recipe.ingredientLines);
            $("#foodInfo").empty();
            $("#foodImage").empty();
            for (var j = 0; j < response.hits[i].recipe.ingredientLines.length; j++) {
                console.log(response.hits[i].recipe.ingredientLines[j]);
                var imgRURL = response.hits[i].recipe.image;
                var imageR = $("<img>").attr("src", imgRURL);
                imageR.attr("alt", response.hits[i].recipe.label);
                imageR.attr("title", response.hits[i].recipe.label);
                $("#foodInfo").append(response.hits[i].recipe.ingredientLines[j] + "<br>");
            };
        };
        $("#foodImage").append(imageR);
    });
    return false;
});

// -----------------END Edamam API------------------ //

// ---------------------------------- OMDB API ---------------------------------------- //

var movies = [];
$("#submitM").on("click", function (event) {
    event.preventDefault();
    var movie = $("#add-genre").val().trim();
    movies.push(movie);
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&plot=full&apikey=b9fb94d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var plot = response.Plot;
        var pOne = $("<h6>").text("Plot: " + plot);
        $("#movieInfo").append(pOne);
        var imgURL = response.Poster;
        var imageM = $("<img>").attr("src", imgURL);
        imageM.attr("id", "ImageM");
        $("#movieImage").append(imageM);
    });
    $("#movieInfo").empty();
    $("#movieImage").empty();
});

// ---------------------------------- END OMDB API -------------------------------------- //

// ------------------------------------ FIREBASE JS -------------------------------------------- //

// Initialize Firebase
let config = {
    apiKey: "AIzaSyBEfzG397p3tAkbbjXXMS2MEDB5nNXZ_Hw",
    authDomain: "maldrek-rainy-date.firebaseapp.com",
    databaseURL: "https://maldrek-rainy-date.firebaseio.com",
    projectId: "maldrek-rainy-date",
    storageBucket: "maldrek-rainy-date.appspot.com",
    messagingSenderId: "659863819058"
};

firebase.initializeApp(config);

let database = firebase.database();

// Initial Values
let firstName = "";
let lastName = "";
let place = "";
let state = "";
let zipCode = "";
let comment = "";
let stars = "";

// Capture Button Click
$("#add-review").on("click", function (event) {

    // Don't refresh the page!
    event.preventDefault();

    // grabbing initial values for the on-click function
    firstName = $("#firstName").val().trim();
    lastName = $("#lastName").val().trim();
    city = $("#city").val().trim();
    state = $("#state").val().trim();
    zipCode = $("#zipCode").val().trim();
    comment = $("#textReview").val().trim();
    stars = $("#star-rating").val();

    database.ref().push({
        First: firstName,
        Last: lastName,
        City: city,
        State: state,
        Zip: zipCode,
        Review: comment,
        Stars: stars
    });

    $("#firstName").val("");
    $("#lastName").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zipCode").val("");
    $("#textReview").val("");

});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function (snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val().Stars);
    console.log(snapshot.val().First);
    console.log(snapshot.val().Last);
    console.log(snapshot.val().City)
    console.log(snapshot.val().State);
    console.log(snapshot.val().Zip);
    console.log(snapshot.val().Review);

    // Change the HTML to reflect
    let value = snapshot.val();

    // create new row for the review to be stored
    let newRow = $("<div>");
    newRow.addClass("row");

    // create new div to store the review. Add classes and id for CSS Styling
    let newDiv = $("<div>");
    newDiv.addClass("jumbotron row col-lg-8 col-md-8 col-sm-8 col-xs-8 mx-auto");
    newDiv.attr("id", "newReview");

    let div1 = $("<div>");
    div1.addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6 float-left");

    let div2 = $("<div>");
    div2.addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6");

    // create html for the string values and set their classes
    // for the name
    let nameInfo = $("<h5>");
    nameInfo.addClass("text-white");
    nameInfo.text(value.First + " " + value.Last);

    // append nameInfo to the newDiv
    div1.append(nameInfo);

    // for the place
    let placeInfo = $("<h5>");
    placeInfo.addClass("text-white");
    placeInfo.text(value.City + ", " + value.State + " " + value.Zip);

    // append placeInfo to the newDiv
    div1.append(placeInfo);

    // for the message
    let messageInfo = $("<h6>");
    messageInfo.addClass("text-white");
    messageInfo.text(value.Review);

    // append messageInfo to div2
    div2.append(messageInfo);

    // append div1 & div2 into newDiv
    newDiv.append(div1, div2);

    // append newDiv to the newRow
    newRow.append(newDiv);

    // append newRow to added-reviews div id
    $("#added-reviews").append(newRow);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

// --------------------------------- END FIREBASE JS ------------------------------------ //