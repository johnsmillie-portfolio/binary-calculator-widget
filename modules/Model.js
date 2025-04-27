 
export class Model{
    constructor(){
        this.actionSet = false;

        this.canvasBackgroundDark = "#050505";
        this.displayBackgroundDark = "#4e4e4e";
        this.operandBackgroundDark = "#313131";
        this.digitsBackgroundDark = "#949494";
        this.operandActiveBackgroundDark = "#eeeeee";
        this.borderColorDark = "white";
        this.fontColorDark = "whitesmoke";
        
        // this.canvasBackgroundLight = "#050505";
        // this.displayBackgroundLight = "#4e4e4e";
        // this.operandBackgroundLight = "#313131";
        // this.digitsBackgroundLight = "#949494";
        // this.operandActiveBackgroundLight = "#eeeeee";
        // this.borderColorLight = "white";
        // this.fontColorLight = "whitesmoke";
        

    // The primary html element with fixed width/heighth 
        this.canvas = document.createElement("div");
        this.canvas.className = "canvas";
        this.canvas.style.cssText = `
            background-color: ${this.canvasBackgroundDark};
            border-radius: 7px;
            width: 475px;
            height: 650px;
            font-family: sans-serif;
            font-size: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            boxShadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
            `;
   
            
    // Bits Button Container
    this.bitsSelectorContainer = document.createElement("div");
    this.bitsSelectorContainer.className = "bitsSelectorContainer";
    this.bitsSelectorContainer.style.cssText = `
        display: flex;
        justify-content: space-evenly;
        width: 100%
    `;
    // Label for bits selection
    this.bitsLabel = document.createElement("div");
    this.bitsLabel.textContent = "Bits:";
    this.bitsLabel.style.cssText = `
         font-size: 16px;
     `;
    this.bitsSelectorContainer.appendChild(this.bitsLabel);

    // Bits selector
    let x = 2;
    const list2 = ["","","","",];
    [this.radio1, this.radio2, this.radio3, this.radio4] = list2.map(() => {
        let el = document.createElement("input");
        el.type = "radio";
        el.className = "bits";
        el.id = x*=2;
        el.value = x;
        
        this.bitsSelectorContainer.appendChild(el);
        return el;
    })

    // TODO: Label the radio buttons and set the initial active button


    // Diplays container
        this.displayContainer = document.createElement("div");
        this.displayContainer.className = "displayContainer";
        this.displayContainer.style.cssText = `
            width: 100%;
        `;

    // Primary digit display element
        this.primaryDisplay = document.createElement("div");
        this.primaryDisplay.className = "primaryDisplay";
        this.primaryDisplay.style.cssText = `
            background-color: ${this.displayBackgroundDark};
            border-radius: 3px;
            width: 90%;
            height: 48px;
            padding: 10px 10px 0px 10px;
            color: whitesmoke;
            font-size: 24px;
            font-family: monospace;
            text-align: right;
            margin: auto;
            `;

    // Secondary digit display element 
        this.secondaryDisplay = document.createElement("div");
        this.secondaryDisplay.className = "secondaryDisplay";
        this.secondaryDisplay.style.cssText = `
            background-color: ${this.displayBackgroundDark};
            border-radius: 3px;
            width: 90%;
            height: 48px;
            padding: 10px 10px 0px 10px;
            color: whitesmoke;
            font-size: 24px;
            font-family: monospace;
            text-align: right;
            margin: 10px auto;
            `;


    // Container for the button rows
        this.buttonsContainer = document.createElement("div");
        this.buttonsContainer.className = "buttonsContainer";

        this.btnRow1 = document.createElement("div");
        this.btnRow2 = document.createElement("div");


    // create the html button elements for the widget
    const list =  ["this.plusBtn", "this.minusBtn", "this.multBtn", "this.divideBtn", "this.clearBtn", "this.enterBtn", "this.zeroBtn", "this.oneBtn"];
    [this.plusBtn, this.minusBtn, this.multBtn, this.divideBtn, this.clearBtn, this.enterBtn, this.zeroBtn, this.oneBtn] = list.map(() => {
            let x = document.createElement("button");
            x.style.cssText = `
                 border: solid 2px lightgrey;
                 border-radius: 12px;
                 width: 100px;
                 height: 52px;
                 color: whitesmoke;
                 font-family: Helvetica;
                 font-size: 24px;
                 margin: 4px;
                 cursor: pointer;
                 `;
            return x;
        })

        // Button content
        this.plusBtn.textContent = "\u002B";
        this.minusBtn.textContent = '\u2212'; 
        this.multBtn.textContent = '\u00D7'; 
        this.divideBtn.textContent = '\u00F7'; 
        this.enterBtn.textContent = "=";
        this.zeroBtn.textContent = "\u0030";
        this.oneBtn.textContent = "\u0031";
        this.clearBtn.textContent = "c";


        // Set the background color for the operator buttons AND append to the row. 
        [this.plusBtn, this.minusBtn, this.multBtn, this.divideBtn ].forEach((el) => {
            el.style.backgroundColor = this.operandBackgroundDark;
            this.btnRow2.appendChild(el);
        });

        // Button-specific CSS
        [this.zeroBtn, this.oneBtn].forEach((el) => {
            el.style.backgroundColor = this.digitsBackgroundDark;
            el.style.fontSize = "20px";
        })
        this.clearBtn.style.backgroundColor = "#37D912";
        this.enterBtn.style.backgroundColor = "#f7be06";


        // Build the tree for the widget
        [this.zeroBtn, this.oneBtn, this.clearBtn, this.enterBtn].forEach((el) => {
            this.btnRow1.appendChild(el);
        })

        // Conversions container
        this.conversionContainer = document.createElement("div");
        this.conversionContainer.className = "conversionContainer";
        this.conversionContainer.style.cssText = `
            width: 100%;
        `; 
        // TODO: labels for the conversions

        this.binaryDisplay = document.createElement("div");
        this.binaryDisplay.className = "binaryDisplay";
        

        this.signedDisplay = document.createElement("div");
        this.signedDisplay.className = "signedDisplay";

        this.unsignedDisplay = document.createElement("div");
        this.unsignedDisplay.className = "unsignedDisplay";

        [this.binaryDisplay, this.signedDisplay, this.unsignedDisplay].forEach((el) => {
            el.style.cssText = `
                background-color: ${this.displayBackgroundDark};
                border-radius: 3px;
                width: 90%;
                height: 48px;
                padding: 10px 10px 0px 10px;
                color: whitesmoke;
                font-size: 24px;
                font-family: monospace;
                text-align: right;
                margin: 32px auto;
            `;
            this.conversionContainer.appendChild(el);
        });

        // Build main components
        this.displayContainer.appendChild(this.primaryDisplay);
        this.displayContainer.appendChild(this.secondaryDisplay);

        this.buttonsContainer.appendChild(this.btnRow1);
        this.buttonsContainer.appendChild(this.btnRow2);
       
        this.canvas.appendChild(this.bitsSelectorContainer);
        this.canvas.appendChild(this.displayContainer);
        this.canvas.appendChild(this.buttonsContainer);
        this.canvas.appendChild(this.conversionContainer);

        // // Set IDs for functions linked to each button
        // clearBtn.setAttribute("id", "clearBtn");
        // enterBtn.setAttribute("id", "enterBtn");
        // zeroBtn.setAttribute("id", "zeroBtn");
        // oneBtn.setAttribute("id", "oneBtn");
        // plusBtn.setAttribute("id", "plusBtn");
        // minusBtn.setAttribute("id", "minusBtn");
        // multBtn.setAttribute("id", "multBtn");
        // divideBtn.setAttribute("id", "divideBtn");

    }
    getCanvas(){
        return this.canvas;
    }
    toggleLight(){}
    toggleDark(){}

}

