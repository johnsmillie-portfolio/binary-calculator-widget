import { BinaryNumber } from "./BinaryNumber.js";


export class Operations {
    constructor(bits = 4, operator = "", str1 = "", str2 = "") {
        this.bits = bits;
        this.operator = operator;
        this.mutableOperand = new BinaryNumber(str1);
        this.constOperand = new BinaryNumber(str2);
    }

    hasMutable() {
        return !!(this.mutableOperand.getStr())
    }

    hasConstant() {
        return !!(this.constOperand.getStr());
    }

    hasOperator() {
        return !!(this.operator);
    }

    padBinaryStrings() {
        this.hasMutable() &&
            this.setMutableOperand(this.mutableOperand.getStr().padStart(this.bits, "0"));

        this.hasConstant() &&
            this.setConstOperand(this.constOperand.getStr().padStart(this.bits, "0"));
    }

    getBitMask() {
        return (2 ** this.bits - 1);
    }

    setBits(bits) {
        this.bits = bits;
    }
    setOperator(operator) {
        this.operator = operator;
    }

    setMutableOperand(str) {
        this.mutableOperand.setStr(str);
    }

    setConstOperand(str) {
        this.constOperand.setStr(str);
    }

    transferOperands() {
        this.setConstOperand(this.mutableOperand.getStr());
        this.setMutableOperand("");
    }

    getMutableOperandLength() {
        return this.mutableOperand.getStringLength();
    }

    reset() {
        this.operator = "";
        this.mutableOperand.setStr("");
        this.constOperand.setStr("");
    }

    numTo2sComplementString(num) {
        if (num >= 0) { return num.toString(2); }
        let x = 2 ** this.bits;
        return (x + num).toString(2);
    }

    operate() {
        if (this.hasMutable() && this.hasConstant()) {
            let result = 0;
            const p = this.mutableOperand.binaryToUnsignedNumber();
            const s = this.constOperand.binaryToUnsignedNumber();
            switch (this.operator) {
                case `\u002B`:
                    result = p + s;
                    break;
                case `\u2212`:
                    result = s - p;
                    break;
                case `\u00D7`: ;
                    result = p * s;
                    break
                case `\u00F7`:
                    if (p === 0) {/* TODO Handle this */ }
                    // integer division
                    result = Number(Math.floor(s / p).toFixed(0));
                default:
            }

            // truncate any extra bits
            //result &= this.getBitMask();
            result = this.numTo2sComplementString(result);
            if(result.length > this.bits){
                result = result.slice(-this.bits);
            }
            this.setConstOperand(result.padStart(this.bits, "0"));
            this.setMutableOperand("");
        }
    }
} 
