//Create button variables
// timer
// score
// person + score //Needs to update to page//LocalStorage


var addBtn = document.querySelector("#add-btn");
var nameEl = document.querySelector("#name");

var highscore = localStorage.getItem("highscore");
var people = [{ name: name, score: ''}];
var person = localStorage.getItem("person");
var score = localStorage.getItem("score");

console.log(person);
console.log(score);



//create an array of 5 questions
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "In what HTML tag do we put javascript code?",
      choices: ["<javascript>", "<script>", "<body>", "<head>"],
      answer: "<script>"
    }
  ];
  
//set interal to insert one question in container per 15 seconds or so. 

//validate answer, set score, and adjust timer if wrong


// 1. Create start button that sets up interval with questions. 
// 2. Validate answer, add to score, adjust timer
var qIndex = 0; //Starting point for questions
var timeleft = 45; //Timer variable 
var downloadTimer;

//Hidden Screens
document.getElementById("questionScreen").style.display = 'none';
document.getElementById("finalScreen").style.display = 'none';

//Click Start Button
start.addEventListener("click", function() {
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById("questionScreen").style.display = 'block';
    downloadTimer = setInterval(betterCount, 1000); 

    function betterCount(){
      timeleft -= 1;
      document.getElementById("countdown").innerText = timeleft + " seconds remaining";
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = " ";
        //Need to set of function to display final screen
      }
    }
  
    nextQuestion();
});


//Listen for question to be answered, then give correct answer, adjust timer is wrong. 

$(".next").on("click", function(e){
  console.log(event.target);
  console.log(event.currentTarget.innerText);
  var answerBtn = event.currentTarget.innerText;
  console.log(questions[qIndex].answer);
  if (answerBtn = questions[qIndex].answer){
    alert("Yaya");
  } else {
    alert("Bummer");
    timerleft -= 15;
  }
  nextQuestion();

});

//For FinalScreen
function addPersonToList(event) {
  // When the `Add Person` button is clicked, 
  // the person is added to both the people array and the list elements.
  event.preventDefault();
  var name = nameEl.value;
  var score = nameEl.value;


  // unique id of the person
  people.push({ name: name, score: timeleft });
  console.log(people);
  localStorage.setItem("person", name);
  localStorage.setItem("score", timeleft);
}



//Calling the add button on click
addBtn.addEventListener("click", addPersonToList);


function nextQuestion() {

  if (qIndex< questions.length){
    console.log("Event Listener function qIndex", qIndex);
    document.getElementById('questionSlot').innerText = questions[qIndex].title;
    document.getElementById('answerOne').innerText = questions[qIndex].choices[0];
    document.getElementById('answerTwo').innerText = questions[qIndex].choices[1];
    document.getElementById('answerThree').innerText = questions[qIndex].choices[2];
    document.getElementById('answerFour').innerText = questions[qIndex].choices[3];
    }else {
      clearInterval(downloadTimer); //Stop Timer
      document.getElementById("questionScreen").style.display = 'none';
      document.getElementById("finalScreen").style.display = 'block';
    }
    qIndex++; //Need to figure out where to put you

};


//Calling the add button on click
addBtn.addEventListener("click", addPersonToList);

