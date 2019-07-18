// Coding Challenge
//--------------------------------------------------------------------------------

//IIFE
//---------------------------------------------------------------

//gives our function privacy so none of the other variables can be called in any other javascript files with the same variables
(function() {
  //FUNCTION CONSTRUCTOR
  //---------------------------------------------------------------

  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  //--------------------------------------------------------------------------------

  // new operator creates a new empty object then it calls the new question function and sets the this variable to a new empty object that was just created
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );
  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal", "Jonas"],
    2
  );
  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  //Store questions in array

  var questions = [q1, q2, q3];

  //--------------------------------------------------------------------------------
  // CLOSURES TO KEEP SCORE

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  //--------------------------------------------------------------------------------
  //prototype
  //--------------------------------------------------------------------------------
  //displayQuestion name of new method
  // not attached to other methods but can be accessed when needed

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };
  //passes in answer a sees what to display when aswer is equal to correct number
  Question.prototype.checkAnswer = function(ans, callback) {
    // sc is usable via closures
    var sc;
    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer!");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  //display score after every answered question

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("------------------------------");
  };
  //--------------------------------------------------------------------------------

  //FUNCTION CONSTRUCTOR

  function nextQuestion() {
    //random number to display random question each time

    var n = Math.floor(Math.random() * questions.length);
    //for each random generated question display the corresponding question
    questions[n].displayQuestion();
    // prmpt question to user
    var answer = prompt("Please select the right answer!");

    // if the user chooses exit we exit the questions
    if (answer !== "exit") {
      // only need to check answer if play wants to play
      //parseint turns string number into number
      questions[n].checkAnswer(parseInt(answer), keepScore);
      // call function again so a random question can be called
      nextQuestion();
    }
  }

  //--------------------------------------------------------------------------------

  //EXECUTION

  nextQuestion();
})();
