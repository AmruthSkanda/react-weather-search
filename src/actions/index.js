import axios from 'axios';

const API_KEY = "f362071abfb71cbe048bf73c3223bcfc";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const  FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url);
	
	//console.log('request is :',request); // this will log a Promise  Obj

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}