import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);

  const {
    bookName,
    image,
    author,
    tags,
    category,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;
  // console.log(singleBook);
  return (
    <div className="w-full my-5">
      <div className="flex gap-10">
        <div className="bg-gray-200 w-[50%] rounded-2xl">
          <img className="h-[700px] p-20 mx-auto" src={image} alt="" />
        </div>
        <div className="w-[50%]">
          <p className="text-4xl">{bookName}</p>
          <h5 className="py-2">By:{author} </h5>
          <h4 className="border-t-1 border-solid border-gray-200 py-2">
            {category}
          </h4>
          <p className="border-t-1 border-solid border-gray-200 py-4 text-base/7 ">
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="flex gap-5 py-3">
            <span className="font-bold">Tag:</span>
            {tags.map(tag => (
              <p className="badge bg-[#cfe1cc51] text-[#23BE0A]">{tag}</p>
            ))}
          </div>
          <p className="border-t-1 border-solid border-gray-200 py-2">
            Number of Pages: {totalPages}
          </p>
          <p className="py-2">Publisher: {publisher}</p>
          <p className="py-2">Year of Publishing:{yearOfPublishing}</p>
          <p className="pt-2 pb-10">Rating:{rating}</p>

          <button className="btn mr-5">Mark as Read</button>
          <button className="btn bg-[#50B1C9]">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
