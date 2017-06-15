export function selectBook(book){
	//selectBook is ActionCreator, it needs to return an action, an obj with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}