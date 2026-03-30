function updatetime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America / Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

function newLocation(event) {
  let locationTimeZone = event.target.value;
  if (locationTimeZone === "current") {
    locationTimeZone = moment.tz.guess();
  }
  let locationName = locationTimeZone.replace("_", " ").split("/")[1];
  let locationTime = moment().tz(locationTimeZone);
  let locationSelectElement = document.querySelector("#city-change");
  locationSelectElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${locationName}</h2>
            <div class="date">${locationTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${locationTime.format("h:mm:ss")} <small>${locationTime.format("A")}</small></div>
        </div>
        <a href="/">Back to home page</a>
  `;
}

updatetime();
setInterval(updatetime, 1000);

let locationElement = document.querySelector("#location");
locationElement.addEventListener("change", newLocation);
