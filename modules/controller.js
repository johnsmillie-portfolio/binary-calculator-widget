import {canvas, display, subDisplay, action, plusBtn, minusBtn, multBtn, divideBtn, enterBtn, clearBtn, zeroBtn, oneBtn} from "./model.js";

const MAX = 32;
let displayString = display.textContent;
let subDisplayString = "";
let actionString = "";


// The display always resets to "_"  --> this character represents the absence of values
// in the displayString
clearBtn.addEventListener("click", () => {
   buttonHelper("clear");
})
enterBtn.addEventListener("click", () => {
    buttonHelper("enter");
});
zeroBtn.addEventListener("click", () => {
    buttonHelper("0");
});
oneBtn.addEventListener("click", () => {
    buttonHelper("1");
});
plusBtn.addEventListener("click", () => {
    buttonHelper("+");
});
minusBtn.addEventListener("click", () => {
    buttonHelper("-");
});
multBtn.addEventListener("click", () => {
    buttonHelper("x");
});
divideBtn.addEventListener("click", () => {
    buttonHelper("\u00F7");
});



function buttonHelper(button){

    switch(button){
        case "0":
        case "1":
            if(displayString.length === MAX){return}
            display.textContent = displayString += button;
            break;
        case "clear":
            display.textContent = displayString = "_";
            subDisplay.textContent = subDisplayString = "";
            action.textContent = actionString = "";
            break;
        case "enter":
            if(!actionString || !subDisplayString || displayString === "_"){return;}
            const primary = Number.parseInt(subDisplayString, 2);
            const secondary = Number.parseInt(displayString.slice(1), 2);
            display.textContent = displayString = operate(primary, secondary).toString(2);
            action.textContent = actionString = subDisplay.textContent = subDisplayString = "";
            break;
        default:
            if(displayString === "_"){return;}
            if(displayString.charAt(0) === "_"){
                displayString = displayString.slice(1);
            }
            subDisplay.textContent  = subDisplayString = displayString;
            action.textContent = actionString = button;
            display.textContent = displayString = "_";
           
    }

    function operate(primary, secondary){
    
        switch(actionString){
            case "+":
                return primary + secondary;
            case "-":
                return primary - secondary;
            case "x":
                return primary * secondary;
            case "\u00F7":
                return primary / secondary;
        }
    }

}


export {canvas}