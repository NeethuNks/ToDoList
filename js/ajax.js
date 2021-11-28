
var checked = 0

function ajax() {


    //Creating an XHR Object
    var xhttp = new XMLHttpRequest();
    //Eventlistener
    xhttp.onreadystatechange = function () {
        //conndition
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

            var output = "";
            for (var i = 0; i < response.length; i++) {

                if (response[i].completed == true) {
                    output += "<tr>";
                    output += "<td>" + `<input type="checkbox" checked disabled id="checkBox${i + 1}" >`;+ "</td>";
                    output += "<td>" + response[i].title + "<td>";
                    output += "</tr>";
                }
                else {
                    output += "<tr>";
                    output += "<td>" + `<input type="checkbox" id="checkBox${i + 1}" onchange=checkCount(${i+1})>` + "</td>"
                    output += "<td>" + response[i].title + "<td>";
                    output += "</tr>";
                }
            }

            document.getElementById("todo").innerHTML = output;


        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    
}

function checkCount(num){
    const cbSelect = document.querySelector(`#checkBox${num}`);
    if (cbSelect.checked) {
        checked += 1;
    } else {
        checked -= 1;
    }
    if (checked == 5) {
        alert("Congrats. 5 Tasks have been Successfully Completed.");
    }
}



