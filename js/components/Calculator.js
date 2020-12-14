/**
 * @module Calculator
 */

/**
 * @class
 * @description Calculator
 *
 * @property {Array}  _history  List of results of calculations.
 */
class Calculator {
  /**
   * @constructor
   * @description Creates a new Calculator.
   */
  constructor() {
    this._history = [];
  }

  /**
   * @description Adds value to history.
   *
   * @param {String} Value to be added.
   */
  addToHistory(val) {
    this._history.push(val);
  }

  /**
   * @description Returns calculator history.
   */
  get getHistory() {
    return this._history;
  }

  /**
   * @description Clears calculator history.
   */
  clearHistory() {
    this._history = [];
  }

  /**
   * @description Performs calculation.
   */
  calculate(expression) {
    return eval(expression);
  }
}

export { Calculator };
