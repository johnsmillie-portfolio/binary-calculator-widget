import {Operations} from "../modules/Operations.js"
import {describe, test, expect} from "@jest/globals";

 let ops;

// padBinaryStrings
describe("padBinaryStrings()", () => {
  test("4 bits: M = 1110, C = 10", () => {
    ops = new Operations(4,"","1110","10");
    ops.padBinaryStrings();
    expect(ops.mutableOperand.getStr()).toBe("1110");
    expect(ops.constOperand.getStr()).toBe("0010");
  })
  test("8 bits: M = 010110, C = \"\"", () => {
    ops = new Operations(8,"","010110","");
    ops.padBinaryStrings();
    expect(ops.mutableOperand.getStr()).toBe("00010110");
    expect(ops.constOperand.getStr()).toBe("");
  })
  test("16 bits: M = \"\", C = 101", () => {
    ops = new Operations(16,"","","101");
    ops.padBinaryStrings();
    expect(ops.mutableOperand.getStr()).toBe("");
    expect(ops.constOperand.getStr()).toBe("0000000000000101");
  })
  test("32 bits: M = 101010101101011100011010, C = 010110", () => {
    ops = new Operations(32,"","101010101101011100011010","010110");
    ops.padBinaryStrings();
    expect(ops.mutableOperand.getStr()).toBe("00000000101010101101011100011010");
    expect(ops.constOperand.getStr()).toBe("00000000000000000000000000010110");
  })
})

// operate

describe("operate(): GOOD CASES", () => {
  test("4 bits: 0100 + 0110", () => {
    ops = new Operations(4, "+", "0100", "0110");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("1010")
  })
  test("4 bits: 1100 - 0110", () => {
    ops = new Operations(4, "\u2212", "0110", "1100");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0110")
  })
  test("4 bits: 0011 * 0111", () => {
    ops = new Operations(4, "\u00D7", "0011", "0100");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("1100");
  })
  test("4 bits: 1001 / 0011", () => {
    ops = new Operations(4, "\u00F7", "0011", "1001");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0011");
  })
  test("8 bits: 01010100 + 00100101", () => {
    ops = new Operations(8, "+", "01010100", "00100101");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("01111001");
  })
  test("8 bits: 01110110 - 00011100", () => {
    ops = new Operations(8, "\u2212", "00011100", "01110110");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("01011010");
  })
  test("8 bits: 00000110 * 00011000", () => {
    ops = new Operations(8, "\u00D7", "00000110", "00011000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("10010000");
  })
  test("8 bits: 10010000 / 00000011", () => {
    ops = new Operations(8, "\u00F7", "00000011", "10010000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("00110000");
  })
  test("16 bits: 0101010001010100 + 0010010100100101", () => {
    ops = new Operations(16, "+", "0101010001010100", "0010010100100101");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0111100101111001");
  })
  test("16 bits: 0111011001110110 - 0001110000011100", () => {
    ops = new Operations(16, "\u2212", "0001110000011100", "0111011001110110");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0101101001011010");
  })
  test("16 bits: 0000000110000110 * 0000000000011000", () => {
    ops = new Operations(16, "\u00D7", "0000000110000110", "0000000000011000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0010010010010000");
  })
  test("16 bits: 1001000010010000 / 0000001100000011", () => {
    ops = new Operations(16, "\u00F7", "0000001100000011", "1001000010010000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0000000000110000");
  })
  test("32 bits: 01010100010101000101010001010100 + 00100101001001010010010100100101", () => {
    ops = new Operations(32, "+", "01010100010101000101010001010100", "00100101001001010010010100100101");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("01111001011110010111100101111001");
  })
  test("32 bits: 01110110011101100111011001110110 - 00011100000111000001110000011100", () => {
    ops = new Operations(32, "\u2212", "00011100000111000001110000011100", "01110110011101100111011001110110");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("01011010010110100101101001011010");
  })
  test("32 bits: 00000000000110000000011000011010 * 00000000000000000000001100011000", () => {
    ops = new Operations(32, "\u00D7", "000000000001100000000110000110", "00000000000000000000001100011000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("00010010100101001011011010010000");
  })
  test("32 bits: 10010000100100001001000010010000 / 00000000000000000000001100000011", () => {
    ops = new Operations(32, "\u00F7", "00000000000000000000001100000011", "10010000100100001001000010010000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("00000000001100000000000000110000");
 })

})
 
 describe("operate(): Negative results (represented by 2s complement):", () => {
  test("4 bits: 0100 - 0110", () => {
    ops = new Operations(4, `\u2212`, "0110", "0100");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("1110");
  })
  test("8 bits: 00011100 - 01100100", () => {
    ops = new Operations(8, "\u2212", "01100100", "00011100");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("10111000");
  })
  test("16 bits: 0001000100100111 - 0100101001010011", () => {
    ops = new Operations(16, "\u2212", "0100101001010011", "0001000100100111");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("1100011011010100");
  })
  test("32 bits: 00001010000110100010111010111001 - 00110000111010011010001101001111", () => {
    ops = new Operations(32, "\u2212", "00110000111010011010001101001111", "00001010000110100010111010111001");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("11011001001100001000101101101010");
  })
 })

 describe("operate(): Truncated Results", () => {
  test("4 bits: 1100 + 0110", () => {
    ops = new Operations(4, "+", "1100", "0110");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0010")
  })
  test("8 bits: 00010100 * 00100101", () => {
    ops = new Operations(8, "\u00D7", "00010100", "00100101");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("11100100");
  })
  test("16 bits: 1101010001010100 + 0110010100100101", () => {
    ops = new Operations(16, "+", "1101010001010100", "0110010100100101");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0011100101111001");
  })
  test("32 bits: 00010100010101000101010001010100 * 00000101001001010010010100100101", () => {
    ops = new Operations(32, "\u00D7", "00010100010101000101010001010100", "01000101001001010010010100100101");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("11110100100001000101010001000000");
  })
})

 describe("Integer division:", () => {
  test("4 bits: 1000 / 0011", () => {
    ops = new Operations(4, "\u00F7", "0011", "1000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0010");
  })
  test("8 bits: 10000110 / 00010011", () => {
    ops = new Operations(8, "\u00F7", "00010011", "10000110");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("00000111");
  })
  test("16 bits: 1010111010101000 / 0000011111010011", () => {
    ops = new Operations(16, "\u00F7", "0000011111010011", "1010111010101000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("0000000000010110");
  })
  test("32 bits: 10001101001011110000101011001000 / 00000000000010110010110011000011", () => {
    ops = new Operations(32, "\u00F7", "00000000000010110010110011000011", "10001101001011110000101011001000");
    ops.operate();
    expect(ops.constOperand.getStr()).toBe("00000000000000000000110010100010");
  })
 })
