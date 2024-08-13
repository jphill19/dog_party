var form = document.querySelector(".hero form");

var input = document.querySelector("#dog-name");

var headerText = document.querySelector(".hero h1 strong");


console.log(form + input + headerText)

displayDogName = (event) => {
  event.preventDefault();
  var dogName = input.value;
  headerText.innerText = dogName;
}

form.addEventListener("submit", displayDogName)

