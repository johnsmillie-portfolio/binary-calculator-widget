

const canvas = document.createElement("div");
canvas.className = "canvas";
canvas.style.backgroundColor = "#050505";
canvas.style.borderRadius = "7px"
canvas.style.width = "500px";
canvas.style.height = "250px";
canvas.style.fontFamily = "sans-serif";
canvas.style.fontSize = "24px";
canvas.style.display = "flex";
canvas.style.flexDirection = "column";
canvas.style.justifyContent = "center";
canvas.style.alignItems = "center";
canvas.style.gap = "24px";

const display = document.createElement("div");
display.className = "display";
display.style.backgroundColor = "#4e4e4e";
display.style.borderRadius = "3px";
display.style.width = "90%";
display.style.height = "48px";
display.style.padding = "5px";
display.style.color = "whitesmoke";
display.style.fontSize = "32px";

const buttons = document.createElement("div");
buttons.className = "buttons";
// buttons.style.display = "flex";
// buttons.style.flexDirection = "column";
// buttons.style.justifyContent = "space-evenly";
// buttons.style.alignItems = "center";


const btnRow1 = document.createElement("div");
const btnRow2 = document.createElement("div");
btnRow1.className = btnRow2.className = "row";

const list = ["plusBtn", "minusBtn", "multBtn", "divideBtn", "clearBtn", "enterBtn", "zeroBtn", "oneBtn"];
const [plusBtn, minusBtn, multBtn, divideBtn, clearBtn, enterBtn, zeroBtn, oneBtn] = list.map(() => document.createElement("button"));

plusBtn.className = minusBtn.className = multBtn.className = divideBtn.className = "operatorButton";
plusBtn.textContent = "\u002B";
minusBtn.textContent = '\u2212'; 
multBtn.textContent = '\u00D7'; 
divideBtn.textContent = '\u00F7'; 

enterBtn.className = "enterBtn";
enterBtn.textContent = "=";
zeroBtn.className = oneBtn.className = "numBtn";
zeroBtn.textContent = "0";
oneBtn.textContent = "1";
clearBtn.className = "clearBtn";
clearBtn.textContent = "C";



const list2 = [zeroBtn, oneBtn, clearBtn, enterBtn, plusBtn, minusBtn, multBtn, divideBtn];
list2.forEach((el) => {
    el.style.border = "solid 2px white";
    el.style.borderRadius = "50px";
    el.style.minWidth = "100px";
    el.style.color = "whitesmoke";
    el.style.fontFamily = "Helvetica";
    el.style.fontSize = "24px";
    el.style.padding = "5px";
    el.style.margin = "5px";
    el.style.cursor = "pointer";
    

});

[plusBtn, minusBtn, multBtn, divideBtn ].forEach((el) => {
    el.style.backgroundColor = "#1F1F1F"
    btnRow2.appendChild(el);
});

[zeroBtn, oneBtn].forEach((el) => {
    el.style.backgroundColor = "#949494";
})
clearBtn.style.backgroundColor = "#37D912";
enterBtn.style.backgroundColor = "#f7be06";


[zeroBtn, oneBtn, clearBtn, enterBtn].forEach((el) => {
    btnRow1.appendChild(el);
})

/*[plusBtn, minusBtn, multBtn, divideBtn].forEach((el) => {
    btnRow2.appendChild(el);
})*/

buttons.appendChild(btnRow1);
buttons.appendChild(btnRow2);
canvas.appendChild(display);
canvas.appendChild(buttons);



export {canvas};











/*
const plusBtn = document.createElement("button");
const minusBtn = document.createElement("button");
const multBtn = document.createElement("button");
const divideBtn = document.createElement("button");
const clearBtn = document.createElement("button");
const enterBtn = document.createElement("button");
*/