import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch('booksData.json')
  //     .then(res => res.json())
  //     .then(data => setAllBooks(data));
  // }, []);

  // const bookPromise = fetch('./booksData.json').then(res => res.json());

  return (
    <div>
      <h1 className="text-2xl text-center p-5">Books</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto'>
          {data.map(singleBook => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
