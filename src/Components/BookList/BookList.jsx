import React from 'react';
import { useGlobalContext } from '../../context';
import { Loader } from '../Loader/Loader';
import {BookCard} from '../BookCard/BookCard';
import about from '../../img/about.jpg';
import './BookList.css';

// https://covers.openlibrary.org/b/id/240727-S.jpg

export const BookList = () => {
    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
      return {
        ...singleBook,
        // removing /works/ from URL to get only /id/
        id: (singleBook.id).replace("/works/", ""),
        cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : about,
      }
    });

    if (loading) return <Loader/>;

      return (
            <section className='bookList'>
              <div className='container'>
                <div className='section-title'>
                  <h1>{resultTitle}</h1>
                </div>
                <div className='booklist-content grid'>
                  {
                    booksWithCovers.slice(0,30).map((item, index) => {
                      return (
                          <BookCard key={index} {...item} />                       
                      )
                    })
                  }
                </div>
              </div>
            </section>
      )
}