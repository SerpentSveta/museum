import './styles/main.scss';

import { openBurgerMenu } from '/js/burger';
import { slider } from './js/slider';

document.addEventListener('DOMContentLoaded', () => {
  openBurgerMenu();
  slider();
});
