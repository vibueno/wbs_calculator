import { CALCULATOR, SCREEN, BTN_EQUALS, BTN_CLEAR } from './constants.js';

CALCULATOR.addEventListener('click', e => print(e.target.innerText));

BTN_CLEAR.addEventListener('click', () => (SCREEN.innerHTML = ''));
