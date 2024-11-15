const apiUrl = "https://api.weatherstack.com/current?";
let urlParams = {
  // query: currentLocations[locationPosition],
  access_key: "31c2be1ceacb391cc162ad3af2b216c9",
  };

// const paramsString = "https://api.weatherstack.com/current?"
// const searchParams = new URLSearchParams(paramsString);

const locSel = document.getElementById("loc-sel");
const barColors = ["rgba(253, 176, 48, 1.0)", "rgba(253, 176, 48, 1.0)", "rgba(253, 176, 48, 1.0)",];
const borderColors = ["rgba(255, 255, 255, 1.0)",];
const textColors = ["rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)", "rgba(255, 255, 255, 1.0)",]

let currentLocations = ["Norwich","blank", "blank"];
let cloudCoverData = [0, 0, 0];
let BrightnessData = [0, 0, 0];
let TemperatureData = [0, 0, 0];

let locationPosition = 0;





async function fetchData() {
  try {
    if ('URLSearchParams' in window) {
      const url = new URL(window.location)
      url.searchParams.set("", 'query: "Norwich"')
      history.pushState(null, '', url);
    }
    const response = await fetch(apiUrl + new URLSearchParams(urlParams));
    
    if (!response.ok) {
      throw new Error("Response Status: ", response.status);}
    

    const json = await response.json();
    // query: "Norwich",

    updateCloudCover(json.current.cloudcover);
    updateBrightness(json.current.uv_index);
    updateTemperature(json.current.feelslike);
  } catch (error) {
    console.error(error);
  } finally {
    locationPosition = locationPosition + 1;
    if (locationPosition > 2) {
        locationPosition = 0;
      }
    }
  }
  


function updateCloudCover(newValue) {
   cloudCoverData[locationPosition].value.innerHTML = newValue;
}

function updateBrightness(newValue) {
  BrightnessData[locationPosition].value.innerHTML = newValue;
}

function updateTemperature(newValue) {
  TemperatureData[locationPosition].value.innerHTML = newValue;
}


const cloChart = new Chart("cloudCover", {
  type: "bar",
  data: {
    labels: currentLocations,
    datasets: [{
      backgroundColor: barColors,
      data: cloudCoverData,
    }]
  },
  options: {
    legend: {
       display: false
    },
    tooltips: {
       enabled: false
    }
  },
  scales: {
    y: {
        beginAtZero: true
    }
}
});

const uvChart = new Chart("uvIndex", {
  type: "bar",
  data: {
    labels: currentLocations,
    datasets: [{
      backgroundColor: barColors,
      data: BrightnessData,
    }]
  },
  options: {
    legend: {
       display: false
    },
    tooltips: {
       enabled: false
    }
  },
  scales: {
    y: {
       beginAtZero: true
    }
  },
});

const tempChart = new Chart("feelsLike", {
  type: "bar",
  data: {
    labels: currentLocations,
    datasets: [{
      backgroundColor: barColors,
      data: TemperatureData,
    }]
  },
  options: {
    legend: {
       display: false
    },
    tooltips: {
       enabled: false
    },
    scales: {
      x: {
      enabled: false
      }
    },
  }
  });

setInterval(fetchData, 500);




































































