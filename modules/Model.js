 
export class Model{
    constructor(){
        
        this.canvasBackgroundDark = "#050505";
        this.displayBackgroundDark = "#4e4e4e";
        this.operandBackgroundDark = "#313131";
        this.digitsBackgroundDark = "#949494";
        this.operandActiveBackgroundDark = "#eeeeee";
        this.borderColorDark = "white";
        this.fontColorDark = "whitesmoke";
        this.enterColor = "#e1a106"
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
            width: 425px;
            height: 550px;
            font-family: sans-serif;
            font-size: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            
            boxShadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
            `;
   
            
    // Bits Button Container
    this.bitsSelectorContainer = document.createElement("div");
    this.bitsSelectorContainer.className = "bitsSelectorContainer";
    this.bitsSelectorContainer.style.cssText = `
        display: flex;
        justify-content: space-evenly;
        width: 90%;
           font-size: 16px;
    `;
    // Label for bits selection
    this.bitsLabel = document.createElement("div");
    this.bitsLabel.textContent = "Bits:";

    this.bitsSelectorContainer.appendChild(this.bitsLabel);

    // Bits selector
    let x = 2;
    const list2 = ["4","8","16","32",];

    [this.label1, this.label2, this.label3, this.label4] = list2.map((num) => {
        let el = document.createElement("label");
        el.className = "radioLabel";
        el.textContent = num;
        return el;
    });

    [this.radio1, this.radio2, this.radio3, this.radio4] = list2.map(() => {
        let el = document.createElement("input");
        el.type = "radio";
        el.className = "bits";
        el.id = x*=2;
        el.value = x;
        el.addEventListener("click", () => {
            this.toggleBitsSelector(el);
        })
        return el;
    });

    // variables for radio button behavior
    this.radio1.checked = true;
    this.bitsSet = this.radio1;

    // Model building sequence
    [this.label1, this.radio1, this.label2, this.radio2, this.label3, this.radio3, this.label4, this.radio4].forEach((el) => {
        this.bitsSelectorContainer.appendChild(el);
    });

    // Diplays container
        this.displayContainer = document.createElement("div");
        this.displayContainer.className = "displayContainer";
        this.displayContainer.style.cssText = `
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
              background-color: ${this.displayBackgroundDark};
        `; 

    // Primary digit display element
        this.primaryDisplay = document.createElement("div");
        this.primaryDisplay.className = "primaryDisplay";
        this.primaryDisplay.style.cssText = `
            background-color: ${this.displayBackgroundDark};
            border-radius: 3px;
            height: 40px;
            display: flex;
            color: whitesmoke;
            font-size: 24px;
            font-family: monospace;
            align-items: center;
            justify-content: right;
            margin: auto;
            padding: 5px;
            width: 100%;
            `;


    this.backspace = document.createElement("div");
    this.backspace.id = "backspace";
    this.backspace.style.cssText = `
        width: 20px;
        height: 40px;
        font-size: 24px;
        background-color: inherit;
        padding: 10px 2px 5px 0px;
        cursor: pointer;
        
    `;
    this.backspace.textContent = `\u21E6`
    
  
    // Container for the button rows
        this.buttonsContainer = document.createElement("div");
        this.buttonsContainer.className = "buttonsContainer";

        this.btnRow1 = document.createElement("div");
        this.btnRow2 = document.createElement("div");


    // create the html button elements for the widget
    const list =  ["operation", "operation", "operation", "operation", "clear", "operation", "operand", "operand"];
    [this.plusBtn, this.minusBtn, this.multBtn, this.divideBtn, this.clearBtn, this.enterBtn, this.zeroBtn, this.oneBtn] = list.map((el) => {
            let x = document.createElement("button");
            x.className = "actionButton";
            x.id = el;
            x.style.cssText = `
                 border: solid 2px lightgrey;
                 border-radius: 12px;
                 width: 55px;
                 height: 55px;
                 color: whitesmoke;
                 font-family: Helvetica;
                 font-size: 24px;
                 margin: 6px 12px;
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
        this.clearBtn.style.backgroundColor = "#37b612";
        this.enterBtn.style.backgroundColor = "#e1a106";


        // Build the tree for the widget
        [this.zeroBtn, this.oneBtn, this.clearBtn, this.enterBtn].forEach((el) => {
            this.btnRow1.appendChild(el);
        })

        // Conversions container
        this.conversionContainer = document.createElement("div");
        this.conversionContainer.className = "conversionContainer";
        this.conversionContainer.style.cssText = `
            width: 90%;
        `; 
       
        this.binaryDisplayLabel = document.createElement("div");
        this.binaryDisplayLabel.className = ("conversionDisplayLabel");
        this.binaryDisplay = document.createElement("div");
        this.binaryDisplay.className = "binaryDisplay";
        this.binaryDisplayLabel.textContent = "Binary:";
        
        this.signedDisplayLabel = document.createElement("div");
        this.signedDisplayLabel.className = ("conversionDisplayLabel");
        this.signedDisplayLabel.textContent = "Signed Base-10:";
        this.signedDisplay = document.createElement("div");
        this.signedDisplay.className = "signedDisplay";

        this.unsignedDisplayLabel = document.createElement("div");
        this.unsignedDisplayLabel.className = ("conversionDisplayLabel");
        this.unsignedDisplayLabel.textContent = "Unsigned Base-10:";
        this.unsignedDisplay = document.createElement("div");
        this.unsignedDisplay.className = "unsignedDisplay";

        [this.binaryDisplay, this.signedDisplay, this.unsignedDisplay].forEach((el) => {
            el.style.cssText = `
                background-color: ${this.displayBackgroundDark};
                border-radius: 3px;
                height: 40px;
                padding: 10px 10px 0px 10px ;
                color: whitesmoke;
                font-size: 24px;
                font-family: monospace;
                text-align: right;
                margin: 10px auto;
            `;
        });
        [this.binaryDisplayLabel, this.binaryDisplay, this.signedDisplayLabel, this.signedDisplay, this.unsignedDisplayLabel, this.unsignedDisplay].forEach((el) => {
            this.conversionContainer.appendChild(el);
        });
        // Build main components
        this.displayContainer.appendChild(this.primaryDisplay);
        this.displayContainer.appendChild(this.backspace);

        this.buttonsContainer.appendChild(this.btnRow1);
        this.buttonsContainer.appendChild(this.btnRow2);
       
        this.canvas.appendChild(this.bitsSelectorContainer);
        this.canvas.appendChild(this.displayContainer);
        this.canvas.appendChild(this.buttonsContainer);
        this.canvas.appendChild(this.conversionContainer);

    }


    getCanvas(){
        return this.canvas;
    }

    toggleBitsSelector(el){
        this.bitsSet.checked = false;
        this.bitsSet = el;
        this.bitsSet.checked = true;
    }
    
    setPrimaryDisplay(value){
        this.primaryDisplay.style.fontSize = 
        value.length > 16 ? "18px" : "24px";
        this.primaryDisplay.textContent = value; 
    }

    toggleActiveOperator(operator, on){
        this.plusBtn.style.border =
        this.minusBtn.style.border = 
        this.multBtn.style.border = 
        this.divideBtn.style.border = 
        "2px solid lightgrey";
        switch(operator){
            case "\u002B":
                this.plusBtn.style.border = `2px solid ${this.enterColor}`; 
                break;
            case "\u2212":
                this.minusBtn.style.border = `2px solid ${this.enterColor}`; 
                break;
            case "\u00D7":
                this.multBtn.style.border = `2px solid ${this.enterColor}`; 
                break;
            case "\u00F7":
                this.divideBtn.style.border = `2px solid ${this.enterColor}`; 
                break;
            default:
                this.plusBtn.style.border =
                this.minusBtn.style.border = 
                this.multBtn.style.border = 
                this.divideBtn.style.border = 
                "2px solid lightgrey";
        }
    }
  

    setConversions(binary, signed, unsigned){
        this.binaryDisplay.style.fontSize = binary.length > 16 ? "18px" : "24px";
        this.binaryDisplay.textContent = binary;
        this.signedDisplay.style.fontSize = signed.length > 16 ? "18px" : "24px";
        this.signedDisplay.textContent = signed;
        this.unsignedDisplay.style.fontSize = unsigned.length > 16 ? "18px" : "24px";
        this.unsignedDisplay.textContent = unsigned;
    }

    clearConversions(){
        this.binaryDisplay.textContent =
        this.signedDisplay.textContent =
        this.unsignedDisplay.textContent =
        "";
    }

    reset(){
        this.clearConversions();
        this.setPrimaryDisplay("");
    }

    flashBackspace(){
        this.backspace.style.backgroundColor =  "grey";
        setTimeout(() => {
            this.backspace.style.backgroundColor = this.displayBackgroundDark;
        }, 100);
    }
    toggleLight(){}
    toggleDark(){}

}

