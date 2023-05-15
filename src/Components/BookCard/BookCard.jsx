import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

export const BookCard = (book) => {

  return (
    <Link to={`/books/${book.id}`} {...book}>
      <div className="book-item flex flex-column flex-sb h-100">
        <div className="book-item-img">
          <img src={book.cover_img} alt="cover" />
        </div>
        <div className="book-item-info text-center">
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Author: </span>
            {book.author ? (
              <span>{book.author.join(", ")}</span>
            ) : (
              <span>Author not available</span>
            )}
          </div>
          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">First Publish Year: </span>
            <span>{book.first_publish_year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
