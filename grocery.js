function shoppinglist() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var Jlist = response.lists;
            var output = "";
            for (var i = 0; i < Jlist.length; i++) {
                output += "<tr>";
                output += "<td>" + Jlist[i].Serialno + "</td>";
                output += "<td>" + Jlist[i].Items + "</td>";
                output += "<td>" + Jlist[i].Quantity + "</td>";
                output += "<td>" + Jlist[i].Unit + "</td>";
                output += "<td>" + Jlist[i].Department + "</td>";
                output += "<td>" + Jlist[i].Notes + "</td>";
                output += "</tr>";
            }
            document.getElementById("items").innerHTML = output;
        }
    }

    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}