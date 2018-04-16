//state que se pasa como parametro no es el state de la aplicacion
//es solo el estado por lo cual el reducer es responsable
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
    default:
      return state;
  }
}