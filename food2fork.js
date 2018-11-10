$("#userInput").on("submit", function(e) {
  e.preventDefault();
  var userInput = $("#ingredient").val().trim();
  $.ajax({
    url: "https://www.food2fork.com/api/search?key=fb6b4f9634df7b544d284e2cd03ff3c1&q=" + userInput,
    method: "GET"
  }).then(function(result) {
    var resultObj = jQuery.parseJSON(result); 
    console.log(resultObj);
    console.log(resultObj.recipes);
    console.log(resultObj.recipes[0])
    console.log(resultObj.recipes[0].title);

    $("#recipesHolder").empty();
    
    for (var i = 0; i < 3; i++) {

    
  
  // Creating a div to hold the recipe
  var recipesDiv = $("<div class= 'recipes'>");

  //Storing the data
  var title = resultObj.recipes[i].title;
  // console.log(title);

  //Creating an element to have title displayed
  var titleDisp = $("<p>").text("Title: " + title);
  //displaying the data
  recipesDiv.append(titleDisp);
  
  var imgUrl = resultObj.recipes[i].image_url;
  console.log(imgUrl);
  var imgDisp = $("<img>").attr("src" , imgUrl);
  recipesDiv.append(imgDisp);
  
  // var ingredients = resultObj.recipes.ingredients;
  // var ingredientDisp = $("<p>").text("Ingredients: " + ingredients);
  // recipesDiv.append(ingredientDisp);
  
  var ranking= resultObj.recipes[i].social_rank;
  var socialRankDisp = $("<p>").text("Social Rank: " + ranking);
  recipesDiv.append(socialRankDisp);

  var sourceurl= resultObj.recipes[i].source_url;
  var sourceurlDisp= $("<p>").text("Source URL: " + sourceurl);
  recipesDiv.append(sourceurlDisp);
  $("#recipesHolder").prepend(recipesDiv);
}

  });
});

