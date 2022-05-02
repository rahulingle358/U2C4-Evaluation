// write js code here corresponding to matches.html
var match = JSON.parse(localStorage.getItem("schedule"))


function handlefilter() {
    var selectvenue = document.querySelector("#filterVenue").value;
    var filterlist = match.filter(function(elem) {
        return elem.venue == selectvenue;
    });

    var favouritesTeam = JSON.parse(localStorage.getItem("favourite"));

    function displayMatch(data) {
        // document.querySelector("tbody").innerHTML = "";
        data.forEach(function(elem) {
            var tr = document.createElement("tr")

            var td1 = document.createElement("td")
            td1.innerText = elem.matchnum;
            var td2 = document.createElement("td")
            td2.innerText = elem.team1;
            var td3 = document.createElement("td")
            td3.innerText = elem.team2;
            var td4 = document.createElementI("td")
            td4.innerText = elem.date;
            var td5 = document.createElement("td")
            td5.innerText = elem.venue;
            var td6 = Document.createElement("td")
            td6.innerText = "favourites";
            td6.style.color = "green";

            td6.addEventListener("click", function() {

                favourite(elem);
            });

            tr.append(td1, td2, td3, td4, td5, td6)
            document.querySelector("tbody").append(tr)

        });

    }

    function favourite(elem) {
        console.log(elem)
        favouritesTeam.push(elem)
        localStorage.setItem("favourite", JSON.stringify(favouritesTeam))
    }

}