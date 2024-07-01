let calculation = localStorage.getItem(`calculation`) || ``;

displayCalculation();

function updateCalculation(value) {
  calculation = calculation + value;
}
displayCalculation();

localStorage.setItem(`calculation`, calculation);

function displayCalculation() {
  document.querySelector(`.js-result`).innerHTML = calculation;
}

function displayValueOnKeyUp() {
  displayCalculation();
}

function OnKeyDown(event) {
  if (event.key === Number) {
    displayCalculation();
  }
}
