import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css';

export const Loader = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner animation="grow" variant="danger" m-auto className='spinner' role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}
