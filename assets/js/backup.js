//Create a start button

//Variables
// timer
// score
// person + score //Needs to update to page
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
  


//create an array of 5 questions

//set interal to insert one question in container per 15 seconds or so. 

//validate answer, set score, and adjust timer if wrong


// 1. Create start button that sets of interval with questions. 
// 2. Validate answer, add to score, adjust timer
var qIndex = 0;
var timeleft = 45;
document.getElementById("questionScreen").style.display = 'none';
// document.getElementById("finalScreen").style.display = 'none';


start.addEventListener("click", function() {
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById("questionScreen").style.display = 'block';
    var downloadTimer = setInterval(betterCount, 1000); 


    function betterCount(){
      document.getElementById("countdown").innerText = timeleft + " seconds remaining";
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = " ";
      }
    }
  
    document.getElementById('questionSlot').innerText = questions[0].title;
    document.getElementById('answerOne').innerText = questions[0].choices[0];
    document.getElementById('answerTwo').innerText = questions[0].choices[1];
    document.getElementById('answerThree').innerText = questions[0].choices[2];
    document.getElementById('answerFour').innerText = questions[0].choices[3];

});


//Listen for question to be answered, then give correct answer, adjust timer is wrong. 
next.addEventListener('click',function(e) {

  if (qIndex< questions.length){
  qIndex++;
  console.log("Event Listener function qIndex", qIndex);
  document.getElementById('questionSlot').innerText = questions[qIndex].title;
  document.getElementById('answerOne').innerText = questions[qIndex].choices[0];
  document.getElementById('answerTwo').innerText = questions[qIndex].choices[1];
  document.getElementById('answerThree').innerText = questions[qIndex].choices[2];
  document.getElementById('answerFour').innerText = questions[qIndex].choices[3];
  }else {
  //Spit out score and finsih screen maybe in new function
  }

});

    // getQuestion();

    // function (e) {
    //     var PlaceQuestion = document.getElementById('questionSlot');
    //     PlaceQuestion.innerText = questions[qIndex].title;
    //     console.log("getQuestion function qIndex", qIndex);
    // }
    // var qIndex = qIndex++;



// start.addEventListener("click", function () {
//         var wordIndex = 0;
      
//         function readToMe() {
          
//             var PlaceQuestion = document.getElementById('questionSlot');
//             PlaceQuestion.innerText = questions[0].title;
              
//           wordIndex++;
      
//         }
      
      
//       });

//Create
  

//Create a start button

//Variables
// timer
// score
// person + score //Needs to update to page

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


//Hidden Screens
document.getElementById("questionScreen").style.display = 'none';
document.getElementById("finalScreen").style.display = 'none';

//Click Start Button
start.addEventListener("click", function() {
  document.getElementById("startScreen").style.display = 'none';
  document.getElementById("questionScreen").style.display = 'block';
  var downloadTimer = setInterval(betterCount, 1000); 

  function betterCount(){
    document.getElementById("countdown").innerText = timeleft + " seconds remaining";
    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = " ";
      //Need to set of function to display final screen
    }
  }

  //First Question
  document.getElementById('questionSlot').innerText = questions[0].title;
  document.getElementById('answerOne').innerText = questions[0].choices[0];
  document.getElementById('answerTwo').innerText = questions[0].choices[1];
  document.getElementById('answerThree').innerText = questions[0].choices[2];
  document.getElementById('answerFour').innerText = questions[0].choices[3];

});


//Listen for question to be answered, then give correct answer, adjust timer is wrong. 
next.addEventListener('keyup',function(e){
  if (e.keyCode === 13) {
      if (qIndex< questions.length){
      qIndex++;
      console.log("Event Listener function qIndex", qIndex);
      document.getElementById('questionSlot').innerText = questions[qIndex].title;
      document.getElementById('answerOne').innerText = questions[qIndex].choices[0];
      document.getElementById('answerTwo').innerText = questions[qIndex].choices[1];
      document.getElementById('answerThree').innerText = questions[qIndex].choices[2];
      document.getElementById('answerFour').innerText = questions[qIndex].choices[3];
      }else {
      //Spit out score and finsih screen maybe in new function
      }
  }
});
