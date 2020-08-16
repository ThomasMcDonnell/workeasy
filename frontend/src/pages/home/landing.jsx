import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/site/Header';

import decorationCenterTop from '../../assets/images/decoration-center-top.svg';
import decorationCenterBottom from '../../assets/images/decoration-center-bottom.svg';

const Landing = () => {
  return (
    <div>
      <Header />
      <section className="container mx-auto">
        <img src={decorationCenterTop} alt="top-decoration-center-top" className="mt-20 hidden md:block" />
        <div className="px-5 py-0">
          <div className="flex flex-col text-center w-full mt-10 mb-10">
            <h1 className="md:text-5xl text-4xl font-extrabold title-font mb-4 text-gray-900">Stop wasting time <br/> Start automating your workflow</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Time to stop wasting countless hours organising your staff sheduales and payroll, instead start focusing on what really matters to your customers and your buisness.
            </p>
            <div class="flex sm:flex-row flex-col justify-center mt-5">
              <button className="inline-flex items-center justify-center text-indigo-700 font-bold bg-indigo-100 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-200 rounded text-lg">Learn more</button>

              <Link to="/accounts/register" className="sm:ml-4 sm:mt-0 mt-4 inline-flex items-center justify-center text-white font-bold bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign up for free
                <span className="transition duration-500 ease-in-out transform hover:translate-x-1">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
            <div className="mt-4 text-xs text-gray-700">
              <p>Free access. No credit card required. Trusted by thousands of businesses.</p>
            </div>
          </div>
        </div>
        <img src={decorationCenterBottom} alt="top-decoration-center-bottom" className="mt-20 hidden md:block" />
      </section>
    </div>
  )
};

export default Landing;
