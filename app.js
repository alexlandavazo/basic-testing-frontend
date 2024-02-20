import { extractEnteredNumberValues } from './src/parser.js';
import {  calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractEnteredNumberValues(form);

  const result = calculateResult(numberInputs)
  const output = generateResultText(result)
  
  outputResult(output)
}

form.addEventListener('submit', formSubmitHandler);
