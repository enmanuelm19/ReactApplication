import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
          onChange={this.onInputChange} 
          value={this.state.term}
          placeholder="Get a five-day forecast in your cities"
          className="form-control"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary" >Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;