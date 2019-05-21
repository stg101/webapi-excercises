var promise = new Promise(function(fulfill, reject) {
  setTimeout(fulfill, 300);
});

promise.then(() => console.log("FULFILLED!"));
