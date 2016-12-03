var wins = losses = 0;
      var resetGame = false;
      $("#score").text("Start Playing by clicking on a mushroom");
      playGame();
      $(document).click(function(){ 
          if (resetGame){
                resetGame =false;
                $("#crystals").empty();
                playGame();
              }
      });

      $("#dispRules").click(function(){
          $("#rules").toggle();
          console.log($("#dispRules").text());
          if($("#dispRules").text()=="Show Rules"){
            $("#dispRules").text("Hide Rules");
          }else{
             $("#dispRules").text("Show Rules");
          }
      });
      
    /*
     Add four images, assign a random number to the image. Check win-lose logic
    */
    function playGame(){
          resetGame = false
          var targetNumber = getTargetNumber();
          var target = $("#targetDisp");
          target.text("Number to guess: "+targetNumber)

          
          var counter = 0;
          var imgOptions = ["images/blue.jpg","images/green.jpg","images/red.jpg","images/yellow.jpg"]
          for (var i = 0; i < 4; i++) {
            addImage(imgOptions[i]);
          }

          $(".crystalImage").on("click", function() {
            var crystalValue = ($(this).data("crystalvalue"));
            counter += crystalValue;
            $("#score").text("Your score: " + counter);
            
            if (counter === targetNumber) {           
              wins++;
              $("#wins").text(wins);
              updateStatus("You win!! Start the next game by clicking on a mushroom.");
            } else if (counter >= targetNumber) {
              losses++;
              $("#losses").text(losses);
              updateStatus("You lose!! Try again by clicking on a mushroom.");
            }
          });
      }

    /* Update score and win/lose message*/
    function updateStatus(msg){
          $("#score").text(msg);  
          resetGame =  true;
    }

    /* add image and assign a random number value to each image */
    function addImage(newImg){
          var imageCrystal = $("<img>");
          imageCrystal.addClass("crystalImage col-lg-2");
          imageCrystal.attr("src", newImg);
          imageCrystal.attr("data-crystalvalue", getRandomData);          
          $("#crystals").append(imageCrystal);
    }

    /* Gereates and returns a random number between 1 and 12 */
    function getRandomData(){
            var num = Math.floor(Math.random()*12)+1;
            console.log("getRandomData" + num);
            return num;
    }
    
      /* Generates a random number between 19 and 120*/
    function getTargetNumber(){
            var num = Math.floor(Math.random()*101) +19;
            return num;
    }
    
    /* */
    function toggleRules(){

    }