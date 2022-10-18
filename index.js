// QuerySelectors for Buttons
const whole = document.querySelector(".display");
const bgDisplay = document.querySelector(".bg-display");
const mainDisplay = document.querySelector(".main-display");
const clearBtn = document.querySelector(".clear");
const ceBtn = document.querySelector(".ce");
const equalsBtn = document.querySelector(".equals");
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
  decimalBtn,
];
const opBtnArr = [addBtn, subtractBtn, divideBtn, multiplyBtn];

//Operators and operation logic
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, operator, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
};

const findValue = () => {
  let arr = mainDisplay.textContent.split(" ");
  let value;
  if (arr.length < 3 || arr[arr.length - 1] === "") {
    console.log(arr[0]);
    value = arr[0];
  } else {
    for (let i = 0; i < arr.length; i++) {
      opData = arr.splice(0, 3);
      a = parseFloat(opData[0]);
      operator = opData[1];
      b = parseFloat(opData[2]);
      value = operate(a, operator, b);
      arr.unshift(value);
    }
    bgDisplay.textContent = mainDisplay.textContent;
  }
  mainDisplay.textContent = value;
};

//KeyBoard Logic
const numKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const opKeys = ["+", "-", "/", "*"];

whole.addEventListener("click", (e) => {
  mainDisplay.focus();
});

mainDisplay.addEventListener("keydown", (e) => {
  let x = e.code;
  let arr = [
    "Digit",
    "Minus",
    "Equal",
    "Numpad",
    "Backspace",
    "Slash",
    "Enter",
  ];
  if (arr.some((type) => x.includes(type))) {
    if (numKeys.some((key) => e.key.includes(key))) {
      mainDisplay.textContent = `${mainDisplay.textContent}${e.key}`;
    } else if (opKeys.some((key) => e.key.includes(key))) {
      const lastVal = mainDisplay.textContent.split(" ").at(-1);
      if (lastVal == "") {
        let freshArr = mainDisplay.textContent.split(" ");
        freshArr.splice(-2, 1, e.target.textContent);
        mainDisplay.textContent = freshArr.join(" ");
      } else {
        mainDisplay.textContent = `${mainDisplay.textContent} ${e.key} `;
      }
    } else if (e.key == "Backspace") {
      mainDisplay.textContent = "";
    } else {
      findValue();
    }
  }
});

//Operator Events
const numEventCreator = (btn) => {
  btn.addEventListener("click", (e) => {
    mainDisplay.textContent = `${mainDisplay.textContent}${e.target.textContent}`;
  });
};

const opEventCreator = (btn) => {
  btn.addEventListener("click", (e) => {
    const lastVal = mainDisplay.textContent.split(" ").at(-1);
    if (lastVal == "") {
      let freshArr = mainDisplay.textContent.split(" ");
      freshArr.splice(-2, 1, e.target.textContent);
      mainDisplay.textContent = freshArr.join(" ");
    } else {
      mainDisplay.textContent = `${mainDisplay.textContent} ${e.target.textContent} `;
    }
  });
};

numBtnArr.forEach((btn) => numEventCreator(btn));
opBtnArr.forEach((btn) => opEventCreator(btn));

//Clear, CE
clearBtn.addEventListener("click", () => {
  mainDisplay.textContent = "";
  bgDisplay.textContent = "";
});

ceBtn.addEventListener("click", () => {
  mainDisplay.textContent = "";
});

// equals event and final logic
equalsBtn.addEventListener("click", () => {
  findValue();
});
