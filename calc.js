//selecting HTML elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

//fucntion to handle button click
function handleButtonClick(event){
    const button = event.target;
    const value = button.textContent;

    if(button.id === "clear"){
        clearCalculator();
    }
    else if(button.id === "delete"){
        deleteLastCharacter();
    }
    else if(button.id === "equals"){
        calculateResult();
    }
    else{
        updateDisplay(value);
    }
};

//function to clear the calculator
function clearCalculator(){
    display.value = "";
};

//function to delete last character
function deleteLastCharacter(){
    display.value = display.value.slice(0, -1);
};

//functio to update the display
function updateDisplay(value){
    if(value === "C" || value === "DEL" || value === "="){
        return;
    }
    display.value += value;
}

//function to calculate the result
function calculateResult(){
    const expression = display.value;
    try {
        const result = eval(expression);
        display.value = result.toString();
    }
    catch (error){
        display.value = "Error";
    }
}

//adding event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
})