function updateDOM(elementId, data) {
  let $quote = document.querySelector(`#${elementId} .quote`);
  let $character = document.querySelector(`#${elementId} .character`);
  $quote.innerText = data.quote;
  $character.innerText = data.character;
}

function conversion(data) {
  updateDOM("api", data);

  if (localStorage.getItem("lastIndex") == null) {
    localStorage.setItem("lastIndex", "1");
    localStorage.setItem("0", JSON.stringify(data));
  } else {
    let index = localStorage.getItem("lastIndex");
    localStorage.setItem(index, JSON.stringify(data));

    index = +index > 9 ? "0" : (1 + +index).toString();
    localStorage.setItem("lastIndex", index);
  }
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
