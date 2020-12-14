import { Calculator } from './components/Calculator.js';
import {
  CALCULATOR,
  SCREEN,
  BTN_EQUALS_CLASS,
  BTN_CLEAR_CLASS
} from './constants.js';

const calculator = new Calculator(SCREEN);

const calculatorClickHandler = e => {
  if (e.target.classList.contains(BTN_CLEAR_CLASS)) calculator.clearScreen();
  else if (e.target.classList.contains(BTN_EQUALS_CLASS))
    calculator.calculate();
  else calculator.print(e.target.innerText);
};

//Event delegation
CALCULATOR.addEventListener('click', calculatorClickHandler);
