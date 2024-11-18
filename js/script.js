const apiUrl = "assets/data/test.json";
// const apiUrl = "https://api.weatherstack.com/current?";
const urlParams = {
    // query: "Norwich",
    // access_key: "55965b5a3d1a104583667bfeed40aea8",
};

const barColors = ["rgba(174, 32, 114, 1.0)", "rgba(248, 44, 4, 1.0)", "rgba(231, 234, 143, 1.0)",];
const textColors = ["rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)",]

const currentLocations = ["Norwich", "Denpasar", "Reykjavík"];
const cloudCoverData = [0, 37, 64];
const BrightnessData = [0, 6, 2];
const TemperatureData = [0, 35, 7];

const norSun = document.getElementById("nSun");
const denSun = document.getElementById("dSun");
const reySun = document.getElementById("rSun");


async function fetchData() {
  try {
    //get response from api
    // const response = await fetch(apiUrl);
    const response = await fetch(apiUrl + new URLSearchParams(urlParams));


    if (!response.ok) {
      throw new Error("Response Status: ", response.status);
    }

    const json = await response.json();

    updateCloudCover(json.current.cloudcover);
    updateBrightness(json.current.uv_index);
    updateTemperature(json.current.feelslike);
  } catch (error) {
    console.error(error);
  }
}

function updateCloudCover(newValue) {
  cloudCoverData[0] = newValue;
  console.log(cloudCoverData[0])
  console.log(cloudCoverData[1])
  console.log(cloudCoverData[2])
  updateCloudChart();
}

function updateBrightness(newValue) {
  BrightnessData[0] = newValue;
  console.log(BrightnessData[0])
  console.log(BrightnessData[1])
  console.log(BrightnessData[2])
  updateBrightnessChart();
}

function updateTemperature(newValue) {
  TemperatureData[0] = newValue;
  console.log(TemperatureData[0])
  console.log(TemperatureData[1])
  console.log(TemperatureData[2])
  updateTemperatureChart();
}



setInterval(fetchData, 500);

