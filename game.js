const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];



function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .animate({ opacity: 0.5 })
    .animate({ opacity: 1 });

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  /* 
  $("#green").on("click", function () {
    
    $("#green").animate({ opacity: 0.5 }).animate({ opacity: 1 });
  });
  
  $("#yellow").on("click", function () {
    $("audio#yellowSound")[0].play();
    $("#yellow").animate({ opacity: 0.5 }).animate({ opacity: 1 });
  });

  $("#blue").on("click", function () {
    $("audio#blueSound")[0].play();
    $("#blue").animate({ opacity: 0.5 }).animate({ opacity: 1 });
  }); */
}
