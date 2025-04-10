
// The primary html element with fixed width/heighth 
const canvas = document.createElement("div");
canvas.className = "canvas";
canvas.style.backgroundColor = "#050505";
canvas.style.borderRadius = "7px"
canvas.style.width = "500px";
canvas.style.height = "300px";
canvas.style.fontFamily = "sans-serif";
canvas.style.fontSize = "24px";
canvas.style.display = "flex";
canvas.style.flexDirection = "column";
canvas.style.justifyContent = "center";
canvas.style.alignItems = "center";
canvas.style.gap = "12px";


// Digit display element
const display = document.createElement("div");
display.className = "display";
display.style.backgroundColor = "#4e4e4e";
display.style.borderRadius = "3px";
display.style.width = "90%";
display.style.height = "48px";
display.style.padding = "10px 10px 0px 10px";
display.style.color = "whitesmoke";
display.style.fontSize = "28px";
display.style.fontFamily = "monospace";
display.style.textAlign = "right";
display.textContent = "_";

const sub = document.createElement("div");
sub.className = "sub";
sub.style.display = "flex";
sub.style.justifyContent = "space-between";
sub.style.width = "95%";

const action = document.createElement("div");
action.className = "action";
//action.style.width = "10%";
action.style.height = "32px";
action.style.padding = "0px 10px";
action.style.color = "white";
action.style.fontSize = "18px";
action.style.fontFamily = "monospace";


const subDisplay = document.createElement("div");
//subDisplay.style.width = "85%";
subDisplay.style.height = "32px";
subDisplay.style.padding = "0px 10px";
subDisplay.style.color = "white";
subDisplay.style.fontSize = "18px";
subDisplay.style.fontFamily = "monospace";
subDisplay.style.textAlign = "right";

// A container for the button rows
const buttons = document.createElement("div");
buttons.className = "buttons";

const btnRow1 = document.createElement("div");
const btnRow2 = document.createElement("div");


// create the html button elements for the widget
const list = ["plusBtn", "minusBtn", "multBtn", "divideBtn", "clearBtn", "enterBtn", "zeroBtn", "oneBtn"];
const [plusBtn, minusBtn, multBtn, divideBtn, clearBtn, enterBtn, zeroBtn, oneBtn] = list.map(() => document.createElement("button"));

// Button content
plusBtn.textContent = "\u002B";
minusBtn.textContent = '\u2212'; 
multBtn.textContent = '\u00D7'; 
divideBtn.textContent = '\u00F7'; 
enterBtn.textContent = "=";
zeroBtn.textContent = "\u0030";
oneBtn.textContent = "\u0031";
clearBtn.textContent = "c";

// General CSS for all buttons
[zeroBtn, oneBtn, clearBtn, enterBtn, plusBtn, minusBtn, multBtn, divideBtn].forEach((el) => {
    el.style.border = "solid 3px white";
    el.style.borderRadius = "50px";
    el.style.width = "100px";
    el.style.height = "52px";
    el.style.color = "whitesmoke";
    el.style.fontFamily = "Helvetica";
    el.style.fontSize = "24px";
    el.style.margin = "7px";
    el.style.cursor = "pointer";

});

// Set the background color for the operator buttons AND append to the row. 
[plusBtn, minusBtn, multBtn, divideBtn ].forEach((el) => {
    el.style.backgroundColor = "#313131";
    btnRow2.appendChild(el);
});

// Button-specific CSS
[zeroBtn, oneBtn].forEach((el) => {
    el.style.backgroundColor = "#949494";
    el.style.fontSize = "20px";
})
clearBtn.style.backgroundColor = "#37D912";
enterBtn.style.backgroundColor = "#f7be06";


// Build the tree for the widget
[zeroBtn, oneBtn, clearBtn, enterBtn].forEach((el) => {
    btnRow1.appendChild(el);
})

buttons.appendChild(btnRow1);
buttons.appendChild(btnRow2);
sub.appendChild(action);
sub.appendChild(subDisplay);
canvas.appendChild(display);
canvas.appendChild(sub);
canvas.appendChild(buttons);


// Set IDs for functions linked to each button
clearBtn.setAttribute("id", "clearBtn");
enterBtn.setAttribute("id", "enterBtn");
zeroBtn.setAttribute("id", "zeroBtn");
oneBtn.setAttribute("id", "oneBtn");
plusBtn.setAttribute("id", "plusBtn");
minusBtn.setAttribute("id", "minusBtn");
multBtn.setAttribute("id", "multBtn");
divideBtn.setAttribute("id", "divideBtn");


export {canvas, display, subDisplay, action, plusBtn, minusBtn, multBtn, divideBtn, enterBtn, clearBtn, zeroBtn, oneBtn };

