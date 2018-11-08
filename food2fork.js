
// //  var queryURL = "https://www.food2fork.com/api/search?key=612648c1517c7cc1041b41d2fe45129b&q=" + "vegetarian";
// var queryURL = "https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=37059" 
// //  var queryURL = "https://www.food2fork.com/api/search?key=17bcd46eb1fb03d783dcdf98258cb850&q=chicken%20breast&page=2" 
// // var recipe =[];
// //  17bcd46eb1fb03d783dcdf98258cb850
// //json.parse()
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(result) {
//       var resultObj = jQuery.parseJSON(result);
//       console.log(resultObj);
//       // var results = recipe.splice(0, 1, JSON.parse(result));
//       // var title = results[0].title;
//       // var count = 1;
//       // var recipes = results[0].recipes;
//       // var f2f_url = results[0].sourceUrl;
    
    
//     // Creating a div to hold the recipe
//     var recipeDiv = $("<div class= 'recipe'>");
  
//     //Storing the data
//     var title = resultObj.recipe.title;
    
//     //Creating an element to have title displayed
//     var titleDisp = $("<p>").text("Title: " + title);
//     //displaying the data
//     recipeDiv.append(titleDisp);
    
//     var imgUrl = resultObj.recipe.image_url;
//     console.log(imgUrl);
//     var imgDisp = $("<img>").attr("src" , imgUrl);
//     recipeDiv.append(imgDisp);
    
//     var ingredients = resultObj.recipe.ingredients;
//     var ingredientDisp = $("<p>").text("Ingredients: " + ingredients);
//     recipeDiv.append(ingredientDisp);
    
//     var ranking= resultObj.recipe.social_rank;
//     var socialRankDisp = $("<p>").text("Social Rank: " + ranking);
//     recipeDiv.append(socialRankDisp);

//     var sourceurl= resultObj.recipe.source_url;
//     var sourceurlDisp= $("<p>").text("Source URL: " + sourceurl);
//     recipeDiv.append(sourceurlDisp);
//     $("#recipeHolder").append(recipeDiv);
//   });

 
  // steakUrls
  var steakArray= ["https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=36413", "https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=47249", "https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=17380"];
  var randomSteak 
  function getrandomSteak(){ 
    randomSteak= steakArray[Math.floor(Math.random()* steakArray.length)]
    return randomSteak};


  // chickenUrls
  var chickenArray= ["https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=7056", "https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=21997b", "https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=72b297"];
  var randomSteak 
  function getrandomChicken(){ 
    randomChicken= chickenArray[Math.floor(Math.random()* chickenArray.length)]
    return randomChicken};

  // fishUrl= 
  var fishArray= ["https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=7bbe66", "https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=35224", "https://www.food2fork.com/api/get?key=17bcd46eb1fb03d783dcdf98258cb850&rId=37059"];
  var randomFish 
  function getrandomFish(){ 
    randomSteak= fishArray[Math.floor(Math.random()* fishArray.length)]
    return randomFish};

    
  $("#steak-submit").on("click", function() {
    getrandomSteak();
    $.ajax({
      url: randomSteak,
      method: "GET"
    }).then(function(result) {
      var resultObj = jQuery.parseJSON(result);
      console.log(resultObj);
    
    // Creating a div to hold the recipe
    var recipeDiv = $("<div class= 'recipe'>");
  
    //Storing the data
    var title = resultObj.recipe.title;
    
    //Creating an element to have title displayed
    var titleDisp = $("<p>").text("Title: " + title);
    //displaying the data
    recipeDiv.append(titleDisp);
    
    var imgUrl = resultObj.recipe.image_url;
    console.log(imgUrl);
    var imgDisp = $("<img>").attr("src" , imgUrl);
    recipeDiv.append(imgDisp);
    
    var ingredients = resultObj.recipe.ingredients;
    var ingredientDisp = $("<p>").text("Ingredients: " + ingredients);
    recipeDiv.append(ingredientDisp);
    
    var ranking= resultObj.recipe.social_rank;
    var socialRankDisp = $("<p>").text("Social Rank: " + ranking);
    recipeDiv.append(socialRankDisp);

    var sourceurl= resultObj.recipe.source_url;
    var sourceurlDisp= $("<p>").text("Source URL: " + sourceurl);
    recipeDiv.append(sourceurlDisp);
    $("#recipeHolder").prepend(recipeDiv);
    });
  });
  

  $("#chicken-submit").on("click", function() {
    getrandomChicken();
    $.ajax({
      url: randomChicken,
      method: "GET"
    }).then(function(result) {
      var resultObj = jQuery.parseJSON(result);
      console.log(resultObj);
    
    // Creating a div to hold the recipe
    var recipeDiv = $("<div class= 'recipe'>");
  
    //Storing the data
    var title = resultObj.recipe.title;
    
    //Creating an element to have title displayed
    var titleDisp = $("<p>").text("Title: " + title);
    //displaying the data
    recipeDiv.append(titleDisp);
    
    var imgUrl = resultObj.recipe.image_url;
    console.log(imgUrl);
    var imgDisp = $("<img>").attr("src" , imgUrl);
    recipeDiv.append(imgDisp);
    
    var ingredients = resultObj.recipe.ingredients;
    var ingredientDisp = $("<p>").text("Ingredients: " + ingredients);
    recipeDiv.append(ingredientDisp);
    
    var ranking= resultObj.recipe.social_rank;
    var socialRankDisp = $("<p>").text("Social Rank: " + ranking);
    recipeDiv.append(socialRankDisp);

    var sourceurl= resultObj.recipe.source_url;
    var sourceurlDisp= $("<p>").text("Source URL: " + sourceurl);
    recipeDiv.append(sourceurlDisp);
    $("#recipeHolder").prepend(recipeDiv);
    });
  });

  $("#fish-submit").on("click", function(){
    getrandomFish();
    $.ajax({
      url: randomSteak,
      method: "GET"
    }).then(function(result) {
      var resultObj = jQuery.parseJSON(result);
      console.log(resultObj);
    
    // Creating a div to hold the recipe
    var recipeDiv = $("<div class= 'recipe'>");
  
    //Storing the data
    var title = resultObj.recipe.title;
    
    //Creating an element to have title displayed
    var titleDisp = $("<p>").text("Title: " + title);
    //displaying the data
    recipeDiv.append(titleDisp);
    
    var imgUrl = resultObj.recipe.image_url;
    console.log(imgUrl);
    var imgDisp = $("<img>").attr("src" , imgUrl);
    recipeDiv.append(imgDisp);
    
    var ingredients = resultObj.recipe.ingredients;
    var ingredientDisp = $("<p>").text("Ingredients: " + ingredients);
    recipeDiv.append(ingredientDisp);
    
    var ranking= resultObj.recipe.social_rank;
    var socialRankDisp = $("<p>").text("Social Rank: " + ranking);
    recipeDiv.append(socialRankDisp);

    var sourceurl= resultObj.recipe.source_url;
    var sourceurlDisp= $("<p>").text("Source URL: " + sourceurl);
    recipeDiv.append(sourceurlDisp);
    $("#recipeHolder").prepend(recipeDiv);
    });
  });




  