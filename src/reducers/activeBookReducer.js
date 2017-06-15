// state here is not application state, only the state this reducer is responsible for
//state is set to default value null, coz reducers wont allow to return undefined type
export default function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED': 
			return action.payload;
	}
	return state;
}