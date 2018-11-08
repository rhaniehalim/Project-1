$(document).ready(function () {

//Load movie option info into array for Netflix selections.
    var NfOptions = [
        {
            ntitle: "The Iron Giant", 
            nlink: "https://www.themoviedb.org/movie/10386-the-iron-giant?language=en-US",
            ndescription: "In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.",
            nposter: "movie-images/rdN6IjV4xlDDhrT8ewkkJfPvp2e-iron-giant.jpg"
         },
         {
            ntitle: "Cinema Paradiso", 
            nlink: "https://www.themoviedb.org/movie/11216-nuovo-cinema-paradiso?language=en-US",
            ndescription: "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
            nposter: "movie-images/khYsM4UEqOY4nM9Bf8ecyZZkCm0-cinema-paradiso.jpg"
         }, 
         {
            ntitle: "Stardust", 
            nlink: "https://www.themoviedb.org/movie/2270-stardust?language=en-US",
            ndescription: "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm. His journey takes him into a world beyond his wildest dreams and reveals his true identity.",
            nposter: "movie-images/A9gXvPOnMu961E36x5p3RT4FQ5E-stardust.jpg"
        }, 
        {
            ntitle: "The NeverEnding Story", 
            nlink: "https://www.themoviedb.org/movie/34584-the-neverending-story?language=en-US",
            ndescription: "While hiding from bullies in his school's attic, a young boy discovers the extraordinary land of Fantasia, through a magical book called The Neverending Story. The book tells the tale of Atreyu, a young warrior who, with the help of a luck dragon named Falkor, must save Fantasia from the destruction of The Nothing.",
            nposter: "movie-images/kpgv4C338cFHhDrFyjDVIbJQqp4-neverending-story.jpg"
        }, 
        {
            ntitle: "Bridge to Terabithia", 
            nlink: "https://www.themoviedb.org/movie/1265-bridge-to-terabithia?language=en-US",
            ndescription: "Jesse Aarons trained all summer to become the fastest runner in school, so he's very upset when newcomer Leslie Burke outruns him and everyone else. Despite this and other differences, including that she's rich, he's poor, and she's a city girl, he's a country boy, the two become fast friends. Together, they create Terabithia, a land of monsters, trolls, ogres, and giants and rule as king and queen.",
            nposter: "movie-images/gihMBO2SmUprI1ecYe7Eo7Eg1yq-bridge-terabithia.jpg"
        
        }];

 //Load movie option info into array for Amazon Prime selections.
    var ApOptions = [
        {
            atitle: "Paper Moon", 
            alink: "https://www.themoviedb.org/movie/11293-paper-moon?language=en-US",
            adescription: "During the Great Depression, a con man finds himself saddled with a young girl who may or may not be his daughter, and the two forge an unlikely partnership.",
            aposter: "movie-images/xq7F3iUFJY1L4UFIHoO2Y3fmnE6-paper-moon.jpg"
         },
         {
            atitle: "Galaxy Quest", 
            alink: "https://www.themoviedb.org/movie/926-galaxy-quest?language=en-US",
            adescription: "The stars of a 1970s sci-fi show - now scraping a living through re-runs and sci-fi conventions - are beamed aboard an alien spacecraft. Believing the cast's heroic on-screen dramas are historical documents of real-life adventures, the band of aliens turn to the ailing celebrities for help in their quest to overcome the oppressive regime in their solar system.",
            aposter: "movie-images/ahpUPhVlwAWic9N0SfNkxs8e66W-galaxy-quest.jpg"
         }, 
         {
            atitle: "A Man Called Ove", 
            alink: "https://www.themoviedb.org/search?query=A%20Man%20Called%20Ove&language=en-US",
            adescription: "Despite grumpy 59 year-old Ove being deposed as president of his condominium association, but he keeps looking over the neighbourhood with an iron fist. When pregnant Parvaneh and her family move into the terraced house opposite Ove and she accidentally back into Ove’s mailbox, it sets off a series of unexpected changes in his life.",
            aposter: "movie-images/9dwCRd569l2Q2nWTjBjUcVuwmoq-man-called-ove.jpg"
        }, 
        {
            atitle: "It's a Wonderful Life", 
            alink: "https://www.themoviedb.org/movie/1585-it-s-a-wonderful-life?language=en-US",
            adescription: "A holiday favourite for generations... George Bailey has spent his entire life giving to the people of Bedford Falls. All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company. But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
            aposter: "movie-images/rgj6QjdyCeDrO9KGt1kusGyhvb2-wonderful-life.jpg"
        }, 
        {
            atitle: "Apollo 13", 
            alink: "https://www.themoviedb.org/movie/568-apollo-13?language=en-US",
            adescription: "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.",
            aposter: "movie-images/7ksHQG9qbEyPBBTAe8NfJVAipmJ-apollo-13.jpg"
        
        }];


        //I need help adding basic functions: 
        
        //On click of Netflix button, pick random block (title, poster, description, link) from Netflix movie option array and append it to the page.
            
        //On click of Amazon button, pick random block from Amazon movie option array and append it to the page.

        //   var randomNumber = Math.floor((Math.random() + NFoptions.length - 1) + 1);
        //   var randomNFMovie = NfOptions[randomNumber];

       // var randomNumber = Math.floor((Math.random() + NFoptions.length - 1) + 1);
        //   var randomNFMovie = ApOptions[randomNumber];