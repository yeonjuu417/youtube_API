import React from 'react';

const Search = ({keywordChange,searchVideo}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={keywordChange}/>
    <button className="btn hidden-sm-down" onClick={searchVideo}>
      검색
    </button>
  </div>
);

export default Search;
