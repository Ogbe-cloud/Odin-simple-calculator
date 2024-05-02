function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(first, operator, second) {
    console.log('operate:', first, operator, second);
    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator === '*') {
        return multiply(first, second);
    } else if (operator === '/') {
        return divide(first, second);
    }
}

let currentInput = '';
const buttons = document.querySelectorAll('button');
const outputEl = document.querySelector('input');
console.log(outputEl.value)

function handleButtonClick(clickedButton) {
    const buttonText = clickedButton.innerText;
    // Check if the "AC" button is clicked
    if (buttonText === 'AC') {
        // Clear everything on the output element
        outputEl.value = '';
        // Reset all related variables
        currentInput = '';
        firstNumber = null;
        operator = null;
        secondNumber = null;
    } else {
        // Append the clicked button's text to the current content
        outputEl.value += buttonText;
        
        // Rest of the code remains the same
        if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            firstNumber = parseFloat(currentInput);
            operator = buttonText;
            // Append the operator to the display
            currentInput = '';
        } else if (buttonText === '=') {
            if (!isNaN(parseFloat(currentInput))) {
                secondNumber = parseFloat(currentInput);
                const result = operate(firstNumber, operator, secondNumber);
                // Append the equals sign and result to the display
                outputEl.value += result;
                currentInput = ''; // Reset currentInput for the next calculation
            }
        } else {
            currentInput += buttonText;
        }
    }
}





buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        handleButtonClick(button);
    });
});
