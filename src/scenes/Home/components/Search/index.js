import React, { Component } from "react";
import './styles.scss';
import { FaSearch } from "react-icons/fa";

class Search extends Component {

  constructor() {
    super()

    this.state = {
      query: null
    }
  }
handleChange() {
  // do something
}

handleFocus() {
  const searchContainer = document.querySelector('.search');
  searchContainer.classList.add('active');
}

handleBlur() {
  const searchContainer = document.querySelector('.search');
  searchContainer.classList.remove('active');
}

getResults = e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    let search = e.target.value;
    console.log('ENTRR', search);
    // const googleSearch = "https://www.google.com/search?q=";
    // console.log(e.keyCode, search);
    // let searched = `${googleSearch}${search}`;
    // console.log('searched',searched);
    // console.log('this',this);
    // window.location.href = searched;
  }
  
}

  render() {
    return (
      <div className="top-row">
        <div className="top-left">
        <div className="search">
          <form className="search-form">
            <FaSearch className="search-icon" />
            <input
              className="search-input"
              autoComplete="off"
              onChange={this.handleChange}
              onKeyUp={this.getResults}
              onFocus = {this.handleFocus}
              onBlur = {this.handleBlur}
            />
          </form>
        </div>
        </div>
      </div>
    );
  }
}
export default Search;
