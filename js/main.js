


function postData(e) {

    // validation

    var error = false;

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var subject = document.querySelector(".subject").value;
    var message = document.querySelector(".mainArea").value;
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    // Checks if fields are filled-in or not
    if ((name == "" || email == "" || subject == "" || message == "")) {
        document.querySelector(".response").style.visibility = "visible";
        error = true;
        e.preventDefault()
    }

    if (((!filter.test(document.querySelector(".email").value)))) {
        alert('Please provide a valid email address');
        error = true;
    }

   if(error===false) {
       // ajax submit
       // Parameters to send to PHP script.
        var params = "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message;

        console.log(params);

        var http = new XMLHttpRequest();
        http.open("POST", "server.php", true);

        // Set headers
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function () {

            if (http.readyState == 4 && http.status == 200) {

                document.querySelector(".response").innerHTML = http.responseText;
            }
        };

        http.send(params);

        alert("success")
    }

}


var form = document.querySelector("form");
form.addEventListener("submit",postData);



