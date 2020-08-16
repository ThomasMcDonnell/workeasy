import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';;

export const Header = () => {
  return (
    <div>
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="h-8 transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-125"/>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-extrabold">
            <a className="mr-2 ml-2 sm:mr-4 sm:ml-4 hover:text-indigo-700">Solutions</a>
            <a className="mr-2 ml-2 sm:mr-4 sm:ml-4 hover:text-indigo-700">Pricing</a>
            <Link to="/accounts/login" className="mr-2 ml-2 sm:mr-4 sm:ml-4 hover:text-indigo-700">Log in</Link>
            <Link to="/accounts/register" className="inline-flex items-center text-white font-extrabold bg-indigo-700 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-lg text-base mt-4 md:mt-0 ml-5">
              Sign up
              <span className="transition duration-500 ease-in-out transform hover:translate-x-1">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;