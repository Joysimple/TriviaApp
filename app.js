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
    correctAnswer: answers[0]
},
{
    question: "What is the most abundant element in the Universe?",
    answers: ["Helium", "Oxygen", "Lithium", "Hydrogen"],
    correctAnswer: answers[3]
},
{
    question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
    answers: ["8 days", "8 seconds", "8 minutes", "8 hours"],
    correctAnswer: answers[2]
},
{
    question: "What is 10/2?",
    answers: ["5", "2", "8", "9"],
    correctAnswer: answers[0]
},
{
    question: "Which planet has the most moons?",
    answers: ["Saturn", "Mars", "Jupiter", "Uranus"],
    correctAnswer: answers[2]
}];