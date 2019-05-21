let promise = new Promise(function(fulfill, reject) {
  fulfill("I FIRED");
  reject(new Error("I DID NOT FIRE"));
});

function onReject(error) {
  console.log(error.message);
}

function onFulfill(message) {
  console.log(message);
}

promise.then(onFulfill, onReject);
