//    all selectors
const dialy_weather_img = document.querySelectorAll('.daily_weather_img');
const dialy_weather_day = document.querySelectorAll('.dialy_weather_day');
const dialy_weather_temp = document.querySelectorAll('.dialy_weather_temp');
const currImg = document.querySelector('.currImg');
const mainContainer = document.querySelector('.mainContainer');
// for hour temp 
const hour_day = document.querySelectorAll('.hour_day');
const hour_time = document.querySelectorAll('.hour_time');
const hour_temp = document.querySelectorAll('.hour_temp');
const hour_fltemp = document.querySelectorAll('.hour_fltemp');
const hour_wind = document.querySelectorAll('.hour_wind');
const hour_precip = document.querySelectorAll('.hour_precip');
const hour_weather_img = document.querySelectorAll('.hour_weather_img');
const weatherSvg = ['0.svg', '1.svg', '2.svg', '51.svg', '56.svg'];
// async operations
async function weatherAPi() {
    mainContainer.classList.add('blurred');
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=25.39&longitude=68.36&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
        // console.log("setting: ",response);
        mainContainer.classList.remove('blurred');
        const responseText = await response.json();
        // console.log("this is daily weather update: ", responseText.daily);
        const daily = responseText.daily;
        currentWeather(responseText.current_weather, daily);
        dialyWeather(daily);
        hourlyWeather(responseText.hourly);
        console.log(responseText);
    }
    catch (error) {
        console.log("there is some problem ", error);
    }
}
weatherAPi();
// current weather
function currentWeather({ temperature: current_temp, weathercode }, { apparent_temperature_max: [fl_high], apparent_temperature_min: [fl_low], precipitation_sum: [precip], temperature_2m_max: [high], temperature_2m_min: [low], windspeed_10m_max: [windspeed] }) {
    weatherImgUpdate(weathercode, currImg);
    document.querySelector('.current_temp').innerText = Math.round(current_temp);
    document.querySelector('.temp-current-high').innerText = Math.round(high);
    document.querySelector('.temp-current-flhigh').innerText = Math.round(fl_high);
    document.querySelector('.current-wind').innerText = Math.round(windspeed);
    document.querySelector('.temp-current-low').innerText = Math.round(low);
    document.querySelector('.temp-current-fllow').innerText = Math.round(fl_low);
    document.querySelector('.temp-current-precip').innerText = precip;
}
//  daily weather
function dialyWeather({ apparent_temperature_max: temperature, time, weathercode }) {
    dialy_weather_img.forEach((element, index) => {
        weatherImgUpdate(weathercode[index], element);
        dialy_weather_day[index].innerText = currentDayInString(time[index]);
        dialy_weather_temp[index].innerText = Math.round(temperature[index]);
        weatherImgUpdate(weathercode[index], element);
    })
}
//   hourly weather
function hourlyWeather({ apparent_temperature: fl_temp, precipitation: precip, temperature_2m: temperature, time, windspeed_10m: windspeed, weathercode }) {
    const currTime = new Date;
    const timeIndex = currTime.getHours();
    console.log("this is current time: ", currTime.getHours());
    const date = new Date(time[timeIndex] * 1000);
    console.log("hour temp ", temperature[0]);
    hour_temp.forEach((element, index) => {
        hour_day[index].innerText = currentDayInString(time[timeIndex + index]);
        hour_time[index].innerText = getCurrHours(new Date(time[timeIndex + index] * 1000));
        hour_temp[index].innerText = Math.round(temperature[index]);
        hour_fltemp[index].innerText = Math.round(fl_temp[index]);
        hour_wind[index].innerText = Math.round(windspeed[index]);
        hour_precip[index].innerText = Math.round(precip[index]);
        weatherImgUpdate(weathercode[index], hour_weather_img[index]);
    })

}
function weatherImgUpdate(weathercode, imgTag) {
    if (weathercode === 0)
        imgTag.setAttribute('src', `../picky/${weatherSvg[0]}`);
    else if (weathercode === 1 || 2 || 3)
        imgTag.setAttribute('src', `../picky/${weatherSvg[1]}`);
    else if (weathercode === 45 || 48)
        imgTag.setAttribute('src', `../picky/${weatherSvg[2]}`);
    else if (weathercode === 51, 53, 55)
        imgTag.setAttribute('src', `../picky/${weatherSvg[3]}`);
    else if (weathercode === 56 || 57)
        imgTag.setAttribute('src', `../picky/${weatherSvg[4]}`);
}
function currentDayInString(time) {
    const date = new Date(time * 1000);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-us", options).format(date);
}
function getCurrHours(date) {
    return date.toLocaleString("en-US", { hour: "numeric", hour12: true })
}