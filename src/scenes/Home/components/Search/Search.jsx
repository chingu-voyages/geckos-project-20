import React, { useState } from 'react';
import './search.styles.scss';
import { FaSearch } from 'react-icons/fa';

function Search() {
    const [query, setQuery] = useState(null);

    const handleChange = e => setQuery(e.target.value);

    const handleFocus = () => {
        const searchContainer = document.querySelector('.search');
        searchContainer.classList.add('active');
    };

    const handleBlur = () => {
        const searchContainer = document.querySelector('.search');
        searchContainer.classList.remove('active');
    };

    const toggleClick = () => {
        const searchContainer = document.querySelector('.search');
        const searchInput = document.querySelector('.search-input');
        searchContainer.classList.contains('active')
            ? searchContainer.classList.remove('active')
            : searchContainer.classList.add('active');
        searchInput.focus();
    };

    const getResults = e => {
        e.preventDefault();
        const googleQuery = 'https://www.google.com/search?q=';
        let googleSearch = `${googleQuery}${query}`;
        window.location.href = googleSearch;
    };

    return (
        <div className="top-row">
            <div className="top-left">
                <div className="search">
                    <form className="search-form" onSubmit={getResults}>
                        <FaSearch className="search-icon" onClick={toggleClick} />
                        <input
                            className="search-input"
                            autoComplete="off"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Search;
