import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { useToasts } from 'react-toast-notifications';

import { AuthContext } from './../../context/AuthContext'
import { publicFetch } from './../../utils/fetch';

import logo from '../../assets/images/logo.svg';

export const Register = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const [redirectOnRegister, setRedirectOnRegister] = useState(
    false
  );
  const [registerLoading, setRegisterLoading] = useState(false);
  const { addToast } = useToasts();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (accountData) => {
    try {
      setRegisterLoading(true);
      const { data } = await publicFetch.post('/accounts/registrations', accountData);

      const successRedirect = (message) => {
        setRedirectOnRegister(true);
        addToast(message, { appearance: 'success', autoDismiss: false });
      }

      setTimeout(successRedirect(data.message), null,  700);
    } catch(error) {
      setRegisterLoading(false);
      addToast(error.response.data.message, { appearance: 'error', autoDismiss: true });
    }
  }

  return (
    <>
    {redirectOnRegister && <Redirect to="/accounts/login" />}
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
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.organization && errors.organization.owner_attributes && errors.organization.owner_attributes.name ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="name"
                  name="organization.owner_attributes.name"
                  type="text"
                  placeholder="Enter a name"
                  ref={register({ required: true })}
                />
                { errors.organization && errors.organization.owner_attributes && errors.organization.owner_attributes.name && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">name is required</p> }
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="organization">
                Organization
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.organization && errors.organization.name ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="organization"
                  name="organization.name"
                  type="text"
                  placeholder="Organization"
                  ref={register({ required: true })}
                />
                { errors.organization && errors.organization.name && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">organization is required</p> }
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.organization && errors.organization.owner_attributes && errors.organization.owner_attributes.email ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="email"
                  name="organization.owner_attributes.email"
                  type="email"
                  placeholder="Enter your email address"
                  ref={register({ required: true })}
                />
                { errors.organization && errors.organization.owner_attributes && errors.organization.owner_attributes.email && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">email is required</p> }
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.organization && errors.organization.owner_attributes && errors.organization.owner_attributes.password ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                  id="password"
                  name="organization.owner_attributes.password"
                  type="password"
                  placeholder="Create a password"
                  ref={register({ required: true })}
                />
                { errors.organization && errors.organization.owner_attributes && errors.organization.owner_attributes.password && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">password is required</p> }
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
                <button className="w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg text-center" type="submit">
                  { registerLoading ?
                  <div className="flex flex-row justify-center items-center">
                    <svg className="animate-spin text-center h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div> : "Sign Up" }
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
    </>
  )
}

export default Register;