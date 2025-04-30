import {BinaryNumber}   from "../modules/BinaryNumber.js";
import {describe, test, expect, beforeAll} from "@jest/globals";

let num;
beforeAll(() => {
    num = new BinaryNumber("");
})

describe("binaryToUnsignedNumber", () => {
    test("0110", () => {
        num.setStr("0110");
        expect(num.binaryToUnsignedNumber()).toBe(6);
    })
    test("1100", () => {
        num.setStr("1100");
        expect(num.binaryToUnsignedNumber()).toBe(12);
    })  
    test("10011001", () => {
        num.setStr("10011001");
        expect(num.binaryToUnsignedNumber()).toBe(153);
    })  
    test("01100011", () => {
        num.setStr("01100011");
        expect(num.binaryToUnsignedNumber()).toBe(99);
    })
    test("0110011001100110", () => {
        num.setStr("0110011001100110");
        expect(num.binaryToUnsignedNumber()).toBe(26214);
    })
    test("1100110011001100", () => {
        num.setStr("1100110011001100");
        expect(num.binaryToUnsignedNumber()).toBe(52428);
    })
    test("01100110011001100110011001100110", () => {
        num.setStr("01100110011001100110011001100110");
        expect(num.binaryToUnsignedNumber()).toBe(1717986918);
    })
    test("11001100110011001100110011001100", () => {
        num.setStr("11001100110011001100110011001100");
        expect(num.binaryToUnsignedNumber()).toBe(3435973836);
    })
})

describe("binarySignedNumber", () => {
    test("0110", () => {
        num.setStr("0110");
        expect(num.binaryToSignedNumber(4)).toBe(6);
    })
    test("1100", () => {
        num.setStr("1100");
        expect(num.binaryToSignedNumber(4)).toBe(-4);
    })  
    test("10011001", () => {
        num.setStr("10011001");
        expect(num.binaryToSignedNumber(8)).toBe(-103);
    })  
    test("01100011", () => {
        num.setStr("01100011");
        expect(num.binaryToSignedNumber(8)).toBe(99);
    })
    test("0110011001100110", () => {
        num.setStr("0110011001100110");
        expect(num.binaryToSignedNumber(16)).toBe(26214);
    })
    test("1100110011001100", () => {
        num.setStr("1100110011001100");
        expect(num.binaryToSignedNumber(16)).toBe(-13108);
    })
    test("01100110011001100110011001100110", () => {
        num.setStr("01100110011001100110011001100110");
        expect(num.binaryToSignedNumber(32)).toBe(1717986918);
    })
    test("11001100110011001100110011001100", () => {
        num.setStr("11001100110011001100110011001100");
        expect(num.binaryToSignedNumber(32)).toBe(-858993460);
    })
})