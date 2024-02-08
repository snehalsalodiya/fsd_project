/* eslint-disable no-unused-vars */

// import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import { useAuth } from '/src/components/storage/auth.jsx';
import { toast } from 'react-toastify';
//link tag is used in place of a tag because a refreshes whole pag but in react there is no page refreshing concepts.... 
//NavLink 

export default function Header() {
    const {user,isLoggedIn} = useAuth();

    return (
        
        <header >
                <nav className="relative px-4 lg:px-8 py-2 rounded-lg bg-transparent backdrop-blur-sm backdrop-brightness-90 ">
                    <div className="flex items-center justify-between mx-auto max-w-screen-xl ">
                        <Link to="/" className="flex items-center text-gray-400">
                            <img
                                src="/photos/logo.png"
                                className="h-16"
                                alt="Logo"
                                />
                            <p className="text-lg font-semibold ml-2">DEFEND & DETECT</p>
                        </Link>

                {isLoggedIn ?( 
                    <div className="flex items-center lg:order-2">   
                        <Link
                            to="/logout"
                            className=" text-white bg-cyan-700 hover:bg-cyan-800 hover:text-gray-400 focus:ring-4 focus:ring-grey-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                            Log out
                        </Link>
                    </div>
                        ):(
                            <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-200 hover:ring-2 hover:text-cyan-400 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                            Login
                         </Link>
                        <Link
                            to="/register"// this is for make that page active
                            className="text-white bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                            Get started
                        </Link>
                    </div>
                )}
                
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                      >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                                to={"/"}//to make page active 
                                className={({isActive}) =>//isActive is used to check that this link is active or not ......
                                `block py-2 pr-4 pl-3 duration-200 
                                ${isActive ? "text-cyan-600":"text-gray-500"}
                                border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0`
                            }
                              >
                                  Home
                              </NavLink>
                          </li>
                          
                          <li>
                              <NavLink
                                to={"/learn"}//to make page active 
                                  className={({isActive}) =>//isActive is used to check that this link is active or not ......
                                      `block py-2 pr-4 pl-3 duration-200 
                                      ${isActive ? "text-cyan-600":"text-gray-500"}
                                      border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0`
                                  }
                              >
                                  Learn
                              </NavLink>
                          </li>
                          

                                  <li>
                                  <NavLink
                                        to={"/blog"}//to make page active 
                                          className={({isActive}) =>//isActive is used to check that this link is active or not ......
                                              `block py-2 pr-4 pl-3 duration-200 
                                              ${isActive ? "text-cyan-600":"text-gray-500"}
                                              border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0`
                                          }
                                      >
                                         Blogs
                                      </NavLink>
                                  </li>
                          <li>
                              <NavLink
                                to={"/about"}//this data is directly added in URL by react-router
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 
                                      ${isActive ? "text-cyan-600":"text-gray-500"}
                                      border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0`
                                  }
                              >
                              About
                              </NavLink>
                          </li>
                          <li>
                          <NavLink
                                to={"/contact"}//to make page active 
                                  className={({isActive}) =>//isActive is used to check that this link is active or not ......
                                      `block py-2 pr-4 pl-3 duration-200 
                                      ${isActive ? "text-cyan-600":"text-gray-500"}
                                      border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0`
                                  }
                              >
                                 Contact
                              </NavLink>
                          </li>
                         {user.isAdmin?(
                            <li>
                            <NavLink
                                  to={"/admin"}//to make page active 
                                    className={({isActive}) =>//isActive is used to check that this link is active or not ......
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-cyan-600":"text-gray-500"}
                                        border-b border-cyan-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-cyan-500 lg:p-0`
                                    }
                                >
                                  Admin Pannel
                                </NavLink>
                            </li>
                         ) :(
                            <></>
                         )}
                          
                         
                          {/* <li>
                              <NavLink
                                to={"/github"}//to make page active 
                                  className={({isActive}) =>//isActive is used to check that this link is active or not ......
                                      `block py-2 pr-4 pl-3 duration-200 
                                      ${isActive ? "text-orange-700":"text-gray-700"}
                                      border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Github
                              </NavLink>
                          </li> */}
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}

