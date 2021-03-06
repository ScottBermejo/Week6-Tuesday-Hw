// Create a 2-dimensional array with 5 questions and 5 answers
var questions = [
  ["What is my favorite color?", "blue"],
  ["What is 5+5?", "10"],
  ["What color is lava?", "red"],
  ["What color is the grass?", "green"],
  ["What is the capital of Illinois?", "springfield"]
  ]

// This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page
function print(message,id) {
  var outputDiv = document.getElementById(id);
  outputDiv.innerHTML = message;
}

// This code snippet builds out the HTML list. 
function buildList(arr) {
  var listHTML = "<ol>";
    for(var i=0;i<arr.length;i++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

// Create a FOR loop that loops through your 2-dimantional array. Create variables for quesions, answers and reponses respectively. Make sure the
// questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
// correct and how many answers you have wrong. 
//
// EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
// to accomplish this is very beneficial. Do your best!
var wrongAnswers = []
var correctAnswers = []
for(let i = 0;i < questions.length; i++) {
  var answer = prompt(questions[i][0],"").toLowerCase();
  if(answer == ""){
    break;
  }
  if(answer==questions[i][1]){
    correctAnswers.push(questions[i][0]);
  }
  else{
    wrongAnswers.push(questions[i][0]);
  }
}
print(`You got ${correctAnswers.length} question(s) right`,"output")

print(buildList(correctAnswers),"correct")
print(buildList(wrongAnswers),"wrong")



// For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.
