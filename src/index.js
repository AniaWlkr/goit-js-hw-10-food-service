import './styles.css';
import menu from './menu.json'; 
import menuItemsTemplate from './templates/menu-items.hbs';

const menuMarkup = menuItemsTemplate(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switcher: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
  menuList: document.querySelector('.js-menu'),
}

const userTheme = localStorage.getItem('Theme');

function addTheme(theme) { 
  // refs.body.removeAttribute('class'); //удалит все классы
  refs.body.classList.add(theme);
}

function switchTheme() {
  if (refs.body.classList.contains(Theme['LIGHT'])) {
    refs.body.classList.replace(Theme['LIGHT'], Theme['DARK']);
  }
  else {
    refs.body.classList.replace(Theme['DARK'], Theme['LIGHT']);
  }
}

if (userTheme) { 
  addTheme(Theme[userTheme]);
  if (userTheme === 'DARK') {
    refs.switcher.checked = true;
  }
}

function onSwitcherChange(event) {
  switchTheme();
  if (event.currentTarget.checked) {
    localStorage.setItem('Theme', 'DARK');
  }
  else {
    localStorage.setItem('Theme', 'LIGHT');
  }
}

refs.switcher.addEventListener('change', onSwitcherChange);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);
