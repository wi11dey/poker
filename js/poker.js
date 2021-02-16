// JS SPECIFIC TO THIS CUSTOM THEME GOES HERE
if (window.location.pathname.split("/") < 3) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
	var items = xhr.responseXML.querySelectorAll("item");
	var slides = document.querySelectorAll("ul.rslides > li");
	for (var i = 0; i < slides.length; i++) {
	    if (items[i]) {
		items[i].querySelector("description");
	    }
	}
    };
}
