export function operate(primary, secondary, actionString){

    let result = 0;
    const s = binaryyStringToNumber(secondary);
    const p = binaryyStringToNumber(primary);
    switch(actionString){
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
            result = Math.floor(p / s).toFixed(0);
    }

    return numToBinaryString(result);
}

function binaryyStringToNumber(num){
    if(num.startsWith("0")){
        // positive number
        num = num.slice(1);
        return Number.parseInt(num,2);
    }
    else{
        //negative number
        return calculateNegativeNumber(num);
    }
}

function numToBinaryString(num){
    if(num >= 0){return "0" + num.toString(2);} // psitive number
    else{
        const exp = 2**31;
        return (exp + num).toString(2);
    }

}

function calculateNegativeNumber(num){
    let neg = 2 ** (num.length-1);                  // calc 2^(leading 1 bit)  
    num = num.slice(1);                         // remove leading 1
    return -(neg - Number.parseInt(num, 2));                // the difference will be positive, guaranteed. Convert to negative
}


