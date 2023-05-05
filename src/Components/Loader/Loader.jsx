import React from 'react';
import loader from '../../img/loader.jpg';
import './Loader.css';

export const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={loader} alt="loader"/>
    </div>
  )
}
