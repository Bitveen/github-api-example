import React from 'react';
import { Link } from 'react-router';

import SearchForm from 'SearchForm';
import SearchResults from 'SearchResults';

const SearchBox = () => {
    return (
        <div>
            <header className='page-header'>
                <h3 className='text-center'>Поиск</h3>
            </header>
            <div className='search-box'>
                <SearchForm />
                <div className="search-box__body">
                    <SearchResults />
                </div>
            </div>
        </div>

    );
};

export default SearchBox;
