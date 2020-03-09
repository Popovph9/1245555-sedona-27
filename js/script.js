var mbutton = document.querySelector(".booking-button.main-button");

var popup = document.querySelector(".booking-form");

mbutton.addEventListener("click", function (evt){
	evt.preventDefault();
	popup.classList.toggle("form-close");
});