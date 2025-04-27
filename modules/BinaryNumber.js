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
    

    binaryToSignedNumber(bits){
        if(!this.str){throw Error("this.str is null");}
        if(this.str.startsWith("0")){return Number.parseInt(str, 2);}
        let negative = -(2**bits)
        let positive = binaryToUnsignedNumber(this.str.slice(1));
        return negative + positive;
    }

    binaryToUnsignedNumber(){
        if(!this.str){throw Error("this.str is null");}
        return Number.parseInt(this.str, 2);
    }

    setStr(binaryString){
        this.str = binaryString;
    }
    getStr(){
        return this.str;
    }
    
}