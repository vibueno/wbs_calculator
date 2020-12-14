/**
 * @module functions
 */

import { SCREEN } from './constants.js';

const functions = {
  /**
   * @description Prints value on calculator's sreen.
   *
   * @param val Value to be added to the string shown on screen.
   */
  printScreen: val => {
    //when the value is a dot, we need to check whether it should be printed
    if (val === '.') {
      const lastChar = SCREEN.innerHTML.slice(SCREEN.innerHTML.length - 1);

      if (!SCREEN.innerHTML.includes('.') && !isNaN(lastChar)) {
        SCREEN.innerHTML += val;
      }
    } else {
      SCREEN.innerHTML += val;
    }
  },

  /**
   * @description Clears calculator's screen.
   */
  clearScreen: () => {
    SCREEN.innerHTML = '';
  }
};

export { functions };
