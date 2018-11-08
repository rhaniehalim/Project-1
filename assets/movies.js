// // Create array of movie search phrases	
// $(document).ready(function () {

// var topics = ["Fritz Lang", "Who's Afraid of Virginia Woolf", "Sophia Loren", "Cabinet of Dr. Caligari", "La Dolce Vita", "Charles Laughton", "Buster Keaton", "Marlon Brando", "James Dean", "The Passion of Joan of Arc", "Murnau Sunrise", "Double Indemnity", "Wizard of Oz"];
  
// //     // Create buttons for items in array
// function renderButtons() {
// $('#buttons-view').empty();
  
// for (var i = 0; i < topics.length; i++) {
// var a = $('<button>');
// a.addClass('cinema');
// a.attr('data-name', topics[i]);
// a.text(topics[i]);
// $('#buttons-view').append(a);
//        }
//      }
//      renderButtons();
  
// //     // When a button is clicked...
//      $(document).on('click', '.cinema', function () {
//   console.log("ok")

//        var cinemaSnob = $(this).html();
  
//      var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=d24732c07f760d728b453feb58faf3ec" + cinemaSnob;
  
// //       // Creating an AJAX call for the specific movie button being clicked
//   $.ajax({
//          url: queryURL,
//          method: "GET"
//        }).done(function (response) {
  
//         var results = response.data;
  
//         //Empty div before adding more gifs
//         $('#movies-view').empty();
//         for (var j = 0; j < results.length; j++) {
//           var imageDiv = $('<div>');
//           var imageView = results[j].images.fixed_height.url;
//           var still = results[j].images.fixed_height_still.url;
//           // console.log(imageView);  
  
//           var gifImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
//           gifImage.attr('data-state', 'still');
//           $('#movies-view').prepend(gifImage);
//           gifImage.on('click', playGif);
  
//           // Pull ratings for each movie
//           var rating = results[j].rating;
//           // console.log(rating);
//           var displayRated = $('<p>').text("Rating: " + rating);
//           $('#movies-view').prepend(displayRated);
//         } // end for loop
  
//       });
  
//       //Still then animate
//       function playGif() {
//         var state = $(this).attr('data-state');
//         // console.log(state);
//         if (state == 'still') {
//           $(this).attr('src', $(this).data('animate'));
//           $(this).attr('data-state', 'animate');
//         } else {
//           $(this).attr('src', $(this).data('still'));
//           $(this).attr('data-state', 'still');
//         }
  
//       } //end of on click function
  
//     }); //end of document on click 
  
//     //add new button to array
//     $(document).on('click', '#add-movie', function () {
      
//       if ($('#movie-input').val().trim() == '') {
//         alert('Please type in your search term.');
//       }
//       else {
//         var movies = $('#movie-input').val().trim();
//         topics.push(movies);
//         $('#movie-input').val('');
//         renderButtons();
//         return false;
  
//       }
//       event.preventDefault();  
//     });
  
  
//   }); // end click function

  (function() {
	window.tmdb = {
		"api_key": "",
		"base_uri": "http://api.themoviedb.org/3",
		"images_uri": "http://image.tmdb.org/t/p",
		"timeout": 5000,
		call: function(url, params, success, error){
            console.log("Success: "+e)
			var params_str ="api_key=d24732c07f760d728b453feb58faf3ec"+tmdb.api_key;
			for (var key in params) {
				if (params.hasOwnProperty(key)) {
					params_str+="&"+key+"="+encodeURIComponent(params[key]);
				}
			}
			var xhr = new XMLHttpRequest();
			xhr.timeout = tmdb.timeout;
			xhr.ontimeout = function () {
				throw("Request timed out: " + url +" "+ params_str);
			};
			xhr.open("GET", tmdb.base_uri + url + "?" + params_str, true);
			xhr.setRequestHeader('Accept', 'application/json');
			xhr.responseType = "text";
			xhr.onreadystatechange = function () {
				if (this.readyState === 4) {
					if (this.status === 200){
						if (typeof success == "function") {
							success(JSON.parse(this.response));	
						}else{
							throw('No success callback, but the request gave results')
						}
					}else{
						if (typeof error == "function") {
							error(JSON.parse(this.response));
						}else{
							throw('No error callback')
						}
					}
				}
			};
			xhr.send();
		}
	}
})()