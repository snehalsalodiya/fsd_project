/* eslint-disable no-unused-vars */
import React from 'react';
import { useState,useEffect } from 'react';
import { FaHome } from "react-icons/fa";
export const SqlInjection = () => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (document.location.hash === '#unauthorized') {
      setErrorMessage('Invalid Username or Password');
    } else if (document.location.hash === '#error') {
      setErrorMessage('An error has occurred');
    }
  }, []);

  return (
    <div>
      <form action="http://localhost:5001/login" method="post" className="border-3 border-f1f1f1 max-w-sm mx-auto p-16">
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
            className="w-full px-4 py-2 border rounded appearance-none leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            className="w-full px-4 py-2 border rounded appearance-none leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Login
        </button>
      </form>
      {errorMessage && (
        <div className={`bg-${errorMessage.includes('Invalid') ? 'orange' : 'red'}-300 p-4`}>
          {errorMessage}
        </div>
      )}
        <button
  type="button"
  className=" bg-gradient-to-r from-sky-500 to-blue-600 text-white font-mono py-2 px-4 rounded-full inline-flex items-center hover:shadow-lg focus:ring-2 focus:ring-blue-500"
  onClick={() => window.location.href = '/'}
>
<FaHome className=" mr-2" />
  Home
</button>
    </div>
  );

};

