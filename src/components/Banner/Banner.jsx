import React from 'react';
import BannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="flex justify-around items-center py-10 bg-gray-100 rounded-xl my-5 max-sm:flex-col max-sm:mx-5 max-sm:px-3">
      <div className="ml-10 max-sm:mx-auto">
        <h1 className="text-5xl mb-5 font-bold">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] rounded-xl">View The List</button>
      </div>
      <div className="mr-10 max-sm:mx-auto max-sm:mt-2">
        <img className="rounded-4xl" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
