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

  handleChange = e => {
    let search = e.target.value;
    this.setState({
      query: search
    });
  }

  handleFocus() {
    const searchContainer = document.querySelector('.search');
    searchContainer.classList.add('active');
  }

  handleBlur() {
    const searchContainer = document.querySelector('.search');
    searchContainer.classList.remove('active');
  }

  toggleClick() {
    const searchContainer = document.querySelector('.search');
    const searchInput = document.querySelector('.search-input');
    searchContainer.classList.contains('active') ? searchContainer.classList.remove('active') : searchContainer.classList.add('active');
    searchInput.focus();
  }

  getResults = e => {
    e.preventDefault();
    const searched = this.state.query;
    const googleQuery = "https://www.google.com/search?q=";
    let googleSearch = `${googleQuery}${searched}`;
    window.location.href = googleSearch;
  }

  render() {
    return (
      <div className="top-row">
        <div className="top-left">
          <div className="search">
            <form className="search-form" onSubmit={this.getResults}>
              <FaSearch className="search-icon" onClick={this.toggleClick} />
              <input
                className="search-input"
                autoComplete="off"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
