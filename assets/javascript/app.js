$(document).ready(function() {
  $("button").on("click", function() {
    // grabbing and storing the data-joke property value from the button
    var jokes = $(this).attr("data-joke");
    console.log(jokes);

    // create a queryURL using the topic of jokes
    var queryURL =
      "http://api.giphy.com/v1/gifs/search?q=" +
      jokes +
      "&api_key=ZGa0mMJYIhqY7pqFoGuZwABAXMLx88zU&limit=10";

    // perform an ajax request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"

      // after data comes back from the request
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);

      // store the data from AJAX in this variable named results
      var results = response.data;

      // loop through each result item
      // for (var i = 0; i < results.length; i++) {

      //     // create a new div to store the response
      //     var jokeDiv = $("<div>");

      // }
    });
  });
});
