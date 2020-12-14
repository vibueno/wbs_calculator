import { Calculator } from './components/Calculator.js';
import {
  CALCULATOR,
  SCREEN,
  BTN_EQUALS_CLASS,
  BTN_CLEAR_CLASS
} from './constants.js';

import { functions } from './functions.js';

const calculator = new Calculator();

const calculatorClickHandler = e => {
  if (e.target.tagName.toLowerCase() === 'span') {
    const button = e.target;
    const value = e.target.innerText;

    //Button clear
    if (button.classList.contains(BTN_CLEAR_CLASS)) {
      functions.clearScreen();
      calculator.clearHistory();
    }
    //Button equals
    else if (button.classList.contains(BTN_EQUALS_CLASS)) {
      let expression = SCREEN.innerText.replace('x', '*');

      //deletes leading 0's of left operand of 1st operation on screen
      expression = expression.replace(/^0+([^.])/g, '$1');
      //deletes leading 0's of operand after operator
      expression = expression.replace(/([\+\-\*\/])0+([^.])/g, '$1$2');

      const result = calculator.calculateResult(expression).toString();
      if (typeof result != 'undefined') {
        calculator.addToHistory(SCREEN.innerText);
        calculator.addToHistory(result);
        functions.clearScreen();
        functions.printScreen(result);
      }
      //All other buttons
    } else functions.printScreen(value);
  }
};

//Event delegation
CALCULATOR.addEventListener('click', calculatorClickHandler);
