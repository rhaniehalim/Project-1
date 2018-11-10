var NmovieID = ["2270-stardust", "10386-the-iron-giant", "11216-nuovo-cinema-paradiso", "1265-bridge-to-terabithia", "34584-the-neverending-story"];

        $("#netflix-submit").on("click", function () {
            var randomNumber = Math.floor((Math.random() * NmovieID.length));
            var randomMovie = NmovieID[randomNumber];

            var queryurl = "https://api.themoviedb.org/3/movie/" + randomMovie + "?api_key=d24732c07f760d728b453feb58faf3ec";

            $.ajax({
                url: queryurl,
                method: 'GET',
            }).done(function (result) {
                console.log(result);
                console.log(result.original_title);
                console.log(result.overview);
                console.log(result.poster_path);

                var NmovieDiv = $("<div>");
                var title = $("<p>").text("Title: " + result.original_title);
                var description = $("<p>").text("Description: " + result.overview);

                var NmoviePoster = $("<img>");
                NmoviePoster.attr("src", "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + result.poster_path);

                NmovieDiv.prepend(title);
                NmovieDiv.prepend(description);
                NmovieDiv.prepend(NmoviePoster);
                $("movieHolder").empty();
                $("#movieHolder").prepend(NmovieDiv);

            });
        })

        var AmovieID = ["11293-paper-moon", "926-galaxy-quest", "348678-en-man-som-heter-ove", "1585-it-s-a-wonderful-life", "568-apollo-13"];

        $("#amazon-submit").on("click", function () {
            console.log("in Amazon");
            
            var randomNumber = Math.floor((Math.random() * AmovieID.length));
            var randomMovie = AmovieID[randomNumber];
            

            var queryurl = "https://api.themoviedb.org/3/movie/" + randomMovie + "?api_key=d24732c07f760d728b453feb58faf3ec";

            $.ajax({
                url: queryurl,
                method: 'GET',
            }).done(function (result) {
                console.log(result);
                console.log(result.original_title);
                console.log(result.overview);
                console.log(result.poster_path);

                var AmovieDiv = $("<div>");
                var title = $("<p>").text("Title: " + result.original_title);
                var description = $("<p>").text("Description: " + result.overview);

                var AmoviePoster = $("<img>");
                AmoviePoster.attr("src", "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + result.poster_path);

                AmovieDiv.prepend(title);
                AmovieDiv.prepend(description);
                AmovieDiv.prepend(AmoviePoster);
                $("#movieHolder").empty();
                $("#movieHolder").prepend(AmovieDiv);

            });
        })
    