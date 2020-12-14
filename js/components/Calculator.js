/**
 * @module Calculator
 */

/**
 * @class
 * @description Calculator
 *
 * @property {Object} _screen       DOM node of calculator's screen.
 * @property {Number} _screenValue  Current value shown on screen.
 * @property {Array}  _history      List of results of calculations.
 */
class Calculator {
  /**
   * @constructor
   * @description Creates a new Calculator.
   *
   * @param {Object} screen Dom node of calculator's screen.
   */
  constructor() {
    this._history = [];
  }

  /**
   * @description Adds calculation to history.
   *
   * @param {String} Calculation to be added.
   */
  addToHistory(val) {
    this._history.push(val);
  }

  /**
   * @description Returns calculation history.
   */
  get getHistory() {
    return this._history;
  }

  /**
   * @description Clears calculator history
   */
  clearHistory() {
    this._history = [];
  }

  /**
   * @description Performs calculation.
   */
  calculateResult(expression) {
    return eval(expression);
  }
}

export { Calculator };
