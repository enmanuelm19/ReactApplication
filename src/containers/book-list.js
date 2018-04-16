import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li 
        onClick={() => this.props.selectBook(book)}
        key={book.title} 
        className="list-group-item">
        {book.title}
        </li> 
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Funcion reservada que convierte un estado en props dentro del componente, lo que retorna
//estara disponible en this.props, en este caso this.props.books
function mapStateToProps(state){
  return {
      books: state.books
  }
}

//Funcion reservada para cuando el select es llamado, el resultado sera pasado por todos
//los reducers, la funcion dispatch recibe las acciones y las pasa por los reducers
// y todo lo que esta funcion retorne sera convertido a props dentro de nuestro contenedor
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}
//Ya no se exporta solo el componente sino tambien los props de este(las acciones y la data)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);