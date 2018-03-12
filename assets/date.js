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
        var results = response.hits;
        for (var i = results.length - 1; i >= 0; i--) {
            results[i]
        }
        console.log(response);
        $(".food").text(response.hits);
        $("#add-ingredient").val("");
    });
    return false;
});
$("#submit").on("submit", function (event) {
    event.preventDefault();
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEfzG397p3tAkbbjXXMS2MEDB5nNXZ_Hw",
    authDomain: "maldrek-rainy-date.firebaseapp.com",
    databaseURL: "https://maldrek-rainy-date.firebaseio.com",
    projectId: "maldrek-rainy-date",
    storageBucket: "maldrek-rainy-date.appspot.com",
    messagingSenderId: "659863819058"
};

firebase.initializeApp(config);