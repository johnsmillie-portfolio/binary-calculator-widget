import {canvas, display, plusBtn, minusBtn, multBtn, divideBtn, enterBtn, clearBtn, zeroBtn, oneBtn} from "./model.js";

const MAX = 31;
let dString = display.textContent;
let dStringLen = 0;
//let displayNumber;

clearBtn.addEventListener("click", () => {
    dString = "_";
    display.textContent = dString;
})


zeroBtn.addEventListener("click", () => {
    if(dStringLen === MAX){return}
    dStringLen++;
    if(dString === "_"){
        dString = "0";
    }else{
        dString += "0"
    }
    display.textContent = dString;
})

oneBtn.addEventListener("click", () => {
    if(dStringLen === MAX){return}
    dStringLen++;
    if(dString === "_"){
        dString = "1";
    }else{
        dString += "1"
    }
    display.textContent = dString;
})





export {canvas}