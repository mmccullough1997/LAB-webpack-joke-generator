import renderToDOM from './renderToDom';
import getJoke from '../../api/jokeData';

const getSetup = () => {
  document.querySelector('#button').addEventListener('click', (event) => {
    if (event.target.id) {
      console.warn('clicked get joke');
      renderToDOM('#punchline', '');
      getJoke().then((response) => {
        renderToDOM('#setup', response.setup);
        const setupButton = () => {
          const htmlOnDom = '<button type="button" class="btn btn-secondary" id="setupButton">GET A SETUP</button>';
          renderToDOM('#setupBtn', htmlOnDom);
        };
        setupButton();
      });
    }
  });
};

export default getSetup;
