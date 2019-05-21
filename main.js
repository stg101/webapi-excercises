let promise = fetch("https://got-quotes.herokuapp.com/quotes");
promise.then(response => response.json()).then(data => console.log(data));

// .then(function(data) {
//   let $content = document.getElementById("content");
//   $content.innerText = data;
// });
