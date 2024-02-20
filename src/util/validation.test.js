import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation.js";

describe('validateStringNotEmpty()', () => {
  it('should not throw an error when the string is not empty', () => {
    const input = 'test';

    const resultFn = () =>  validateStringNotEmpty(input);

    expect(resultFn).not.toThrow()
  });

  it('should throw an error when the string is empty', () => {
    const input = '';

    const resultFn = () => validateStringNotEmpty(input)

    expect(resultFn).toThrow()
  })

  it('should throw an error when the string is not type string ', () => {
    const input1 = {};
    const input2 = 1;

    const resultFn1 = () => validateStringNotEmpty(input1)
    const resultFn2 = () => validateStringNotEmpty(input2)

    expect(resultFn1).toThrow()
    expect(resultFn2).toThrow()
  })
});

describe('validateNumber()', () => {

  it('should not throw an error when a number is passed in the parameters', () => {
    const input = 10;

    const resultFn = () =>  validateNumber(input)

    expect(resultFn).not.toThrow()
  })

  it('should throw an error when another type beside of number is passed in the parameters', () => {
    const input = {};

    const resultFn = () => validateNumber(input)

    expect(resultFn).toThrow();
    
  })

  it('should throw an error when a number in a string is passed in the parameters', () => {
    const input = "1";

    const resultFn = () => validateNumber(input);

    expect(resultFn).toThrow()
  })
})