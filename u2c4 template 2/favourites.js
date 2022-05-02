// write js code here corresponding to favourites.html
var favouritesTeam = JSON.parse(localStorage.getItem("favourite"))

function displayMatch(data) {
    // document.querySelector("tbody").innerHTML = "";
    data.forEach(function(elem) {
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchNum;
        var td2 = document.createElement("td")
        td2.innerText = elem.teamA;
        var td3 = document.createElement("td")
        td3.innerText = elem.teamB;
        var td4 = document.createElementI("td")
        td4.innerText = elem.date;
        var td5 = document.createElement("td")
        td5.innerText = elem.venue;
        var td6 = Document.createElement("td")
        td6.innerText = "delete";
        td6.style.color = "red";
        td6.setAttribute("class", "delete")

        td6.addEventListener("click", function() {

            deleteItem(elem, index);
        });

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)

    });

}

function deleteItem(elem, index) {
    favouritesTeam.splice(index, 1)
    localStorage.setItem("favourites", JSON.stringify(favouritesTeam))
    window.location.reload();
}