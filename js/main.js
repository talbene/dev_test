//ajax

function init()  {
  //init();
  //doSomethingElse();

 var options = {
 	done: function(json){
 		//console.log(json);
        var text =  json.notification;
        console.log(text);
        var element = document.querySelector(".notifications");
        element.textContent = text;
 	},
 	fail: function(err){
 		console.log(err);
 	}
 }

    UTILS.ajax("data/config.json", options);

}

window.addEventListener("load", init, false);

//iframe


var elementList = document.querySelector(".link");
//console.log(elementList);
elementList.addEventListener("change", select, false);

function select(e) {
    e.preventDefault();
    var target = e.target.value;
    var frame = document.querySelector("iframe");
    frame.setAttribute("src", target);
}

UTILS.addEvent(elm, type, handler);
UTLIS.removeEvent(elm, type, handler);


