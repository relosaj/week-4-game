var wins = 0;
var losses = 0;

var target ="";
var minTarget = 19;
var maxTarget = 120;

var counter = 0;
var tempScore = 0;

var minGem = 1;
var maxGem = 12;
var numberOptions = [];

var arrayMax = 4;
var limit = arrayMax + 1;

var elem = document.getElementById(".crystals");


var target = [Math.floor(Math.random() * (maxTarget - minTarget + 1)) + minTarget];
  console.log("This is the target: " + target);

for (var i = 0; i < arrayMax; i++) {
  numberOptions.push(Math.floor(Math.random() * (maxGem -minGem +1)) + minGem);
};
  console.log(numberOptions)

// var gem1 = numberOptions[0];
// var gem2 = numberOptions[1];
// var gem3 = numberOptions[2];
// var gem4 = numberOptions[3];

document.getElementById("target").innerHTML = target;
document.getElementById("tempScore").innerHTML = "0";

  function newGame() {
    target = [Math.floor(Math.random() * (maxTarget - minTarget + 1)) + minTarget];
    console.log("This is the target: " + target);
    document.getElementById("target").innerHTML = target;
    counter = 0;
    tempScore = 0;
  }

  function newNumberOptions() {
    numberOptions = [];
    for (var i = 0; i < arrayMax; i++) {
    numberOptions.push(Math.floor(Math.random() * (maxGem -minGem +1)) + minGem);
    };
    console.log(numberOptions);
  }

  function newCrystals () {
    // $('.crystals').remove();
      for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "https://www.goodfreephotos.com/albums/vector-images/ruby-gemstone-vector-clipart.png");
    imageCrystal.attr("height", "100px")
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }
  }

  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "https://www.goodfreephotos.com/albums/vector-images/ruby-gemstone-vector-clipart.png");
    imageCrystal.attr("height", "100px")
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    document.getElementById("tempScore").innerHTML = counter;
    console.log("New score: " + counter);

    if (counter === target) {
      wins++;
      document.getElementById("message").innerHTML = "You Win!";
      document.getElementById("wins").innerHTML = wins;
      console.log("You win!");
      document.getElementById("tempScore").innerHTML = "0";
      newNumberOptions();
      newGame();
      // newCrystals();
    }

    else if (counter >= target) {
      losses++;
      document.getElementById("message").innerHTML = "You Lost!";
      document.getElementById("losses").innerHTML = losses;
      document.getElementById("tempScore").innerHTML = "0";
      console.log("You lose!!");
      newNumberOptions();
      newGame();
      // newCrystals();
    }


  });