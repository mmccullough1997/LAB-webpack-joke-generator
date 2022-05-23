import renderToDOM from '../helpers/renderToDom';

const formOnDom = () => {
  const htmlOnDom = `
  <div class="a">
    <p> <u><em>Joke Generator</em></u> </p>
    <button type="button" class="btn btn-secondary" id="button">GET A JOKE</button>
    <p id="setup"></p>
    <div id="setupBtn"></div>
    <p id="punchline"></p>
  </div>
  `;
  renderToDOM('#app', htmlOnDom);
};

export default formOnDom;
