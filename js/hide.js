document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 188) {
       	var element = document.getElementById("hidebox");
        element.classList.toggle("hidden");
    }
};