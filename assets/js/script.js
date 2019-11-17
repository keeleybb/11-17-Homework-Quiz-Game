// //create an array of 5 questions
// var questions = [
//   {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//   },
//   {
//     title: "The condition in an if / else statement is enclosed within ____.",
//     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//     answer: "parentheses"
//   },
//   {
//     title: "In what HTML tag do we put javascript code?",
//     choices: ["<javascript>", "<script>", "<body>", "<head>"],
//     answer: "<script>"
//   }
// ];
localStorage.removeItem('people');
//Variables
var qIndex = 0; //Starting point for questions
var timeleft = 45; //Timer variable 
var downloadTimer;

//Button Vars
var startButton = document.querySelector("#start");
var nextButton = document.querySelectorAll(".next");
var finalScore = document.getElementById("final-score");
var viewScores = document.getElementById("view-scores");


//Hidden Screens
document.getElementById("questionScreen").style.display = 'none';
document.getElementById("finalScreen").style.display = 'none';
document.getElementById("yesOrNo").style.display = 'none';
document.getElementById("highscoreScreen").style.display = 'none';



//Timer
function betterCount(){
  timeleft -= 1;
  document.getElementById("countdown").innerText = timeleft + " seconds remaining";
  if(timeleft <= 0){
    document.getElementById("questionScreen").style.display = 'none';
    finalScore.innerText = "Your Score is: " + timeleft;
    document.getElementById("finalScreen").style.display = 'block';
    clearInterval(downloadTimer);
  }
};


//Click Start Button
startButton.addEventListener("click", function() {
  qIndex=0;
  timeleft=45;
  document.getElementById("countdown").innerText = "45 seconds remaining";
  downloadTimer = setInterval(betterCount, 1000); 
  nextQuestion();
  document.getElementById("startScreen").style.display = 'none';
  document.getElementById("questionScreen").style.display = 'block';
});
for (var i = 0; i < nextButton.length; i++) {
  nextButton[i].addEventListener('click', function() {
    event.preventDefault();
    var buttonOption = event.currentTarget.innerText;
    console.log(qIndex, buttonOption, questions[qIndex].answer);
    if (buttonOption === questions[qIndex].answer) {
      document.getElementById("answerSlot").innerText = "correct";
      document.getElementById("yesOrNo").style.display = 'block';
        console.log("You were right");
    }else {
      document.getElementById("answerSlot").innerText = "wrong";
      document.getElementById("yesOrNo").style.display = 'block';
      console.log("You were wrong");
  
      if (timeleft > 16){
        timeleft= timeleft -15;
        document.getElementById("countdown").innerText = timeleft + " seconds remaining";
      }else {
        timeleft = 0;
        document.getElementById("countdown").innerText = timeleft + " seconds remaining";
      }
        }  
        qIndex++; //Need to figure out where to put you
        setTimeout(function(){
          document.getElementById("answerSlot").innerText = "";
          document.getElementById("yesOrNo").style.display = 'none';
          nextQuestion();
            }, 250);  });
};

//Trigger Next Question from start or answer click events functions
function nextQuestion() {

  if (qIndex< questions.length){
    document.getElementById('questionSlot').innerText = questions[qIndex].title;
    document.getElementById('answerOne').innerText = questions[qIndex].choices[0];
    document.getElementById('answerTwo').innerText = questions[qIndex].choices[1];
    document.getElementById('answerThree').innerText = questions[qIndex].choices[2];
    document.getElementById('answerFour').innerText = questions[qIndex].choices[3];
    } else {
      document.getElementById("questionScreen").style.display = 'none';
      finalScore.innerText = "Your Score is: " + timeleft;
      document.getElementById("finalScreen").style.display = 'block';
      clearInterval(downloadTimer); //Stop Timer

    }

};

//ALL THE STUFF FOR HIGHSCORE
var addBtn = document.getElementById("add-btn");
var nameEl = document.getElementById("name").value;
var peopleTable = document.querySelector("#logNames");

// var highscore = localStorage.getItem("highscore");
var people = [];
var peopleTD;
var allPeople = JSON.parse(localStorage.getItem("people")) || people;;

//Writing Names and Scores to Screen
// function renderHighscores() {

// peopleTable.innerHTML = ''; // emptying out the previous table contents

//   for (var i = 0; i < people.length; i++) {

//   console.log("Is this going? " + people[i].name + people[i].score);
//   peopleTD = document.createElement("p"); // a td for the bookmark link
//   peopleTD.innerHTML = people[i].name + " - " + people[i].score;

//   peopleTable.appendChild(peopleTD);

//   }}


// function updateStorage() {
//   localStorage.setItem("people", JSON.stringify(allPeople));
// };

//For FinalScreen
function addPersonToList(event) {
  // When the `Add Person` button is clicked, 
  // the person is added to both the people array and the list elements.
  event.preventDefault();
  document.getElementById("finalScreen").style.display = 'none';
  document.getElementById("highscoreScreen").style.display = 'block';

  var nameEl = document.getElementById("name").value;
  var scoreEl = timeleft; 

  var newPerson= {
    name: nameEl,
    score: scoreEl
  }

 // clearing out/resetting the form after info is collected
  //  $("#name").reset();  // unique id of the person
   allPeople.push(newPerson); // pushing new bookmark to array
   localStorage.setItem("people", JSON.stringify(allPeople));
    console.log(allPeople);  


  function renderHighscores() {

    peopleTable.innerHTML = ''; // emptying out the previous table contents

      for (var i = 0; i < people.length; i++) {
    
      console.log("Is this going? " + people[i].name + people[i].score);
      peopleTD = document.createElement("p"); // a td for the bookmark link
      peopleTD.innerHTML = people[i].name + " - " + people[i].score;
    
      peopleTable.prepend(peopleTD);
    
      }}
    
  renderHighscores(people);
};

//Calling the add button on click
addBtn.addEventListener("click", addPersonToList); //Passing Field to local Storage


$("#goBack").on("click", function() {
  document.getElementById("countdown").innerText = "Timer: 0";
  document.getElementById("startScreen").style.display = 'block';
  document.getElementById("highscoreScreen").style.display = 'none';
});


//CLEAR SCORES BUTTON
var clearScores = document.getElementById("clearScores");
clearScores.addEventListener("click", function(){
  peopleTable.innerHTML = ''; // empty names from page
  newPerson = "";
  allPeople = [];
  people = [];  //empty array
  localStorage.clear();
  allPeople = JSON.parse(localStorage.getItem("people")) || people;
  console.log("Storage Cleared");
});


viewScores.addEventListener("click", function(){
document.getElementById("startScreen").style.display = 'none';
document.getElementById("questionScreen").style.display = 'none';
document.getElementById("finalScreen").style.display = 'none';
document.getElementById("highscoreScreen").style.display = 'block';
});

