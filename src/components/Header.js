
import React from 'react';

const Header = ({ onBackClick, onSearchToggle ,title}) => {
  return (
    <header className="header">
      <div className='header-inner'>
        <button className="back-button" onClick={onBackClick}>
          
          <img className='header-image' src='https://test.create.diagnal.com/images/Back.png' alt=''/>
        </button>
        <h1 className="title">{title}</h1>
      </div>
     
      <button className="search-button" onClick={onSearchToggle}>
      <img className='header-image' src='https://test.create.diagnal.com/images/search.png' alt=''/>
      </button>
    </header>
  );
};

export default Header;
