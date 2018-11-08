$(document).ready(function(){
 
  // var netflixArray = ["Stardust", "Cinema Paradiso", "The Iron Giant", "Groundhog Day"];

  // function apiCall() {
  //     var randomNumber = Math.floor((Math.random() + netflixArray.length - 1) + 1);
  //     var randomMovie = netflixArray[randomNumber];
      
  //     $.getJSON("http://www.omdbapi.com/?i=tt3896198&apikey=f62ac4e4") + (randomMovie).then(response);
  //     var image = response.Poster; 
  //     console.log(image);
  //     if(image !== "N/A") {
  //         $("img").attr('src', image);
  //     };
  
  // }
  // $("button").click(function() {
  //     apiCall()
  //     console.log("hi");
      
  // })
  // })

  $('#movieSearch').submit(function(e){
    e.preventDefault();
    var userInput = $('#searchTerm').val();
    var searchUrl= "https://api.themoviedb.org/3/search/movie?api_key=d24732c07f760d728b453feb58faf3ec&query=" + userInput
    console.log(searchUrl);
    
    var request = $.ajax({
      url: searchUrl,
      async: true,
      type: "get",
      // data: { s: userInput },
      dataType: "json",
    });

    request.done(function(results){
      console.log(results)
//       $.each(results["Search"], function(index, movie){
//       //   $('#results').append("<li data-imdbid = " + movie['imdbID'] + ">" + movie["Title"] + "</li> ");  
//       // console.log(results)
//       // });
//     });

//     var details = $('#results').delegate('li', 'click', function(f){
//       f.preventDefault();
//       var inner = $(f.target).data("imdbid");

      
//       var poster = $.ajax({
//         url: "http://www.omdbapi.com/?i=tt3896198&apikey=f62ac4e4",
//         async: true,
//         type: "get",
//         data: { i: inner },
//         dataType: "json" 
//       });

//       poster.done(function(data){
//         $('#movieDetails').html("");
//         if (data["Poster"] == "N/A"){
//           $('#movieDetails').append("<p>No picture available</p>");
//         }
//         else {
//         $('#movieDetails').append("<img src='" + data["Poster"] + "'</img>");
//         }
//       });
//     });
}); 


});
})