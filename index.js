// QuerySelectors for Buttons
const bgDisplay = document.querySelector(".bg-display");
const mainDisplay = document.querySelector(".main-display");
const clearBtn = document.querySelector(".clear");
const ceBtn = document.querySelector(".ce");
const equalsBtn = document.querySelector("equals");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const zeroBtn = document.querySelector(".zero");
const decimalBtn = document.querySelector(".period");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const numBtnArr = [
  oneBtn,
  twoBtn,
  threeBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  zeroBtn,
];
const opBtnArr = [addBtn, subtractBtn, divideBtn, multiplyBtn];

//Operators
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const mutliply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (a, operator, b) => {
  switch (operator) {
    case "+":
      console.log(add(a, b));
      break;
    case "-":
      console.log(subtract(a, b));
      break;
    case "*":
      console.log(multiply(a, b));
      break;
    case "/":
      console.log(divide(a, b));
      break;
  }
};

//Operator Events
const numEventCreator = (btn) => {
  btn.addEventListener("click", (e) => {
    mainDisplay.textContent = `${mainDisplay.textContent}${e.target.textContent}`;
  });
};

const opEventCreator = (btn) => {
  btn.addEventListener("click", (e) => {
    mainDisplay.textContent = `${mainDisplay.textContent} ${e.target.textContent} `;
  });
};

numBtnArr.forEach((btn) => numEventCreator(btn));
opBtnArr.forEach((btn) => opEventCreator(btn));

//Clear, CE
