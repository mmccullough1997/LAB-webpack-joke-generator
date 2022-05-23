import getJoke from '../../api/jokeData';
import renderToDOM from './renderToDom';

const getPunchline = () => {
  const setup = document.querySelector('#setupBtn');
  setup.addEventListener('click', (event) => {
    if (event.target.id) {
      console.warn('clicked setup');
      getJoke().then((response) => {
        renderToDOM('#punchline', response.delivery);
      });
    }
  });
};

export default getPunchline;
