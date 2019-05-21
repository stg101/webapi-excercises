function updateDOM(elementId, data) {
  let $quote = document.querySelector(`#${elementId} .quote`);
  let $character = document.querySelector(`#${elementId} .character`);
  $quote.innerText = data.quote;
  $character.innerText = data.character;
}

function conversion(data) {
  updateDOM("api", data);
  localStorage.setItem("dataStorage", JSON.stringify(data));
}

function showStorage() {
  if (localStorage.length > 0) {
    let dataStorage = localStorage.getItem("dataStorage");
    dataStorage = JSON.parse(dataStorage);
    updateDOM("storage", dataStorage);
  }
}

let promise = fetch("https://got-quotes.herokuapp.com/quotes");
promise.then(response => response.json()).then(data => conversion(data));

showStorage();
