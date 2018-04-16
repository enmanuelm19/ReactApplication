const API_KEY='bec16503b3428854706ef2fbc7e33a8e';
const ROOT_URL='http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}