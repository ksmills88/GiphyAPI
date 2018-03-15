// 



// Still need to change the image src to the moving version when clicked. Need to set status to either static or moving when clicked.
// Each time clicked, status will change and the img source will also change.



var foods = ["tomato", "lettuce", "avocado", "apple", "orange", "strawberry", "fruits", "beans", "sushi", "cookies", "ice cream", "vegetable"];

      // displayfoodInfo function re-renders the HTML to display the appropriate content
      function displayfoodInfo() {

        var food = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ food +"&api_key=wX0IGeaFDD9DLkPgN9cnUHm1SRHfkqw2&limit=10";

        

        // Creates AJAX call for the specific food button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          var results = response.data;
          $("#foods-view").empty();
          for (var i = 0; i < results.length; i++) {
          
         
            console.log(response.data);
            console.log(movingImage);
            console.log(queryURL);
            var stillImage = response.data[i].images.fixed_height_small_still.url;
            var movingImage = response.data[i].images.fixed_height_small.url;

            var image = $("<img>");
                        
            // Creates an element to have the rating displayed
            $("#foods-view").append("<div>"+ response.data[i].rating + "</div>").addClass("col ratings");
            
            
            $("#foods-view").append("<div><img src="+ response.data[i].images.fixed_height_small_still
            .url + "></div>")
            $('<div>').find('img').addClass('image-class')

           
          console.log(this);
          
        }


        });
    
      }

      // Function for displaying food data
      function renderButtons() {

        // Deletes the foods prior to adding new foods
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Loops through the array of foods
        for (var i = 0; i < foods.length; i++) {

          // Then dynamicaly generates buttons for each food in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of food to our button
          a.addClass("food");
          // Added a data-attribute
          a.attr("data-name", foods[i]);
          // Provided the initial button text
          a.text(foods[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where the add food button is clicked
      $("#add-food").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var food = $("#food-input").val().trim();

        // The food from the textbox is then added to our array
        foods.push(food);
       
        // Calling renderButtons which handles the processing of our food array
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "food"
      $(document).on("click", ".food", displayfoodInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();