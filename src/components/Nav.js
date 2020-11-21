import React from 'react';
import Search from './Search';

const Nav = ({keywordChange,searchVideo}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search keywordChange={keywordChange} searchVideo={searchVideo}  />
    </div>
  </nav>
);

export default Nav;
