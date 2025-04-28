import {Model} from "./Model.js";
import { Operations } from "./Operations.js";

const operations = new Operations();
const model = new Model();

document.addEventListener("click", (e) => {
    if(e.target.className === "bits"){
        operations.setBits(e.target.id);
        return;
    }
    clickHelper(e);
})

function clickHelper(e){
    //console.table()
    switch(e.target.id){
        case "operand":
            operations.getPrimaryOperandLength() < operations.bits
               && operations.primaryOperand.pushBit(e.target.textContent);
            break;
        case "clear":
            clear()
            break;
        case "operation":
            operations.setOperator(e.target.textContent);
            if(operations.primaryOperand.getStr() 
                && operations.secondaryOperand.getStr()
                && operations.operate());
            else if(operations.primaryOperand.getStr()
                && operations.operator === "="
                && convert());                
            else if(operations.primaryOperand.getStr()){
                convert();
                operations.setSecondaryOperand();
                model.toggleActiveOperator(operations.operator, true);
               
            }
            break;
        default:
           console.log("Unknown Selection Triggered");
    }
    updateDisplay();
}

// set the display boxes to the current values
// this is called after every event following changes to data
function updateDisplay(){
    model.setPrimaryDisplay(operations.primaryOperand.getStr());
    // model.setConversions(
    //     operations.primaryOperand.getStr(), 
    //     operations.primaryOperand.binaryToSignedNumber(operations.bits), 
    //     operations.primaryOperand.binaryToUnsignedNumber()
    // );
}

function clear(){
    operations.reset();
    model.toggleActiveOperator(operations.operator, false);
    model.clearConversions();
}

function convert(){
    model.setConversions(
        operations.primaryOperand.getStr(), 
        operations.primaryOperand.binaryToSignedNumber(operations.bits), 
        operations.primaryOperand.binaryToUnsignedNumber()
    );
}

// TODO 
/**
 * decide on display behavior when using operators (started)
 *      L> it's using the binary display
 * operate() function
 * doing mulitple conversions back to back
 * theory: pressing any operator or the equals sign will always update the conversion display
 * data flow
 * model flow
 * backspace
 * toggle light dark
 */

/*
both are set and equals
both are set and operator
just primary is set and equals (convert)
just primary set and operator 
neither are set
*/


   




export {model}