import { describe, it, expect } from "vitest";
import { generateResultText } from "./output";

describe('generateResultText()', () => { 
  it('should return a string, no matter which value is passed in', () => {
    const val1 = 1;
    const val2 = 2;
    const val3 = false;
    
    const result1 = generateResultText(val1)
    const result2 = generateResultText(val2)
    const result3 = generateResultText(val3)

    expect(result1).toBeTypeOf('string')
    expect(result2).toBeTypeOf('string')
    expect(result3).toBeTypeOf('string')
  })

  it('should return the string of the number passed as parameter', () => {
    const value = 5;

    const result = generateResultText(value);

    expect(result).toContain('5');
  })

  it('should return invalid input when the number passed is invalid', () => {
    const value =  'invalid';
    
    const result = generateResultText(value);

    expect(result).toContain('Invalid input')
  })

  it('should return an empty string when no-calc is passed as parameter', () => {
    const value = 'no-calc';

    const result = generateResultText(value)

    expect(result).toBe('')
  })

 })