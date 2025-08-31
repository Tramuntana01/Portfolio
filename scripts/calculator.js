const display = document.getElementById("calcDisplay");
const maxLength = 8;

function appendToDisplay(input){
    if (display.value.length < maxLength){
        display.value += input;
    }

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
         display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}