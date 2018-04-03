import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: null, placeholder: 'Search' };
  }
  onInputChangeHandler = (event, term) => {
    term = event.target.value;
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="search-bar">
        <input 
        onChange={this.onInputChangeHandler}
        value={this.state.term}
        placeholder={this.state.placeholder}/>
      </div>
    );
  }
}

export default SearchBar;