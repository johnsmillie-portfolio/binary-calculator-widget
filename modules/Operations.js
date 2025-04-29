import { BinaryNumber } from "./BinaryNumber.js";


export class Operations{
    constructor(){

        this.bits = 8;
        this.operator = ""; 
        this.mutableOperand = new BinaryNumber(String(""));
        this.constOperand = new BinaryNumber(String(""));
    }

    hasMutable(){
        return !!(this.mutableOperand.getStr())  
    }

    hasConstant(){
        return !!(this.constOperand.getStr());
    }

    hasOperator(){
        return !!(this.operator);
    }

    getBitMask(){
        return (2**this.bits-1);
    }

    setBits(bits){
        this.bits = bits;
    }

    padBinaryStings(){
        this.hasMutable() &&
        this.setMutableOperand(this.mutableOperand.getStr().padStart(this.bits,"0"));
        
        this.hasConstant() &&
        this.setConstOperand(this.constOperand.getStr().padStart(this.bits, "0"));
    }

    setOperator(operator){
        this.operator = operator;
    }

    setMutableOperand(str){
        this.mutableOperand.setStr(str);
    }

    setConstOperand(str){
        this.constOperand.setStr(str);
        //this.mutableOperand.setStr("");
    }

    transferOperands(){
        this.setConstOperand(this.mutableOperand.getStr());
        this.setMutableOperand("");
    }

    getMutableOperandLength(){
        return this.mutableOperand.getStringLength();
    }

    reset(){
        this.operator = "";
        this.mutableOperand.setStr("");
        this.constOperand.setStr("");
    }

    operate(){

        if(this.hasMutable() && this.hasConstant()){
            let result = 0;
            const p = this.mutableOperand.binaryToUnsignedNumber();
            const s = this.constOperand.binaryToUnsignedNumber();
            switch(this.operator){
                case `\u002B`:
                    result = p + s;
                    break;
                case `\u2212`:
                    result = s - p;
                    break;
                case `\u00D7`:;
                    result = p * s;
                    break
                case `\u00F7`:
                    // integer division
                    result = Math.floor(s / p).toFixed(0);
                default:     
            }

            // truncate any extra bits
            result &= this.getBitMask();
            this.setConstOperand(result.toString(2).padStart(this.bits, "0"));
            this.setMutableOperand("");
        }
     
      
    }
 
} 
