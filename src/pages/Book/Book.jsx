import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  const { bookName, author, image, rating, category, tags, bookId } =
    singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="bg-base-100 w-96 shadow-sm border border-gray-200 rounded-2xl">
        <figure className="p-3 m-7 bg-[#F3F3F3] rounded-3xl">
          <img className="h-[166px] mx-auto py-5" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <div className="badge bg-[#cfe1cc51] text-[#23BE0A]" key={index}>
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <small>By: {author}</small>

          <div className="card-actions justify-between border-t-1 border-dashed border-gray-200">
            <div className="pt-3">{category}</div>
            <div className="flex justify-center items-center gap-1 pt-3">
              {rating} <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
