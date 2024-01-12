const display = document.querySelector("#display");
const btns = document.querySelectorAll("button");

btns.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        }
        else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.slice(0, string.length -1);
        }
        else if (item.id == "equal") {
            evaluateExpression();
        }
        else if (item.id == "%") {
            calPercentage();
        }
        else if (item.id == "sqrt") {
            calSqaureRoot();
        }
        else {
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const cal = document.querySelector(".cal");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;

themeToggleBtn.onclick = () => {
    cal.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}

function evaluateExpression() {
    if (display.innerText != "") {
        display.innerText = eval(display.innerText);
    }
    else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
    }
}

function calPercentage() {
    if (display.innerText !== "") {
        const currentValue = parseFloat(display.innerText);
        display.innerText = currentValue / 100;
    }
}

function calSqaureRoot() {
    if (display.innerText !== "") {
        const currentValue = parseFloat(display.innerText);
        display.innerText = Math.sqrt(currentValue);
    }
}