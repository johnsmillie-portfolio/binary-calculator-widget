import {Model} from "./Model.js";
import { Operations } from "./Operations.js";

const operations = new Operations();
const model = new Model();

document.addEventListener("click", (e) => {
    if(e.target.className === "bits"){
        switchRadio(e.target.id);        
        return;
    }
 
    clickHelper(e.target.id, e.target.textContent);
})

function clickHelper(id, text){
    switch(id){
        case "operand":
            operations.getMutableOperandLength() < operations.bits
            && operations.mutableOperand.pushBit(text);
            updateInputDisplay();
            break;
        case "clear":
            clear();
            break;
        case "backspace":
            backspace();
            updateInputDisplay();
            break;
        case "operation":
            operations.padBinaryStrings();
            compute(text);
            model.toggleActiveOperator(operations.operator, true);
            convert();
            updateInputDisplay();
            break;
        default:
           console.log("Unknown Selection Triggered");
    }
}


document.addEventListener("keydown", (e) => {
    e.preventDefault();
    switch(e.key){
        case "0":
        case "1":
            operations.getMutableOperandLength() < operations.bits
            && operations.mutableOperand.pushBit(e.key);
            updateInputDisplay();
            break;
        case "Backspace":
            clickHelper("backspace");
            break;
        case `+`:
        case `-`:
        case `*`:
        case `/`: 
        case `=`:
        case "Enter":
            clickHelper("operation", extractKey(e.key));
            document.body.focus();
            break;

        
    }
})

function extractKey(key){
    switch(key){
        case "+":
            return `\u002B`;
        case "-":
            return `\u2212`;
        case "*":
            return `\u00D7`;
        case "/":
            return `\u00F7`;
        case "=":
        case "Enter":
            return "=";
    }
}

function updateInputDisplay(){
    model.setPrimaryDisplay(operations.mutableOperand.getStr());
}

function compute(input){
    let isEnter = input === "=";
    let hM = operations.hasMutable();
    let hC = operations.hasConstant();
    let hO = operations.hasOperator();

    if((!hM && !hC) || !hM && hC && isEnter){return;}
    if(hM && hC && hO){ 
        operations.operate();
        operations.setOperator(isEnter ? "" : input);
    }
    else if ((hM && hC && !hO) || (hM && !hC)) {
        !isEnter && operations.setOperator(input);
        operations.transferOperands()
    }
    else if(!hM && hC && !isEnter){
        operations.setOperator(input);
    }
}

function backspace(){
    if(operations.getMutableOperandLength() > 0)
        {operations.mutableOperand.removeBit();
            model.flashBackspace();
        }
}

function clear(){
    operations.reset();
    updateInputDisplay();
    model.toggleActiveOperator(operations.operator, false);
    model.clearConversions();
}

function convert(){
    model.setConversions(
        operations.constOperand.getStr(), 
        operations.constOperand.binaryToSignedNumber(operations.bits), 
        operations.constOperand.binaryToUnsignedNumber()
    );
}

function switchRadio(newBits){
    model.toggleRadioButtons(operations.bits, newBits);
    operations.setBits(newBits);
    clear();
}




// TODO 
/**
    - toggle light dark
 *
 */

// Logic for compute()
// if "=" and hasP and hasC && hasO -> operate reset 
// if "=" and hasP and hasC and !hasO -> transferO x
// if "=" and hasP and !hasC -> transferO 
// if "=" and !hasP and hasC -> do nothing x
// if "=" and !hasP and !hasC -> do nothing x

// if "+" and hasP and hasC and hasO -> operate x
// if "+" and hasP and hasC and !hasO -> set new operand x
// if "+" and hasP and !hasC -> transferO and set operand
// if "+" and !hasP and hasC -> setOperand 
// if "+" and !hasP and !hasC -> do nothing x

           


export {model}