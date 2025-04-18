import {operate, binaryStringToNumber, numToBinaryString, calculateNegativeNumber} from "../modules/operations.js";
import {describe, expect, test} from '@jest/globals';




describe("calculateNegativeNumbers", () => {
  test("10001000", () => {
    expect(calculateNegativeNumber("10001000")).toBe(-120)
  });
  test("11", () => {
    expect(calculateNegativeNumber("11")).toBe(-1)
  });
  test("1111111111111111", () => {
    expect(calculateNegativeNumber("1111111111111111")).toBe(-1)
  });
  test("10", () => {
    expect(calculateNegativeNumber("10")).toBe(-2)
  });
  test("110", () => {
    expect(calculateNegativeNumber("110")).toBe(-2)
  });
  test("1111110", () => {
    expect(calculateNegativeNumber("1111110")).toBe(-2)
  });
  test("11110111", () => {
    expect(calculateNegativeNumber("11110111")).toBe(-9);
  });
});

describe("binaryStringToNumber", () => {
    test("0", () => {
      expect(binaryStringToNumber("0")).toBe(0);
    });
    test("1", () => {
      expect(binaryStringToNumber("1")).toBe(1);
    });
    test("01", () => {
      expect(binaryStringToNumber("01")).toBe(1);
    });
    test("10", () => {
      expect(binaryStringToNumber("10")).toBe(-2);
    });
    test("010", () => {
      expect(binaryStringToNumber("010")).toBe(2);
    });
    test("0110", () => {
      expect(binaryStringToNumber("0110")).toBe(6);
    });
    test("01101011010010110", () => {
      expect(binaryStringToNumber("01101011010010110")).toBe(54934);
    });
    test("MaxInt", () => {
      expect(binaryStringToNumber("01111111111111111111111111111111")).toBe(2147483647);
    });
    test("MinInt", () => {
      expect(binaryStringToNumber("10000000000000000000000000000000")).toBe(-2147483648);
    });
    test("MaxUnsignedInt", () => {
      expect(binaryStringToNumber("11111111111111111111111111111111")).toBe(-1);
    });  
    test("MaxUnsignedInt-1", () => {
      expect(binaryStringToNumber("11111111111111111111111111111110")).toBe(-2);
    }); 
})
// 11111111111111111111111111111111
describe("numToBinaryString", () => {
  test("0", () => {
    expect(numToBinaryString(0)).toBe("00");
  });
  test("1", () => {
    expect(numToBinaryString(1)).toBe("01");
  });
  test("-1", () => {
    expect(numToBinaryString(-1)).toBe("11");
  });
  test("2", () => {
    expect(numToBinaryString(2)).toBe("010");
  });
  test("-2", () => {
    expect(numToBinaryString(-2)).toBe("10");
  });
  test("3", () => {
    expect(numToBinaryString(3)).toBe("011");
  });
  test("-3", () => {
    expect(numToBinaryString(-3)).toBe("101");
  });
  test("4", () => {
    expect(numToBinaryString(4)).toBe("0100");
  });
  test("-4", () => {
    expect(numToBinaryString(-4)).toBe("100");
  });
  test("5", () => {
    expect(numToBinaryString(5)).toBe("0101");
  });
  test("-5", () => {
    expect(numToBinaryString(-5)).toBe("1011");
  });
  test("2147483647", () => {
    expect(numToBinaryString(2147483647)).toBe("01111111111111111111111111111111");
  });
  test("-2147483648", () => {
    expect(numToBinaryString(-2147483648)).toBe("10000000000000000000000000000000");
  });
  test("4294967294", () => {
    expect(numToBinaryString(4294967294)).toBe("11111111111111111111111111111110");
  });
})

describe("operate", () => {
  test("010 + 01 = 011", () => {
    expect(operate("010", "01", "+")).toBe("011")
  });
  test("101 + 10 = 1011", () => {
    expect(operate("101", "10", "+")).toBe("1011")
  });
  test("01101 + 101 = 01010", () => {
    expect(operate("01101", "101", "+")).toBe("01010")
  });
  test("MaxInt + 01 = MinInt", () => {
    expect(operate("01111111111111111111111111111111", "01", "+")).toBe("10000000000000000000000000000000")
  });
  test("MaxInt + 010 = MinInt+1", () => {
    expect(operate("01111111111111111111111111111111", "010", "+")).toBe("10000000000000000000000000000001")
  });
  test("MinInt + 011 = MinInt+3", () => {
    expect(operate("10000000000000000000000000000000", "011", "+")).toBe("10000000000000000000000000000011")
  });
  test("MinInt + 11 = MaxInt", () => {
    expect(operate("10000000000000000000000000000000", "11", "+")).toBe("01111111111111111111111111111111")
  });

  test("010 - 01 = 01", () => {
    expect(operate("010", "01", "-")).toBe("01")
  });
  test("01 - 01 = 00", () => {
    expect(operate("01", "01", "-")).toBe("00")
  });
  test("01010 - 0110 = 0100", () => {
    expect(operate("01010", "0110", "-")).toBe("0100")
  });
  test("01 - 010 = 11", () => {
    expect(operate("01", "010", "-")).toBe("11")
  });
  test("MaxInt - 01 = MaxInt-1", () => {
    expect(operate("01111111111111111111111111111111", "01", "-")).toBe("01111111111111111111111111111110")
  });
  test("MinInt - 01 = MaxInt", () => {
    expect(operate("10000000000000000000000000000000", "01", "-")).toBe("01111111111111111111111111111111")
  });


  test("010 x 01 = 010", () => {
    expect(operate("010", "01", "x")).toBe("010")
  });
  test("11 x 01 = 11", () => {
    expect(operate("11", "01", "x")).toBe("11")
  });
  test("010 x 010 = 0100", () => {
    expect(operate("010", "010", "x")).toBe("0100")
  });
  test("010 x MaxInt = MaxUnsignedInt-1", () => {
    expect(operate("010", "01111111111111111111111111111111", "x")).toBe("10")
  });
  test("MaxInt x 11 = MinInt+1", () => {
    expect(operate("01111111111111111111111111111111", "11", "x")).toBe("10000000000000000000000000000001")
  });
  test("MinInt x 11 = MinInt", () => {
    expect(operate("10000000000000000000000000000000", "11", "x")).toBe("10000000000000000000000000000000")
  });


  test("010 / 01 = 010", () => {
    expect(operate("010", "01", "\u00F7")).toBe("010")
  });
  test("010 / 11 = 10", () => {
    expect(operate("010", "11", "\u00F7")).toBe("10")
  });
  test("01001 / 011 = 011", () => {
    expect(operate("01001", "011", "\u00F7")).toBe("011")
  });
  test("01001 / 010 = 0100", () => {
    expect(operate("01001", "010", "\u00F7")).toBe("0100")
  });
  test("MaxInt / MinInt = 11", () => {
    expect(operate("01111111111111111111111111111111", "10000000000000000000000000000000", "\u00F7")).toBe("11")
  });
  test("MinInt / MaxInt = 11", () => {
    expect(operate("10000000000000000000000000000000", "01111111111111111111111111111111", "\u00F7")).toBe("10")
  });
})

 

