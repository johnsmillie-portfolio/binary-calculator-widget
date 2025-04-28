import { BinaryNumber } from "./BinaryNumber.js";


export class Operations{
    constructor(){

        this.bits = 8;
        this.operator = ""; 
        this.primaryOperand = new BinaryNumber("");
        this.secondaryOperand = new BinaryNumber("");
    }

    getBitMask(){
        return (2**this.bits-1).toString(2);
    }
    
    setBits(bits){
        this.bits = bits;
    }

    setOperator(operator){
        this.operator = operator;
    }

    setPrimaryOperand(str){
        this.primaryOperand.setStr(str);
    }
    setSecondaryOperand(){
        this.secondaryOperand.setStr(this.primaryOperand.getStr());
        this.primaryOperand.setStr("");
    }

    getPrimaryOperandLength(){
        return this.primaryOperand.getStringLength();
    }

    reset(){
        this.operator = "";
        this.primaryOperand.setStr("");
        this.secondaryOperand.setStr("");
    }


    operate(){
        let result = 0;
        const p = this.primaryOperand.binaryToUnsignedNumber();
        const s = this.secondaryOperand.binaryToUnsignedNumber();
        switch(this.operator){
            case "+":
                result = p + s;
                break;
            case "-":
                result = p - s;
                break;
            case "x":;
                result = p * s;
                break
            case "\u00F7":
                // integer division
                result = Math.floor(p / s).toFixed(0);
            default:

        }
        result &= this.getBitMask;
        logOperation(); 
        return result.toString(2);
    }
 
} 
