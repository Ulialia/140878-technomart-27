var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-authorization");
var close = popup.querySelector(".button-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=username]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
