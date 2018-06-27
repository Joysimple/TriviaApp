var quest = document.getElementsByTagName("h1");
quest.addEventListener("click", clickQuest);
function clickQuest () {
    localStorage.setItem("quest1", "What is your name?");
    var quest1Display = localStorage.getItem("quest1");
}