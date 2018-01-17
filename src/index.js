import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCUh11u_IPlbssF8Y-X1ExTOcWg5CtPRVg';

//Create a new component, This component should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// react take component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
