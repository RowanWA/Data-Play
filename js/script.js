// contains example data in a json file
    const apiUrl = "assets/data/test.json";

// contains link to live data source
    // const apiUrl = "https://api.weatherstack.com/current?";

// contains query and access key required for use when running from live data source
const urlParams = {
    // query: "Norwich",
    // access_key: "55965b5a3d1a104583667bfeed40aea8",
};

// defines colours for the text and bars for the bar charts
const barColors = ["rgba(174, 32, 114, 1.0)", "rgba(248, 44, 4, 1.0)", "rgba(231, 234, 143, 1.0)",];
const textColors = ["rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)",]

// defines the locations that are being displayed
const currentLocations = ["Norwich", "Denpasar", "Reykjavík"];
// creates arrays for each of the data types
const cloudCoverData = [0, 37, 64];
const BrightnessData = [0, 6, 2];
const TemperatureData = [0, 35, 7];

// defines constants to allow to editing of the place holder sun images
const norSun = document.getElementById("nSun");
const denSun = document.getElementById("dSun");
const reySun = document.getElementById("rSun");

// fetches data from API and triggers updates the chart data
async function fetchData() {
  try {
    const response = await fetch(apiUrl + new URLSearchParams(urlParams));

    // creates error if something has gone wrong
    if (!response.ok) {
      throw new Error("Response Status: ", response.status);
    }
    const json = await response.json();
    // updates data values
    updateCloudCover(json.current.cloudcover);
    updateBrightness(json.current.uv_index);
    updateTemperature(json.current.feelslike);
  } catch (error) {
    console.error(error);
  }
}

// updates the cloud cover value
function updateCloudCover(newValue) {
  cloudCoverData[0] = newValue;
  updateCloudChart();
}

// updates the brightness value
function updateBrightness(newValue) {
  BrightnessData[0] = newValue;
  updateBrightnessChart();
}

// updates the temperature value
function updateTemperature(newValue) {
  TemperatureData[0] = newValue;
  updateTemperatureChart();
}


// constantly triggers the fetchData function every 0.5 seconds
// setInterval(fetchData, 500);

