let button = document.getElementById('hbgMenu');

button.addEventListener("click", function(evt) {
	document.getElementById('navTiny').classList.toggle("show");
    document.getElementById('ulLinkTiny').classList.toggle("show");
    document.getElementById('hbgMenu').classList.toggle("show");
    document.getElementById('navImgTiny').classList.toggle("show");
	
	evt.stopPropagation();
});