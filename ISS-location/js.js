let url = "https://api.wheretheiss.at/v1/satellites/25544"; //API addresse
const issLat = document.getElementById("iss-lat");
const issLong = document.getElementById("iss-long");
const time = document.getElementById("time");
//mapLeaf
let issMarker;

let map = L.map("iss-map").setView([0, 0], 1); //center and zoom out
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 7,
  id: "mapbox.streets",
  accessToken:
    "pk.eyJ1Ijoic2FpZGEyNSIsImEiOiJja2xuem4wdnUwbzBsMndwNGNyNWxwY2wwIn0.5fLWNX8N2uwiKwyjY_4vog",
}).addTo(map);

let max_attempt = 3;
// call function
iss(max_attempt);
//Fetch api data
function iss(attempt) {
  if (attempt <= 0) {
    //max attempt to fetch an api
    console.log("Too many error, Request failed to get ISS position");
    return; // program stops
  }
  //Fetch api data

  fetch(url)
    .then((res) => res.json()) //recive in JSON format
    .then((data) => {
      console.log(data);
      //get latitude and latitude
      let lat = data.latitude;
      let long = data.longitude;
      var myIcon = L.icon({
        iconUrl: "iss_icon.png",
        iconSize: [50, 50],
        iconAnchor: [25, 25], //relative to marker map
      });

      //display in browser
      issLat.innerHTML = lat;
      issLong.innerHTML = long;

      //Verify

      if (!issMarker) {
        issMarker = L.marker([lat, long], { icon: myIcon }).addTo(map);
      } else {
        issMarker.setLatLng([lat, long]);
      }
      //date Update
      let date = Date();
      time.innerHTML = `At ${date} the ISS is over the following coordinates:`;
    })
    .catch((error) => {
      attempt--; //keeps count of amount of times attempted to fetch and failed. Max is 3.
      console.log(error);
    })
    .finally(() => {
      //runs whether fetch succeeded or failed
      setTimeout(iss, 10000, attempt); //request every 10 second //recursion
    });
}
