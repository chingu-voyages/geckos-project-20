import React, { Component } from "react";
import './styles.scss';
import { FaSearch } from "react-icons/fa";

class Search extends Component {

handleChange() {
  console.log('irene');
}

handleFocus() {
  const searchContainer = document.querySelector('.search');
  searchContainer.classList.add('active');
}

handleBlur() {
  const searchContainer = document.querySelector('.search');
  searchContainer.classList.remove('active');
}

getResults(e) {
  e.preventDefault();

  let search = e.target.value;
  const googleSearch = "https://www.google.com/search?q=";

  if (e.which === 13 || e.keyCode === 13) {
    let searched = `${googleSearch}${search}`;
    window.location.href = searched;
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
              autocomplete="off"
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
