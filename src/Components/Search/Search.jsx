import React, {useRef, useEffect} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './Search.css';

export const Search = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    //using regular expression to replace whitespaces and non-word characters with an empty string
    if((tempSearchTerm.replace(/[^\w\s]/gi, "")).length===0) {
      setResultTitle("Please enter a search term.");
      setSearchTerm("");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/books");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder="Type something..." ref={searchText}/>
              <button type="submit" onClick={handleSubmit} className="flex flex-c">
                <FaSearch className="icon-color ms-4" size={32}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
