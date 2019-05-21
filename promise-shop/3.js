var promise = new Promise(function(fulfill, reject) {
  setTimeout(() => {
    reject(new Error("REJECTED!"));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

function onFulfill() {
  console.log("FULFILLED!");
}

promise.then(onFulfill, onReject);
