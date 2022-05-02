// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", addMatch);
var match = JSON.parse(localStorage.getItem("schedule")) || [];

function addMatch() {
    event.preventDefault();

    var matchdata = {
        matchnum: masaiForm.matchNum.value,
        team1: masaiForm.teamA.value,
        team2: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }


    console.log(matchdata);
    localStorage.setItem("schedule", JSON.stringify(match));
    window.location.href = "matches.html"
}