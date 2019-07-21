$(document).ready(function() {
  // array of topics to display as buttons
  var topics = ["dracarys", "send help", "like a boss"];

  // function for displaying array as buttons
  function displayArrButtons() {
    $("#arrayBtn").empty();

    // looping through the length of the array
    for (var i = 0; i < topics.length; i++) {
      //display each string as a button in the browser
      $("#arrayBtn").append(
        '<button class="btn-primary">' + topics[i] + "</button>"
      );
    }
  }

  // call the function to see the buttons in browser
  displayArrButtons();

  $("document").on("click", "#displayGifHere", function() {
    event.preventDefault();

    // grabbing and storing the data-joke property value from the button
    var jokes = $("#displayGifHere")
      .val()
      .trim();
    topics.push(jokes);

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
      for (var i = 0; i < results.length; i++) {
        // create a new div to store the response
        var jokeDiv = $("<div>");

        // creat a paragraph tag to hold the result of the rating for each gif
        var p = $("<p>").text("Rating: " + results[i].rating);

        // store the image in an image tag
        var jokeImage = $("<img>");

        jokeImage.attr("src", results[i].images.fixed_height.url);

        // append the rating to the img tag along with the gifs
        jokeDiv.append(p);
        jokeDiv.append(jokeImage);

        // prepend the jokeDiv to the HTML page in the "#displayGifHere" div
        $("#displayGifHere").append(jokeDiv);
      }
    });
  });
});
