



document.addEventListener("DOMContentLoaded", function(){
    var form = document.querySelector("form")

    form.addEventListener("submit",postData);
});

function postData(formsubmission){

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var subject = document.querySelector(".subject").value;
    var message =document.querySelector(".mainArea").value;

    // Checks if fields are filled-in or not, returns response "<p>Please enter your details.</p>" if not.
    if(name == "" || email == "" || subject == "" || message == ""){
        document.querySelector(".response").innerHTML = "Please enter your details.";
        return;
    }


    // Parameters to send to PHP script.
    var params = "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message;
    console.log(params)
    var http = new XMLHttpRequest();

    http.open("POST","server.php",true);

    // Set headers
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            document.querySelector(".response").innerHTML = http.responseText;
        }


    };
    http.send(params);

}



