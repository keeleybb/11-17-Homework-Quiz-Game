//Variables
var qIndex = 0; //Starting point for questions
var timeleft = 15 * questions.length; //Timer variable 
var downloadTimer;

//Button Vars
var startButton = document.querySelector("#start");
var nextButton = document.querySelectorAll(".next");
var finalScore = document.getElementById("final-score");


//Hidden Screens
document.getElementById("questionScreen").style.display = 'none';
document.getElementById("finalScreen").style.display = 'none';
document.getElementById("yesOrNo").style.display = 'none';



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
  timeleft= 15 * questions.length;
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
var peopleTable = document.querySelector("#logNames");

var people = [];
var peopleTD; 
var allPeople = JSON.parse(localStorage.getItem("people")) || people;

//For FinalScreen
function addPersonToList(event) {
  event.preventDefault();
  var nameEl = document.getElementById("name").value;

  var newPerson= {
    name: nameEl,
    score: timeleft
  }

 // clearing out/resetting the form after info is collected
   document.getElementById("name").innerText = "name";
   allPeople.push(newPerson); // pushing new bookmark to array
   localStorage.setItem("people", JSON.stringify(allPeople));
   console.log(allPeople);  

    window.location.href = "highscores.html";
};

//Calling the add button on click
addBtn.addEventListener("click", addPersonToList); //Passing Field to local Storage
