const renderToDOM = (id, htmlToPrint) => {
  const selectedDiv = document.querySelector(id);
  selectedDiv.innerHTML = htmlToPrint;
};

export default renderToDOM;
