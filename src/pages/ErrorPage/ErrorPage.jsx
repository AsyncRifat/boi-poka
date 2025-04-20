import React from 'react';

const ErrorPage = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center ">
        <h1 className="text-3xl">Not Found </h1>
      </div>
      <img
        className="w-96 mt-10 mx-auto rounded-2xl"
        src="404-error.jpg"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
