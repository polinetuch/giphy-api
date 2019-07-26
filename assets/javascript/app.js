$(document).ready(function() {
  var gif = ["unicorn", "roses", "shooting stars"];

  // displayGifs function re-renders the HTML to display the appropriate content
  function displayGif() {
    event.preventDefault();
    var gifImage = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      gifImage +
      "&api_key=ZGa0mMJYIhqY7pqFoGuZwABAXMLx88zU&limit=10";

    // create an AJAX call for specific gifImage button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
      var results = response.data;

      // looping over every result item
      for (var i = 0; i < results.length; i++) {
        // create a div to hold the gif images
        var newDiv = $("<div class='gif'>");
        console.log(results.length);

        // create an element to have the rating displayed in browser
        var rating = results[i].rating;

        // create a paragraph tag with the result item's rating
        var pRating = $("<p>").text("Rating: " + rating);

        // create an image tag to hold all the gifs response from data
        var gifImage = $("<img>");

        // giving the image tag an src attribute of
        // a property pulled off the result item
        gifImage.attr("src", results[i].images.fixed_height.url);

        // append the pRating and gifImage
        newDiv.append(pRating);
        newDiv.append(gifImage);

        // prepending the newDiv to the #displayGifHere
        $("#displayGifHere").prepend(newDiv);
      }
    });
  }
  function renderButtons() {
    $("#arrayBtn").empty();

    // loop through the array of movies
    for (var i = 0; i < gif.length; i++) {
      // create a new button
      var inputButton = $("<button class='gif-button' data-name=>");

      // add class named newBtn to the button variable
      inputButton.addClass("newBtn");

      // add data-attribute
      inputButton.attr("data-name", gif[i]);

      // provide initial button text
      inputButton.text(gif[i]);

      // add the button to the #arrayBtn div
      $("#arrayBtn").append(inputButton);
    }
    displayGif();
  }

  $("#add-gif").on("click", function(event) {
    event.preventDefault();

    // grab the user's search input from text box
    var moreGifBtn = $("#buttonInput")
      .val()
      .trim();

    // add the input from the textbox to the array
    gif.push(moreGifBtn);

    // calling renderButtons, which handles the processing of the gif array
    renderButtons();
  });
  // // add a click event listent to all elements with class of gif-button
  $(document).on("click", ".gif-button", displayGif);

  // // calling the renderButtons function to display the initial buttons
  renderButtons();
});
