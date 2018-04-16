export function selectBook(book) {
  //Este es un action creator y debe retornar una accion que es un objeto
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}