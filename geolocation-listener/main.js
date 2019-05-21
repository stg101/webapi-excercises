const RUNNING_SPEED = 1.4;

function updateDOM(elementId, data) {
  let $latitude = document.querySelector(`#${elementId} .latitude`);
  let $longitude = document.querySelector(`#${elementId} .longitude`);
  $latitude.innerText = data.latitude;
  $longitude.innerText = data.longitude;
}

const watchID = navigator.geolocation.watchPosition(position => {
  updateDOM("location", position.coords);

  if (position.coords.speed > RUNNING_SPEED) {
    const notification = new Notification("Codeable", {
      body: "Muy rapido 🏃‍♀️"
    });
  }
});

const status = Notification.requestPermission();

document.addEventListener("visibilitychange", event => {
  if (document.hidden) {
    new Notification("Geolocator", {
      body: "Stop watching for locations"
    });
    navigator.geolocation.clearWatch(watchID);
  } else {
    console.log("Page is visible");
  }
});
