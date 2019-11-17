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
  
  var qIndex = 0; //Starting point for questions
  var timeleft = 45; //Timer variable 
  var downloadTimer;
  
  //Button Vars
  var startButton = document.querySelector("#start");
  // var nextButton = document.querySelector(".next");
  
  
  
  //Hidden Screens
  document.getElementById("questionScreen").style.display = 'none';
  document.getElementById("finalScreen").style.display = 'none';
  document.getElementById("yesOrNo").style.display = 'none';
  
  //First Question
  document.getElementById('questionSlot').innerText = questions[0].title;
  document.getElementById('answerOne').innerText = questions[0].choices[0];
  document.getElementById('answerTwo').innerText = questions[0].choices[1];
  document.getElementById('answerThree').innerText = questions[0].choices[2];
  document.getElementById('answerFour').innerText = questions[0].choices[3];
  
  function betterCount(){
    timeleft -= 1;
    document.getElementById("countdown").innerText = timeleft + " seconds remaining";
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      //Need to set of function to display final screen
    }
  };
  
  
  //Click Start Button
  start.addEventListener("click", function() {
    downloadTimer = setInterval(betterCount, 1000); 
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById("questionScreen").style.display = 'block';
  });
  
  $(".next").on("click", function() {
    var buttonOption = event.currentTarget.innerText;
    console.log(qIndex, buttonOption, questions[qIndex].answer);
    if (buttonOption === questions[qIndex].answer) {
      document.getElementById("yesOrNo").innerText = "correct";
      document.getElementById("yesOrNo").style.display = 'block';
      console.log("You were right");
  
    }else {
      console.log("Time before:", timeleft);
      if (timeleft < 15){
        timeleft = 0;
        document.getElementById("countdown").innerText = timeleft + " seconds remaining";
  
      }else {
        timeleft= timeleft -15;
        document.getElementById("countdown").innerText = timeleft + " seconds remaining";
  
  
      }
      console.log("Time after:", timeleft);
  
      document.getElementById("yesOrNo").innerText = "wrong";
      document.getElementById("yesOrNo").style.display = 'block';
      console.log("You were wrong");
        }  nextQuestion();
  });
  
  function nextQuestion() {
  
    if (qIndex< questions.length-1){
      qIndex++; //Need to figure out where to put you
      console.log("Event Listener function qIndex", qIndex);
      document.getElementById("yesOrNo").style.display = 'none';
  
      document.getElementById('questionSlot').innerText = questions[qIndex].title;
      document.getElementById('answerOne').innerText = questions[qIndex].choices[0];
      document.getElementById('answerTwo').innerText = questions[qIndex].choices[1];
      document.getElementById('answerThree').innerText = questions[qIndex].choices[2];
      document.getElementById('answerFour').innerText = questions[qIndex].choices[3];
      } else {
        document.getElementById("questionScreen").style.display = 'none';
        document.getElementById("finalScreen").style.display = 'block';
        clearInterval(downloadTimer); //Stop Timer
  
      }
  
  };
  
  
  var addBtn = document.querySelector("#add-btn");
  var nameEl = document.querySelector("#name");
  
  var highscore = localStorage.getItem("highscore");
  var people = [{ name: name, score: ''}];
  var person = localStorage.getItem("person");
  var score = localStorage.getItem("score");
  
  console.log(person);
  console.log(score);
  
  
  //For FinalScreen
  function addPersonToList(event) {
    // When the `Add Person` button is clicked, 
    // the person is added to both the people array and the list elements.
    event.preventDefault();
    name = nameEl.value;
    score = timeleft;
  
   // clearing out/resetting the form after info is collected
    document.getElementById('name').value = '';  // unique id of the person
    people.push({ name: name, score: timeleft });
  
    console.log(people);
    localStorage.setItem("person", name);
    localStorage.setItem("score", timeleft);
  };
  
  function updateStorage() {
    localStorage.setItem("people", JSON.stringify(allBookmarks));
  }
  
  //Calling the add button on click
  addBtn.addEventListener("click", addPersonToList);
  
  $("#goBack").on("click", function() {
    qIndex=0;
    document.getElementById("startScreen").style.display = 'block';
    document.getElementById("finalScreen").style.display = 'none';
  });