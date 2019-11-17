var allPeople = JSON.parse(localStorage.getItem("people")) || people;
var peopleTable = document.querySelector("#logNames");



// refresh Highscores
function renderHighscores() {

    peopleTable.innerHTML = ''; // emptying out the previous table contents
  
      for (var i = 0; i < allPeople.length; i++) {
    
      console.log("Is this going? " + allPeople[i].name + allPeople[i].score);
      peopleTD = document.createElement("p"); // a td for the bookmark link
      peopleTD.innerHTML = allPeople[i].name + " - " + allPeople[i].score;
    
      peopleTable.prepend(peopleTD);
    
      }}

renderHighscores();  

//CLEAR SCORES BUTTON
var clearScores = document.getElementById("clearScores");
clearScores.addEventListener("click", function(){
  peopleTable.innerHTML = ''; // empty names from page
  newPerson = "";
  allPeople = [];
  people = [];  //empty array
  localStorage.removeItem('people');
  allPeople = JSON.parse(localStorage.getItem("people")) || people;
  console.log("Storage Cleared");
});
