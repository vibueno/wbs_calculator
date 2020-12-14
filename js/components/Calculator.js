/**
 * @module Calculator
 */

/**
 * @class
 * @description Calculator
 *
 * @property {Object} _screen  DOM node of calculator's screen.
 * @property {Array}  _history list of results of calculations.
 */
class Calculator {
  /**
   * @constructor
   * @description Creates a new Calculator.
   *
   * @param {Object} screen Dom node of calculator's screen.
   */
  constructor(screen) {
    this._screen = screen;
    this._history = [];
  }

  /**
   * @description Prints value on calculator's sreen.
   *
   * @param {String} val Value to be printed.
   */
  print(val) {
    this._screen.innerHTML += val;
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
   * @description Clears calculator's screen.
   */
  clearScreen() {
    this._screen.innerHTML = '';
  }

  /**
   * @description Performs calculation.
   */
  calculate() {
    const result = eval(this._screen.innerHTML.replace('x', '*'));
    this._screen.innerHTML = result;
    this.addToHistory(result);
  }
}

export { Calculator };
