var keyboard = false;
var level =0;
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() 
{

  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  //console.log(userClickedPattern);

});

function nextSequence() 
{
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);  
}

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed")
    setTimeout(function (){$("#"+currentColour).removeClass("pressed")}, 100);

}
$(document).keypress(function(){
    if (keyboard === false)
    {
        keyboard = true;
        nextSequence();
        
    }
})

function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(nextSequence(),1000)
        }
    }
    else
    {
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        setTimeout(function(){$("body").removeClass("game-over")},200);
        startOver();
        console.log("wrong");
    }
}

function startOver()
{
    level =0;
    gamePattern =[];
    keyboard=false;
}