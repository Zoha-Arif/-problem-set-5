/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {
  var input = prompt("Enter a number:");
  ////////////// DO NOT MODIFY
  let height = input; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  height = Number(height);
  if (Number.isInteger(height) == false) {
    while (Number.isInteger(height) == false){
      var input1 = prompt("That's not a number! Enter a number:");
      height = input1;
      height = Number(height);
    }
  }

height = Number(height);
  if (1 < height && height < 23) {
  }

  else {
    while (height < 1 || height > 23) {
      var input2 = prompt("Enter a number between 1 and 23:");
      height = input2;
      height = Number(height);
    }
}
//Final row length = height + 1;
//Number of spaces = final row length - hashtags;
//Number of hashtags = final row length - spaces;
//Number of hashtags = i + 2
// char add + 1?

  for (var i = 1; i <= height; i++){
    var numb_hashes = i;
    var numb_of_spaces = height - numb_hashes;
    var output_a = ' ';
    var hashes = "#";
      for (var w = 1; w <= numb_of_spaces; w++) {
          output_a = output_a + '<code>&nbsp&nbsp</code>';
        }
      for (var z = 0; z < numb_hashes; z++) {
        hashes = hashes + "#";
      }

      document.getElementById("mario-easy-output").innerHTML += `${output_a}${hashes}<br/>`;

  }


  // WRITE YOUR EXERCISE 1 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  height = Number(height);
  if (Number.isInteger(height) == false) {
    while (Number.isInteger(height) == false){
      var input1 = prompt("That's not a number! Enter a number:");
      height = input1;
      height = Number(height);
    }
  }

height = Number(height);
  if (1 < height && height < 23) {
  }

  else {
    while (height < 1 || height > 23) {
      var input2 = prompt("Enter a number between 1 and 23:");
      height = input2;
      height = Number(height);
    }
}

//Final number of rows = height + 1;
//Number of spaces = final row length - hashtags;
//Number of hashtags = final row length - spaces;
//Number of hashtags = i + 2
// char add + 1?
//workflow: print original pyramid three spaces, then print the same number of hashes.

    for (var i = 1; i <= height; i++){
      var numb_hashes = i;
      var numb_of_spaces = height - numb_hashes;
      var output_a = '';
      var hashes = "#";
      for (var w = 1; w <= numb_of_spaces; w++) {
          output_a = output_a + '<code>&nbsp&nbsp</code>';
      }
      for (var z = 0; z < numb_hashes; z++) {
        hashes = hashes + "#";
      }
        document.getElementById("mario-hard-output").innerHTML += `${output_a} ${hashes} &nbsp&nbsp&nbsp ${hashes}<br/>`;
    }

  // WRITE YOUR EXERCISE 2 CODE HERE

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY
  card = prompt("Enter your credit card number:");

  var card1 = Number(card);
  if (Number.isInteger(card1) == false) {
    while (Number.isInteger(card1) == false){
      var input1 = prompt("That's not a number! Enter a correct credit card number:");
      card1 = input1;
      card1 = Number(card1);
    }
  }

  console.log(1);

card1 = card;
  if (card1.length < 13 || card1.length > 16) {
    while (card1.length < 13 || card1.length > 16){
      var input2 = prompt("Enter a correct credit card number:");
      card1 = input2;
    }
  }

  console.log(2);

var creditcard = [];
for (var i = 0; i < card1.length; i++){
  creditcard.push(card1.charAt(i));
}

console.log(3);
console.log(card.length);
console.log(creditcard);

var sum = 0;
//infinite loop because "w" will always be less than card1.
var l_number = card1.length - 2;
for (var w = l_number; w >= 0; w = w - 2) {
  creditcard[w] = Number(creditcard[w]) * 2;
  if (creditcard[w].toString().length == 2) {
    sum =  sum + Number(creditcard[w].toString().charAt(0));
    sum = sum + Number(creditcard[w].toString().charAt(1));
  }

  else{
    sum = sum + Number(creditcard[w]);
  }

console.log("w is " + w);
console.log("sum is " + sum);
console.log("Type of variable:");
console.log(creditcard[w]);
}

console.log(4);
var sum2 = 0;

console.log("credit card is: " + creditcard);

var j_number = card1.length - 1;
for (var z = j_number; z >= 0; z = z - 2) {
    sum2 = Number(sum2) + Number(sum) + Number(creditcard[z]);

    console.log("jj sum 2 is:");
    console.log(sum2);
    console.log("sum is");
    console.log(Number(sum));
    console.log("creditcard[z]");
    console.log(creditcard[z]);
}

console.log(5);
sum2 = Number(sum2);

console.log("sum 2: " + (sum2 % 10));

  if (sum2 % 10 == 0){
  }

  else {
    console.log(6);
    while (sum2 % 10 != 0){
      var input4 = prompt("Enter a correct credit card number:");
      card1 = input4;
      var creditcard = [];

      console.log(7);

      for (var i = 0; i < card1.length; i++){
        creditcard.push(card1.charAt(i));
      }

      console.log(8);

      for (var w = -2; w <= card1.length;) {
        creditcard[w] = creditcard[w] * 2;
        var sum = sum + creditcard[w];
          w = w - 2;
      }

      console.log(9);

      for (var z = -1; z <= card1.length;) {
        var sum2 = sum + creditcard[z]
        z = z - 2;
        console.log(sum2);
      }

      console.log(10);
  }
  console.log(11);
}

  if (card1.chartAt(0) == 3) {
    if (card1.chartAt(1) == 4 || card1.chartAt(1) == 7){
      if(card1.length == 15){
          document.getElementById("credit-output").innerHTML = "American Express";
      }
    }
}

  else if (card1.chartAt(0) == 5) {
    if (card1.chartAt(1) >= 1 && card1.chartAt(1) <= 5){
      if (card1.length == 16){
        document.getElementById("credit-output").innerHTML = "Master Card";
      }
    }
  }

  else if (card1.chartAt(0) == 4) {
      if (card1.length >= 13 && card1.length <= 16){
        document.getElementById("credit-output").innerHTML = "Visa";
      }
    }


  // WRITE YOUR EXERCISE 3 CODE HERE

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {
  var right_num = Math.floor((Math.random() * 1000) + 1);
  var user_guess = prompt("Guess a number between 1 and 1000:");
  user_guess = Number(user_guess);

  if (Number.isInteger(user_guess) == false) {
    while (Number.isInteger(user_guess) == false){
      var user_guess1 = prompt("Guess a number between 1 and 1000:");
      user_guess = user_guess1;
      user_guess = Number(user_guess);
    }
  }

user_guess = Number(user_guess);
  if (1 < user_guess && user_guess < 1000) {
  }

  else {
    while (user_guess < 1 || user_guess > 1000) {
      var user_guess2 = prompt("Guess a number between 1 and 1000:");
      user_guess = user_guess2;
      user_guess = Number(user_guess2);
    }
}

var attempts = 0;

if (user_guess != right_num) {
  while(user_guess != right_num){
    if (user_guess > right_num){
      var user_guess = prompt("Guess again! Too high!");
      user_guess = Number(user_guess);
      attempts = attempts + 1;
    }
    else if (user_guess < right_num){
      var user_guess = prompt("Guess again! Too low!");
      user_guess = Number(user_guess);
      attempts = attempts + 1;
    }
  }
}
  document.getElementById("guess-output").innerHTML += `Attempts: ${attempts} Correct Number: ${right_num}`

  // WRITE YOUR EXERCISE 4 CODE HERE

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  if (Number.isInteger(windspeed) == false) {
    while (Number.isInteger(windspeed) == false){
      var windspeed1 = prompt("Enter windspeed:");
      windspeed = windspeed1;
      windspeed = Number(windspeed);
    }
  }

  windspeed = Number(windspeed);
  if (Number.NEGATIVE_INFINITY < windspeed && windspeed < Number.POSITIVE_INFINITY) {
  }

  else {
    while (windspeed < Number.NEGATIVE_INFINITY || windspeed > Number.POSITIVE_INFINITY) {
      var windspeed2 = prompt("Enter windspeed:");
      windspeed = windspeed2;
      windspeed = Number(windspeed);
    }
  }

  if (windspeed >= 157){
    document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane.";
  }
  else if (windspeed >= 130 && windspeed <= 156) {
    document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane.";
  }

  else if (windspeed >= 111 && windspeed <= 129) {
    document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane.";
  }

  else if (windspeed >= 96 && windspeed <= 110) {
    document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane.";
  }

  else if (windspeed >= 74 && windspeed <= 95) {
    document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane.";
  }

  else if (windspeed >= 39 && windspeed <= 73) {
    document.getElementById("hurricane-output").innerHTML = "Tropical Storm.";
  }

  else {
    document.getElementById("hurricane-output").innerHTML = "The skies are calm...";
  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
var i = 1;
while (i <= 6){
  var score = prompt(`Enter six scores. You will be prompted six times. Each time enter one score. \n Enter score ${i}:`);

  score = Number(score);
  if (Number.isInteger(score) == false) {
    while (Number.isInteger(score) == false){
      var input6 = prompt("That's not a number! Enter a number:");
      score = input6;
      score = Number(score);
    }
  }

  score = Number(score);
  if (score >= 1 && score <= 10) {
  }

  else {
    while (score < 1 || score > 10) {
      var input8 = prompt("Enter a score between 1 and 10:");
      score = input8;
      score = Number(score);
      if (Number.isInteger(score) == false) {
        while (Number.isInteger(score) == false){
          var input6 = prompt("That's not a number! Enter a number:");
          score = input6;
          score = Number(score);
        }
      }
    }
  }
  scores.push(score);
  i++;
}

//Next steps: discard lowest and highest number.
//Take average of scores.

var max = scores[0];
for (var b = 1; b < scores.length; b++){
  if (scores[b] > max) {
    max = scores[b];
    var h = b;
  }
}

var min = scores[0];
for (var j = 1; j < scores.length; j++){
  if (scores[j] < min) {
    min = scores[j];
    var g = j;
  }
}

scores.splice(h, 1);
scores.splice(g, 1);

for (var v = 0; v < scores.length; v++){
  total = total + scores[v];
  average = total / (scores.length);
}

document.getElementById("gymnastics-output").innerHTML = `Discarded: ${min}, ${max} <br/> Score: ${average}`;


  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

   var testscores = [];
   var test1;
   while (test1 != -1){
     var test1 = prompt("Enter your test scores. Type '-1' when you're done.");

     test1 = Number(test1);
     if (Number.isInteger(test1) == false) {
       while (Number.isInteger(test1) == false){
         var input8 = prompt("That's not a number! Enter a number:");
         test1 = input8;
         test1 = Number(test1);
       }
     }

     test1 = Number(test1);
     if (test1 != -1){
     if (test1 >= 0 && test1 <= 100) {
     }

     else {
       while (test1 < 0 || test1 > 100) {
         var input8 = prompt("Enter a test score between 0 and 100:");
         test1 = input8;
         test1 = Number(test1);
       }
     }
   }
     testscores.push(test1);
   }

   tests = testscores.length;

for (var u = 0; u < testscores.length; u++){
  testTotal = testTotal + testscores[u];
}

var test_average = (testTotal / tests) * 0.60;


   var quizscores = [];
   var quiz1;
   while (quiz1 != -1){
     var quiz1 = prompt("Enter your quiz scores. Type '-1' when you're done.");

     quiz1 = Number(quiz1);
     if (Number.isInteger(quiz1) == false) {
       while (Number.isInteger(quiz1) == false){
         var input9 = prompt("That's not a number! Enter a number:");
         quiz1 = input9;
         quiz1 = Number(quiz1);
       }
     }

     quiz1 = Number(quiz1);
     if (quiz1 != -1){
     if (quiz1 >= 0 && quiz1 <= 100) {
     }

     else {
       while (quiz1 < 0 || quiz1 > 100) {
         var input8 = prompt("Enter a quiz score between 0 and 100:");
         quiz1 = input8;
         quiz1 = Number(test1);
       }
     }
   }
     quizscores.push(quiz1);
   }

   quizzes = quizscores.length;

   for (var k = 0; k < quizscores.length; k++){
     quizTotal = quizTotal + quizscores[k];
   }

   var quiz_average = (quizTotal / quizzes) * 0.30;


   var homeworkscores = [];
   var homework1;
   while (homework1 != -1){
     var homework1 = prompt("Enter your homework scores. Type '-1' when you're done.");

     homework1 = Number(homework1);
     if (Number.isInteger(homework1) == false) {
       while (Number.isInteger(homework1) == false){
         var input4 = prompt("That's not a number! Enter a number:");
         homework1 = input4;
         homework1 = Number(homework1);
       }
     }

     homework1 = Number(homework1);
     if (homework1 != -1){
     if (homework1 >= 0 && homework1 <= 100) {
     }

     else {
       while (homework1 < 0 || homework1 > 100) {
         var input8 = prompt("Enter a homework score between 0 and 100:");
         homework1 = input8;
         homework1 = Number(homework1);
       }
     }
   }
     homeworkscores.push(homework1);
   }

   homeworks = homeworkscores.length;

   for (var m = 0; m < homeworkscores.length; m++){
     homeworkTotal = homeworkTotal + homeworkscores[m];
   }

   var homework_average = (homeworkTotal / homeworks) * 0.10;

var final = (test_average + quiz_average + homework_average).toFixed(2);
test_average = (testTotal / tests).toFixed(2);
quiz_average = (quizTotal / quizzes).toFixed(2);
homework_average = (homeworkTotal / homeworks).toFixed(2);

document.getElementById("report-card-output").innerHTML = `Tests: ${test_average} <br/> Quizzes: ${quiz_average} <br/> Homework: ${homework_average} <br/> Grade: ${final}`;
  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
