// const apiUrl = 
const apiUrl = "https://earthquake.usgs.gov/fdsnws/event/1/application.json";

query: "minlatitude"
query: "maxlatitude"

earthquakeCount

let img = new Image(1,1);
img.src = 'http://www.testtrackinglink.com';






setInterval(fetchData, 500);

async function fetchData() {
  try {
    //get response from api
    const response = await fetch(apiUrl);
    // const response = await fetch(apiUrl + new URLSearchParams(urlParams));

    //check response is ok
    if (!response.ok) {
      throw new Error("Response Status: ", response.status);
    }

    //obtain json
    const json = await response.json();

    //update functions
    udpateHumidity(json.current.humidity);
    updateWind(json.current.wind_speed);
    updateTemperature(json.current.temperature);
  } catch (error) {
    console.error(error);
  }
}

function udpateHumidity(newValue) {
  
  humiditySlider.value = newValue;
  humidityValue.innerHTML = newValue;

  humidityFilter.style.opacity = (0.5 * Number(newValue)) / 100;
}

function updateWind(newValue) {
  windSlider.value = newValue;
  windValue.innerHTML = newValue;

  let newDuration = ((408 - Number(newValue)) * 11) / 408 + 1;
  if(newDuration < 0.1) newDuration = 0.1;

  for (const leaf of leafAnimations) {
    leaf.style.animationDuration = newDuration + "s";
  }
}

function updateTemperature(newValue) {
  temperatureSlider.value = newValue;
  temperatureValue.innerHTML = newValue;
}


