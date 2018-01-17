import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value: {this.state.term}
      </div>
    );
  }
}
//To be able call the component in other files
export default SearchBar;
