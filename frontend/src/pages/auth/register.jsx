import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import logo from '../../assets/images/logo.svg';

export const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto">
        <div className="rounded shadow bg-white">
          <div className="onbaording__form-header text-gray-700 text-center p-5 sm:p-10">
            <div className="flex flex-row items-center justify-center p-2">
              <img src={logo} alt="logo" className="h-10 sm:h-12"/>
            </div>
            <p className="text-lg font-bold">Start transforming the way you work today.</p>
          </div>
          <div className="border-b border-gray-300"></div>
          <form
            className="w-full max-w-lg p-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.name ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter a name"
                  ref={register({ required: true })}
                />
                { errors.name && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">name is required</p> }
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="organization">
                Organization
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.organization ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Organization"
                  ref={register({ required: true })}
                />
                { errors.organization && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">organization is required</p> }
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.email ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  ref={register({ required: true })}
                />
                { errors.email && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">email is required</p> }
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.password ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  ref={register({ required: true })}
                />
                { errors.password && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">password is required</p> }
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="terms_and_conditions"
                      className="form-checkbox h-4 w-4"
                      required
                      />
                    <span className="ml-2 text-xs text-gray-700">I agree with the <span className="font-bold text-purple-800 hover:text-purple-600 underline">workeasy terms of service</span>.</span>
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2 mt-4">
              <div className="w-full px-3">
                <button className="w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className="border-b border-gray-300"></div>
          <div className="text-center text-xs sm:text-sm p-4">
          Already have an account? No problem! <Link to="/accounts/login" className="font-bold text-purple-800 hover:text-purple-600 underline">Sign in here</Link>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;