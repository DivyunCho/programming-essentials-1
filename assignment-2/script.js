// Select the necessary DOM elements
const number1 = document.getElementById('number1'); 
const number2 = document.getElementById('number2'); 
const calculateButton = document.getElementById('calculateButton'); 
const answer = document.getElementById('answer'); 

calculateButton.addEventListener('click', calculate);

function calculate() {
    // Get the values from the input fields and store them in variables (convert them to numbers)
    const value1 = parseInt(number1.value); // Convert the value from number1 to a number
    const value2 = parseInt(number2.value); // Convert the value from number2 to a number
    
    // Perform the addition
    const result = value1 + value2; // Calculate the sum of value1 and value2

    // Display the result in the answer span
    answer.textContent = result; // Display the result
}