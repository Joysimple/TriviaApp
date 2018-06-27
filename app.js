/*var quest = document.getElementsByTagName("h1")[0];
quest.addEventListener("click", clickQuest);
function clickQuest () {
    localStorage.setItem("quest1", "What is your name?");
    var quest1Display = localStorage.getItem("quest1");
    console.log(quest1Display);
}*/
var defaultQuestions = [
{
    question: "Where are the three smallest bones in the human body?", 
    answers: ["middle ear", "nose", "toes", "eyes"],
    correctAnswer: 0
},
{
    question: "What is the most abundant element in the Universe?",
    answers: ["Helium", "Oxygen", "Lithium", "Hydrogen"],
    correctAnswer: 3
},
{
    question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
    answers: ["8 days", "8 seconds", "8 minutes", "8 hours"],
    correctAnswer: 2
},
{
    question: "What is 10/2?",
    answers: ["5", "2", "8", "9"],
    correctAnswer: 0
},
{
    question: "Which planet has the most moons?",
    answers: ["Saturn", "Mars", "Jupiter", "Uranus"],
    correctAnswer: 2
}];
var currentQuestion = 0;
var rightAnswers = 0;
function populateQuestion() {
    $("#quizStatus").html("Question " + currentQuestion + " out of " + defaultQuestions.length);
    $("#question").html(defaultQuestions[currentQuestion].question);
    $("#choiceA").html(defaultQuestions[currentQuestion].answers[0]);
    $("#choiceB").html(defaultQuestions[currentQuestion].answers[1]);
    $("#choiceC").html(defaultQuestions[currentQuestion].answers[2]);
    $("#choiceD").html(defaultQuestions[currentQuestion].answers[3]);
}
function nextQuestion() {
    var checkedValue =  $("input[name=choices]:checked").val();
    if (checkedValue == defaultQuestions[currentQuestion].correctAnswer) {
        rightAnswers += 1;
    }
    
    if (currentQuestion < defaultQuestions.length - 1) {
        currentQuestion += 1;
        populateQuestion();
    }
    else {
        
        $("#quizStatus").html("Your score " + rightAnswers + " out of " + defaultQuestions.length);
    }
}
$("#submit").click(nextQuestion);   
populateQuestion();