/*-
- make an operations class
    - uses BinaryNumber class as fields
    - clean up operations with fixed bit counts
- evaluate when an operator button is pressed as "enter"
- controller buttonHelper should use the operations class for operations;
- toggle signed/unsigned
*/

// A binary representation must be a string
// the 
export class BinaryNumber{
    constructor(binaryString){
        this.str = binaryString;    
    }
    
    binaryToUnsignedNumber(){
        if(!this.str){return "";}
        return Number.parseInt(this.str, 2);
    }
    binaryToSignedNumber(bits){
        if(!this.str){return "";}
        if(this.str.startsWith("0")){return Number.parseInt(this.str, 2);}
        let negative = -(2**bits)
        let positive = Number.parseInt(this.str.slice(1),2);
        return negative + positive;
    }

 

    setStr(binaryString){
        this.str = binaryString;
    }
    getStr(){
        return this.str;
    }
    pushBit(bit){
        this.str += bit;
    }
    removeBit(){
        this.str.slice(-1);
    }
    getStringLength(){
        return this.str.length;
    }
    
}