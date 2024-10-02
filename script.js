import './style.css';

console.log('это моя машина!');

const content = document.querySelector('#content');
const header = document.createElement('header');
const welcomeDiv = document.createElement('div');
welcomeDiv.classList.add('header-welcome');
const menuDiv = document.createElement('div');
menuDiv.classList.add('header-menu');
const profileDiv = document.createElement('div');
profileDiv.classList.add('header-profile');