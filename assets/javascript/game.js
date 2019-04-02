var targetNumber = Math.floor(Math.random()* 100) +20;
$("#number-to-guess").text(targetNumber);

var wins = 0;
var losses = 0;
var counter = 0;
var numberOptions = [4, 7, 9, 11];

var winsText = $("#wins");
var lossesText = $("#losses");

winsText.text("Wins: " + wins);
lossesText.text("Losses: " + losses);

function randomNumber() {
  numberOptions[Math.floor(Math.random()*numberOptions.length)]
  console.log(numberOptions[(Math.floor(Math.random()*numberOptions.length))]);
}

var imageCrystal1 = $("#crystal1");
var imageCrystal2 = $("#crystal2");
var imageCrystal3 = $("#crystal3");
var imageCrystal4 = $("#crystal4");

imageCrystal1.addClass("crystal-image1");
imageCrystal2.addClass("crystal-image2");
imageCrystal3.addClass("crystal-image3");
imageCrystal4.addClass("crystal-image4");

imageCrystal1.append("<img src='assets/images/crystalblue.jpg' class='crystal-image1'>");
imageCrystal2.append("<img src='assets/images/crystalgreen.png' class = 'crystal-image2'>");
imageCrystal3.append("<img src='assets/images/crystalpurple.png' class = 'crystal-image3'>");
imageCrystal4.append("<img src='assets/images/crystalred.png' class = 'crystal-image4'>");

imageCrystal1.attr("data-crystalvalue1", numberOptions[Math.floor(Math.random()*numberOptions.length)]);
imageCrystal2.attr("data-crystalvalue2", numberOptions[Math.floor(Math.random()*numberOptions.length)]);
imageCrystal3.attr("data-crystalvalue3", numberOptions[Math.floor(Math.random()*numberOptions.length)]);
imageCrystal4.attr("data-crystalvalue4", numberOptions[Math.floor(Math.random()*numberOptions.length)]);

// $("#crystal1").append(imageCrystal1);
// $("#crystal2").append(imageCrystal2);
// $("#crystal3").append(imageCrystal3);
// $("#crystal4").append(imageCrystal4);

    // ______________________________________________________

$("#crystal1").on("click", function() {

  var crystalValue1 = $(this).attr("data-crystalvalue1");
  console.log(crystalValue1);
  crystalValue1 = parseInt(crystalValue1);

  counter += crystalValue1;

  alert("Your New Score: " + counter);

  if (counter === targetNumber) {
    alert("Wooot, You Won!");
    wins++;
    winsText.text("Wins: " + wins);
  }

  else if (counter >= targetNumber) {
    alert("Dang, You Lost!");
    losses++;
    lossesText.text("Losses: " + losses);
  }
});

// --------------------------------------------------------
$("#crystal2").on("click", function() {

  var crystalValue2 = $(this).attr("data-crystalvalue2");
  console.log(crystalValue2);
  crystalValue2 = parseInt(crystalValue2);

  counter += crystalValue2;

  alert("Your New Score: " + counter);

  if (counter === targetNumber) {
    alert("Wooot, You Won!");
    wins++;
    winsText.text("Wins: " + wins);
  }

  else if (counter >= targetNumber) {
    alert("Dang, You Lost!");
    losses++;
    lossesText.text("Losses: " + losses);
  }
});

// --------------------------------------------------------
$("#crystal3").on("click", function() {

  var crystalValue3 = $(this).attr("data-crystalvalue3");
  console.log(crystalValue3);
  crystalValue3 = parseInt(crystalValue3);

  counter += crystalValue3;

  alert("Your New Score: " + counter);

  if (counter === targetNumber) {
    alert("Wooot, You Won!");
    wins++;
    winsText.text("Wins: " + wins);
  }

  else if (counter >= targetNumber) {
    alert("Dang, You Lost!");
    losses++;
    lossesText.text("Losses: " + losses);
  }
});

// --------------------------------------------------------
$("#crystal4").on("click", function() {

  var crystalValue4 = $(this).attr("data-crystalvalue4");
  console.log(crystalValue4);
  crystalValue4 = parseInt(crystalValue4);

  counter += crystalValue4;

  alert("Your New Score: " + counter);

  if (counter === targetNumber) {
    alert("Wooot, You Won!");
    wins++;
    winsText.text("Wins: " + wins);
  }

  else if (counter >= targetNumber) {
    alert("Dang, You Lost!");
    losses++
    lossesText.text("Losses: " + losses);
  }
});