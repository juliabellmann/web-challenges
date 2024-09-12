'use strict';

console.clear();

const bodyElement = document.querySelector('[data-js="body"]');


// Select all buttons with the 'data-js' attribute
const buttons = document.querySelectorAll('[data-js]');

// Function to handle dark mode
function setDarkMode(isDark) {
  const body = document.querySelector('[data-js="body"]');
  if (isDark) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.querySelector('[data-js="body"]');
  body.classList.toggle('dark');
}

// Add event listeners to each button
buttons.forEach(button => {
  switch (button.dataset.js) {
    case 'dark-mode-button':
      button.addEventListener('click', () => setDarkMode(true));
      break;
    case 'light-mode-button':
      button.addEventListener('click', () => setDarkMode(false));
      break;
    case 'toggle-button':
      button.addEventListener('click', toggleDarkMode);
      break;
  }
});
