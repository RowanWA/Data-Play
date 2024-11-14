// const apiUrl = "https://api.weatherstack.com/current?";
// let urlParams = {
//   query: currentLocations[locationPosition],
//   access_key: "31c2be1ceacb391cc162ad3af2b216c9",
// };

const locSel = document.getElementById("loc-sel");
const barColors = ["rgba(253, 176, 48, 1.0)",];
const borderColors = ["rgba(255, 255, 255, 1.0)",];

let currentLocations = ["&nbsp","&nbsp", "&nbsp"];
let cloudCoverData = [0, 0, 0];
let BrightnessData = [0, 0, 0];
let TemperatureData = [0, 0, 0];

// let locationPosition = 0;

// async function fetchData() {
//   try {

//     const response = await fetch(apiUrl + new URLSearchParams(urlParams));

//     if (!response.ok) {
//       throw new Error("Response Status: ", response.status);
//     }


//     const json = await response.json();
//     query: "Norwich",

//     udpateCloudCover(json.current.cloudcover);
//     updateBrightness(json.current.uv_index);
//     updateTemperature(json.current.feelslike);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     locationPosition = locationPosition + 1;
//     if (locationPosition > 2) {
//         locationPosition = 0;
//       }
//   }

// }

// function udpateCloudCover(newValue) {
//    cloudCoverData[locationPosition].value.innerHTML = newValue;
// }

// function udpateBrightness(newValue) {
//   BrightnessData[locationPosition].value.innerHTML = newValue;
// }

// function udpateTemperature(newValue) {
//   TemperatureData[locationPosition].value.innerHTML = newValue;
// }



const cloChart = new Chart("cloudCover", {
  type: "bar",
  data: {
    labels: currentLocations,
    datasets: [{
      backgroundColor: barColors,
      data: cloudCoverData,
      borderColor: borderColors,
    }]
  },
  options: {
    color: "rgb(253, 176, 48)",
  }
});

const uvChart = new Chart("uvIndex", {
  type: "bar",
  data: {
    labels: currentLocations,
    datasets: [{
      backgroundColor: barColors,
      data: cloudCoverData,
      borderColor: borderColors,
    }]
  },
  options: {
    color: "rgb(253, 176, 48)",
  }
});

const tempChart = new Chart("feelsLike", {
  type: "bar",
  data: {
    labels: currentLocations,
    datasets: [{
      backgroundColor: barColors,
      data: cloudCoverData,
      borderColor: borderColors,
    }]
  },
  options: {
    color: "rgb(253, 176, 48)",
  }
});










































































// const humiditySlider = document.getElementById("humidity-slider");
// const windSlider = document.getElementById("wind-slider");
// const temperatureSlider = document.getElementById("temperature-slider");

// const temperatureValue = document.getElementById("temperature-value");
// const humidityValue = document.getElementById("humidity-value");
// const windValue = document.getElementById("wind-value");

// const leafAnimations = document.getElementsByClassName("leaf");

// const humidityFilter = document.getElementById("humidity-filter");

// async function fetchData() {
//   try {

//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error("Response Status: ", response.status);
//     }

//     const json = await response.json();

//     udpateHumidity(json.current.humidity);
//     updateWind(json.current.wind_speed);
//     updateTemperature(json.current.temperature);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function udpateHumidity(newValue) {
  
//   humiditySlider.value = newValue;
//   humidityValue.innerHTML = newValue;

//   humidityFilter.style.opacity = (0.5 * Number(newValue)) / 100;
// }

// function updateWind(newValue) {
//   windSlider.value = newValue;
//   windValue.innerHTML = newValue;

//   let newDuration = ((408 - Number(newValue)) * 11) / 408 + 1;
//   if(newDuration < 0.1) newDuration = 0.1;

//   for (const leaf of leafAnimations) {
//     leaf.style.animationDuration = newDuration + "s";
//   }
// }

// function updateTemperature(newValue) {
//   temperatureSlider.value = newValue;
//   temperatureValue.innerHTML = newValue;
// }

// setInterval(fetchData, 500);