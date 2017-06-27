import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action){
	//console.log('Action recieved: ',action); // This will only recieve data not the promise passed from action creator (since we used redux-promise middle ware)
	//***The redux-promise middle ware checks if payload is promise? if yes, strips it and fetches the response data, creates new action with payload as data and passes to reducers. Hence only data is recieved in reducers not promise.
	switch(action.type){
		case FETCH_WEATHER:{
			//return state.concat([ action.payload.data ]); // donot use state.push(), since it will modify existing state. Instead return new state array itself using concat or spread syntax
			return [ action.payload.data, ...state ];
		}
	}
	return state;
}