var popupNeg = document.querySelector(".modal-neg");
var popupPos = document.querySelector(".modal-pos");
var closeNeg = popupNeg.querySelector(".modal-neg__btn");
var closePos = popupPos.querySelector(".modal-pos__btn");
var form = document.querySelector(".content-form__client-data");
var lastName = form.querySelector("[name=last-name]");
var firstName = form.querySelector("[name=first-name]");
var email = form.querySelector("[name=email]");
var emailField = form.querySelector(".email-field");

// модальное окно на странице с формой
closeNeg.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupNeg.classList.remove("modal--show")
});

closePos.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupPos.classList.remove("modal--show")
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupNeg.classList.contains("modal--show")) {
          popupNeg.classList.remove("modal--show");
      }
      if (popupPos.classList.contains("modal--show")) {
        popupPos.classList.remove("modal--show");
    }
  }
})

form.addEventListener("submit", function (evt) {
  if (!lastName.value || !firstName.value || !email.value) {
      evt.preventDefault();
      popupNeg.classList.remove("modal--show");
      popupNeg.offsetWidth = popupNeg.offsetWidth;
      popupNeg.classList.add("modal--show");
      lastName.classList.add("personal-list__field--required");
      firstName.classList.add("personal-list__field--required");
      emailField.classList.add("email-field--required")
  } else {
      evt.preventDefault();
      popupPos.classList.add("modal--show");
      lastName.classList.remove("personal-list__field--required");
      firstName.classList.remove("personal-list__field--required");
      emailField.classList.remove("email-field--required")
  }
});
