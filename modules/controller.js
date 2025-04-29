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
            operations.getMutableOperandLength() < operations.bits
            && operations.mutableOperand.pushBit(e.target.textContent);
            updateInputDisplay();
            break;
        case "clear":
            clear();
            break;
        case "operation":
            operations.padBinaryStings();
            compute(e.target.textContent);
            model.toggleActiveOperator(operations.operator, true);
            convert();
            updateInputDisplay();
     

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

           
           
            break;
        default:
           console.log("Unknown Selection Triggered");
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

// TODO 
/**
    - 
    - start testing the functions
    -  backspace
    - toggle light dark
    - keyboard input

 * data flow
 * model flow
 *
 */




export {model}