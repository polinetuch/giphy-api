$(document).ready(function() {
  var gif = ["books", "flower", "stars"];
  for (var i = 0; i < gif.length; i++) {
    $("#arrayBtn").append("<button class='gif-button'>" + gif[i] + "</button>");
  }

  // $("#gif-button").on("click", function() {
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    gif +
    "&api_key=ZGa0mMJYIhqY7pqFoGuZwABAXMLx88zU&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);

    var result = response.data;

    for (var i = 0; i < result.length; i++) {
      $(".gif-button").attr("src", result[i].images.fixed_height.url);
      console.log(result);

      var pTag = $("<p>").text("Rating: " + result[i].rating);
      var newImg = $("#displayGifHere").attr(
        "src",
        result[i].images.fixed_height.url
      );
      newImg.append(pTag);
    }
  });

  // $("#submitBtn").on("click", function() {
  //   var inputBtn = "";
  //   inputBtn =
  // })
  // });
});
