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

function switchTheme(theme) { 
  refs.body.removeAttribute('class');
  refs.body.classList.add(theme);
}

if (userTheme) { 
  switchTheme(Theme[userTheme]);
  if (userTheme === 'DARK') {
    refs.switcher.checked = true;
  }
}

function onSwitcherChange(event){
  if (event.currentTarget.checked) {
    switchTheme(Theme['DARK']);
    localStorage.setItem('Theme', 'DARK');
  }
  else {
    switchTheme(Theme['LIGHT']);
    localStorage.setItem('Theme', 'LIGHT');
  }
}

refs.switcher.addEventListener('change', onSwitcherChange);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);
