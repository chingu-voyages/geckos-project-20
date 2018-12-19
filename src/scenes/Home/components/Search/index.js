import React, { Component } from "react";
import './styles.scss';
import { FaSearch } from "react-icons/fa";

class Search extends Component {

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
          <form className="search">
            <FaSearch className="search-icon" />
            <input
              className="search-input"
              type="search"
              onKeyUp={this.getResults}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Search;
