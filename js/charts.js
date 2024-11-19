// sets constants to allow for display of data for uv index
const NorUV = document.getElementById("nUV");
const DenUV = document.getElementById("dUV");
const ReyUV = document.getElementById("rUV");

// sets different global defaults for all the charts
Chart.defaults.global.defaultFontColor = "#fdb030";
Chart.defaults.global.defaultFontStyle = "bold";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.animation.duration = 0;

// updates the cloud cover bar graph based on the live data and sets options and type for the format for the graph
function updateCloudChart() {
    let cloChart = new Chart("cloudCover", {
        type: "bar",
        data: {
            labels: currentLocations,
            datasets: [{
                backgroundColor: barColors,
                data: cloudCoverData,
                minBarLength: 1,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                    }
                }]
            }
        }
    });
}

// changes the image of the sun that is displayed depending on the Brightness data and triggers an update for the animations 
function updateBrightnessChart() {
    if (BrightnessData[0] < 3) {
        norSun.src = "assets/sun-0.png";
    } else if (BrightnessData[0] < 6) {
        norSun.src = "assets/sun-25.png";
    } else if (BrightnessData[0] < 8) {
        norSun.src = "assets/sun-50.png";
    } else if (BrightnessData[0] < 11) {
        norSun.src = "assets/sun-75.png";
    } else {
        norSun.src = "assets/sun-100.png";
    }
    if (BrightnessData[1] < 3) {
        denSun.src = "assets/sun-0.png";
    } else if (BrightnessData[1] < 6) {
        denSun.src = "assets/sun-25.png";
    } else if (BrightnessData[1] < 8) {
        denSun.src = "assets/sun-50.png";
    } else if (BrightnessData[1] < 11) {
        denSun.src = "assets/sun-75.png";
    } else {
        denSun.src = "assets/sun-100.png";
    }
    if (BrightnessData[2] < 3) {
        reySun.src = "assets/sun-0.png";
    } else if (BrightnessData[2] < 6) {
        reySun.src = "assets/sun-25.png";
    } else if (BrightnessData[2] < 8) {
        reySun.src = "assets/sun-50.png";
    } else if (BrightnessData[2] < 11) {
        reySun.src = "assets/sun-75.png";
    } else {
        reySun.src = "assets/sun-100.png";
    }
    updateSunAnim();
}

// changes the duration of the animations depending on the Brightness data
function updateSunAnim() {
    nSun.style.animationDuration = (13 - BrightnessData[0]) + "s";
    dSun.style.animationDuration = (13 - BrightnessData[1]) + "s";
    rSun.style.animationDuration = (13 - BrightnessData[2]) + "s";
    // updates the displayed value for UV index
    NorUV.innerHTML = BrightnessData[0];
    DenUV.innerHTML = BrightnessData[1];
    ReyUV.innerHTML = BrightnessData[2];
}

// updates the Temperature bar graph based on the live data and sets options and type for the format for the graph
function updateTemperatureChart() {
    let tempChart = new Chart("feelsLike", {
        type: "bar",
        data: {
            labels: currentLocations,
            datasets: [{
                backgroundColor: barColors,
                data: TemperatureData,
                minBarLength: 1,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 50,
                    }
                }]
            }
        }
    });
}
