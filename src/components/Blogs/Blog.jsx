/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Headers/header';
import Footer from '../Footers/footer';
import {useAuth} from '../storage/auth';
import MatrixRainCode from '../MatrixRainCode/MatrixRainCode';
function Blog() {
const {blog} = useAuth();
  return (
    <><Header/>
    <MatrixRainCode/>
      <section className="section-blog  py-10">
        <div className="container relative">
            <h1 className="main-heading text-7xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
                Blogs
            </span>
            </h1>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          {blog.map((prevElement, index) => (
  <div key={index} className="card bg-gradient-to-b from-cyan-600 to-green-700 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:rotate-0">
    <div className="card-img">
      {/* Use the actual image URL if available, otherwise use a default */}
      <img
        src={prevElement.imageUrl }
        alt="Card Image"
        className="w-full h-48 object-cover rounded-t-lg"
      />
    </div>
    <div className="card-content p-6">
      <h2 className="text-xl font-semibold mb-2 text-white">
        {prevElement.blog}
      </h2>
      <p className="text-gray-100">
        {prevElement.description}
      </p>
      <p className="text-gray-100">
        Provider: {prevElement.provider}
      </p>
      <p className="text-gray-100">
        Date Published: {prevElement.datePublished}
      </p>
      <a
        href="#"
        className="text-yellow-200 hover:text-yellow-100 hover:underline mt-4 inline-block"
      >
        Read More
      </a>
    </div>
  </div>
))}
        
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Blog;
