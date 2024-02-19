/*eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

export const SqlInjection = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const openWebPage = () => {
    const url = 'https://demo.testfire.net/login.jsp';
    window.open(url, '_blank');
  };
  useEffect(() => {
    if (document.location.hash === '#unauthorized') {
      setErrorMessage('Invalid Username or Password');
    } else if (document.location.hash === '#error') {
      setErrorMessage('An error has occurred');
    }
  }, []);

  return (
    <div className="relative mt-8 w-screen h-screen overflow-hidden">
      <video autoPlay muted loop className="w-full h-full object-cover absolute top-0 left-0 z-[-1]">
        <source src="/photos/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form action="http://localhost:5001/login" method="post" className="border-3 border-f1f1f1 max-w-sm mx-auto p-16">
          <div className="bg-opacity-70 bg-gray-800 p-8">
            <label className="block text-gray-400 text-lg font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              className="w-full px-4 py-2 border rounded appearance-none leading-tight focus:outline-none focus:shadow-outline"
            />

            <label className="block text-gray-400 text-lg font-bold mb-2 mt-4">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded appearance-none leading-tight focus:outline-none focus:shadow-outline"
            />

             <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4 z-50"
            >
              Login
            </button>
          </div>
        </form>

        {errorMessage && (
          <div className={`text-orange-700 text-2xl font-bold p-4`}>
            {errorMessage}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          className=" bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-105 hover:shadow-white text-white font-mono py-2 px-4 rounded-full inline-flex items-center hover:shadow-lg focus:ring-2 focus:ring-blue-500"
          onClick={() => (window.location.href = '/')}
        >
          <FaHome className="mr-2" />
          Home
        </button>

        {/* Divider */}
        <div className="mx-4 border-l border-gray-100"></div>

        <button
          type="button"
          className="bg-gradient-to-r from-cyan-500 to-green-600 text-white hover:scale-105 hover:shadow-white py-2 px-4 rounded-full inline-flex items-center hover:shadow-md focus:ring-2 focus:ring-green-500"
          onClick={() => (window.location.href = '/learn')}
        >
          <AiOutlineSearch className="mr-2" />
          Labs
        </button>
        <div className="mx-4 border-l border-gray-100"></div>

        <button
          type="button"
          className="bg-gradient-to-r from-cyan-500 to-green-600 text-white hover:scale-105 hover:shadow-white py-2 px-4 rounded-full inline-flex items-center hover:shadow-md focus:ring-2 focus:ring-green-500"
          onClick={openWebPage}>
          Open Altoro Mutual
        </button>
      </div>
    </div>
  );
};

export default SqlInjection;
