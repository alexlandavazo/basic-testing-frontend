import { describe, expect, it } from 'vitest';
import {cleanNumbers, transformToNumber} from './numbers'

describe('transformToNumber()', () => { 
  it('should yield a number when a string is passed into parameters', () => {
    const stringNumber = '100';

    const result = transformToNumber(stringNumber)

    expect(result).toBeTypeOf('number');
  });

  it('should yield NaN when a string invalid is passed into the parameters', () => {
    const invalidString = 'Invalid';
    
    const result = transformToNumber(invalidString);

    expect(result).toBeNaN()
  })
})

describe('cleanNumbers()', () => {
  it('shoul return an array of number values if an array of string number value is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers =cleanNumbers(numberValues)
    
    expect(cleanedNumbers[0]).toBeTypeOf('number')
  })

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', '2'];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow()
  })


})