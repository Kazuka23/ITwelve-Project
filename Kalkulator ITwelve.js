const display = document.getElementById("display");
let history = [];

function appendToDisplay(value) {
  if (value === "C") {
    clearDisplay();
  } else if (value === "D") {
    deleteLast();
  } else if (value === "U") {
    undo();
  } else if (value === "=") {
    calculate();
  } else {
    history.push(display.value);
    display.value += value;
  }
}

function clearDisplay() {
  history.push(display.value);
  display.value = "";
}

function deleteLast() {
  history.push(display.value);
  display.value = display.value.slice(0, -1);
}

function undo() {
  if (history.length > 0) {
    display.value = history.pop();
  }
}

function calculate() {
  try {
    let expression = display.value
      .replace(/x/g, "*")
      .replace(/รท/g, "/");
    display.value = eval(expression);
  } catch {
    display.value = "Hidup Jokowi!";
  }
}
