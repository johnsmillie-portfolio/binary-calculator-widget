import {canvas, display, subDisplay, action, plusBtn, minusBtn, multBtn, divideBtn, enterBtn, clearBtn, zeroBtn, oneBtn} from "./model.js";
import { operate } from "./operations.js";
const MAX = 32;

let displayString = "";
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
    buttonHelper("\u00F7"); // divide
});



function buttonHelper(button){

    switch(button){
        case "0":
        case "1":
            if(displayString.length === MAX){return}
            display.textContent = displayString += button;
            break;
        case "clear":
            display.textContent = displayString = "";
            subDisplay.textContent = subDisplayString = "";
            action.textContent = actionString = "";
            break;
        case "enter":
            if(!actionString || !subDisplayString || !displayString){return;}
            // operate() takes binary string representations and returns binary string representation
            // 2's complement is accounted for. 
            display.textContent = displayString = operate(subDisplayString, displayString, actionString); 
            action.textContent = actionString = subDisplay.textContent = subDisplayString = "";
            break;
        default:
            if(!displayString){return;}
            subDisplay.textContent  = subDisplayString = displayString;
            action.textContent = actionString = button;
            display.textContent = displayString = "";
           
    }

   

}


export {canvas}