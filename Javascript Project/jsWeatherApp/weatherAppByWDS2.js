// import "./weather.css";
// import {getName} from './weatherAppByWDS.js';
import { getWeather} from './weatherAppByWDS.js';

getWeather(25.39,68.36,Intl.DateTimeFormat().resolvedOptions().timeZone).then(res=> console.log(res));
// getName();