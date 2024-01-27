// Thanks, the cdn did worked for me, the below version is suitable for my project.

// https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime;
// console.log(axios.isCancel('something'));
export function getWeather(lat, lon, timezone) {
    return axios.get("https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime", {
        params: {
            latitude: lat, longitude: lon, timezone: timezone

        },
    }).then(({ data }) => {
        console.log("data is: ", data);
        return {
            current: parseCurrentWeather(data),
            dialy: parseDailyWeather(data),
            hourly: parseHourlyWeather(data)
        }
    })
}
function parseCurrentWeather({ current_weather, daily }) {
    const { temperature: currentTemp, weathercode: iconCode } = current_weather;
    // dialy destructing
    const { apparent_temperature_max: [highFeelsLike],
        apparent_temperature_min: [lowFeelsLike], precipitation_sum: [precip],
        temperature_2m_max: [highTemp], temperature_2m_min: [lowTemp],
        windspeed_10m_max: [windSpeed] } = daily;
    return {
        currentTemp,
        highTemp,
        lowTemp,
        highFeelsLike,
        lowFeelsLike,
        windSpeed,
        precip,
        iconCode
    }
}
// daily weather
function parseDailyWeather({ daily }) {
    const { apparent_temperature_max: highFeelsLike,
        apparent_temperature_min: lowFeelsLike, precipitation_sum: precip,
        temperature_2m_max: highTemp, temperature_2m_min: lowTemp,
        windspeed_10m_max: windSpeed,
        weathercode:iconCode } = daily;
    return {
        // currentTemp,
        highTemp,
        lowTemp,
        highFeelsLike,
        lowFeelsLike,
        windSpeed,
        precip,
        iconCode
    }
    //    return daily.time;
}
function parseHourlyWeather({ hourly }) {
        const { apparent_temperature: flTemp, precipitation: precip, temperature_2m: temperature, time, windspeed_10m: windSpeed, weathercode:iconCode } = hourly;
    return {
        temperature,
        flTemp,
        time,
        windSpeed,
        precip,
        iconCode
        }
}
// export function getName() {
//     console.log("asma khan");
// }