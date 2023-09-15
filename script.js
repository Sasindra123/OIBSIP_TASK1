// script for buttons
let btns = document.querySelectorAll(".digit-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let delbtn = document.querySelector("#del");
let total = document.querySelector("#total");
let currentInput = "";
let btnspd = [...btns];
let allBtnSpd = [...allBtns];

btnspd.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

function evaluate(fn) {
  return new Function("return " + fn)();
}

total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;
  resultBox.innerHTML = evaluate(allInputs);
  console.log(evaluate(allInputs));
});

clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});

delbtn.addEventListener("click", () => {
  currentInput = resultBox.innerHTML;
  console.log(currentInput);
  currentInput = currentInput.slice(0, -1);
  resultBox.innerHTML = currentInput;
  if (isEmpty(currentInput)) {
    resultBox.innerHTML = "0";
  }
});
