import {Model} from "./Model.js";
import { Operations } from "./Operations.js";
const MAX = 32;

const operations = new Operations();
const model = new Model();


// The display always resets to "_"  --> this character represents the absence of values
// in the displayString
model.clearBtn.addEventListener("click", () => {
   buttonHelper("clear");
})
model.enterBtn.addEventListener("click", () => {
    buttonHelper("enter");
});
model.zeroBtn.addEventListener("click", () => {
    buttonHelper("0");
});
model.oneBtn.addEventListener("click", () => {
    buttonHelper("1");
});
model.plusBtn.addEventListener("click", () => {
    buttonHelper("+");
});
model.minusBtn.addEventListener("click", () => {
    buttonHelper("-");
});
model.multBtn.addEventListener("click", () => {
    buttonHelper("x");
});
model.divideBtn.addEventListener("click", () => {
    buttonHelper("\u00F7"); // divide
});



function buttonHelper(button){

    switch(button){
        case "0":
        case "1":
             break;
        case "clear":
              break;
        case "enter":
           break;
        default:
           
    }

   

}


export {model}