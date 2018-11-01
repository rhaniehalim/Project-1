 
 var queryURL = "https://www.food2fork.com/api/search?key=17bcd46eb1fb03d783dcdf98258cb850&q=shredded%20chicken";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });


