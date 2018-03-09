//  API Key Giphy: wX0IGeaFDD9DLkPgN9cnUHm1SRHfkqw2



var foods = ["tomato", "lettuce", "avocado", "apple", "orange", "strawberry", "fruits", "beans", "sushi", "cookies", "ice cream", "vegetable", "ryan gosling"];

      // displayfoodInfo function re-renders the HTML to display the appropriate content
      function displayfoodInfo() {

        var food = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ food +"&api_key=wX0IGeaFDD9DLkPgN9cnUHm1SRHfkqw2&limit=10";

        // Creates AJAX call for the specific food button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            
          $("#foods-view").empty();
          console.log(response);
          console.log(response.data);
          console.log(response.data[0].rating);
          console.log(queryURL);
          console.log(response.data[0].images.fixed_width.url);
          
          // Creates a div to hold the food
          $("#foods-view").append("<div>"+ food + "</div>");
          // Retrieves the Rating Data
          
          // Creates an element to have the rating displayed
          $("#foods-view").append("<div>"+ response.data[0].rating + "</div>");
          // Displays the rating
          // Retrieves the release year
        //   $("#foods-view").append("<div>"+ response.Year + "</div>"); <--this was from copied code.
          // Creates an element to hold the release year
          // Displays the release year
          // Retrieves the plot
          // Creates an element to hold the plot
          // Appends the plot
          // Creates an element to hold the image
          // Appends the image
          $("#foods-view").append("<div><img src="+ response.data[0].images.fixed_width.url + "></div>");
          // Puts the entire food above the previous foods.
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