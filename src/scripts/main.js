// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

// import '@fortawesome/fontawesome-free/js/all'; CAN'T GET TO IMPORT FONT AWESOME
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from '../api/jokeData';
import formOnDom from './components/formOnDom';
import getSetup from './helpers/getSetup';
import getPunchline from './helpers/getPunchline';

const init = () => {
  jokeData().then(console.warn);
  formOnDom();
  getSetup();
  getPunchline();
};

init();
