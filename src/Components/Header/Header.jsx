import React from 'react';
import {Navigation} from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import './Header.css';

export const Header = () => {
  return (
    <div className='holder'>
      <header className="header">
        <Navigation/>
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find your next book!</h2><br/>
          <p className="header-text fs-18 fw-3">“A reader lives a thousand lives before he dies, said Jojen. <br/>The man who never reads lives only one.”</p>
          <Search/>
        </div>
      </header>
     </div>
  )
}
