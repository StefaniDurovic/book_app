import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Search.css';

export const Search = () => {
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder="Type a book title..." />
              <button type="submit" className="flex flex-c">
                <FaSearch className="icon-color" size={32}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
