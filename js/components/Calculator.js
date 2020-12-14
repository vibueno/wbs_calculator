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
  constructor(screen) {
    this._screen = screen;
    this._screenValue = '';
    this._history = [];
  }

  /**
   * @description Gets calculator's screen value.
   */
  get screenValue() {
    return this._screenValue;
  }

  /**
   * @description Adds val to value on screen.
   *
   * @param Value to be added to calculator's screen.
   */
  addToScreenValue(val) {
    const lastNumEntered = this.screenValue.slice(this.screenValue.length - 1);

    /*If the value entered is a dot, we should only added
      if the number is not a float already and the last entered
        value is a number*/
    if (val === '.') {
      if (!this.screenValue.includes('.') && !isNaN(lastNumEntered)) {
        this._screenValue += val;
      }
    } else {
      this._screenValue += val;
    }
    this.print();
  }

  /**
   * @description Returns calculation history.
   */
  get getHistory() {
    return this._history;
  }

  /**
   * @description Prints value on calculator's sreen.
   */
  print() {
    this._screen.innerHTML = this.screenValue;
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
   * @description Clears calculator's screen.
   */
  clearScreen() {
    this._screenValue = '';
    this._screen.innerHTML = '';
  }

  /**
   * @description Performs calculation.
   */
  calculate() {
    const result = eval(this._screen.innerHTML.replace('x', '*'));
    this.clearScreen();
    this.addToScreenValue(result);
    this.addToHistory(result);
  }
}

export { Calculator };
