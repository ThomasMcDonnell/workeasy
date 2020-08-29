import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useToasts } from 'react-toast-notifications';

import { AuthContext } from './../../context/AuthContext'
import { publicFetch } from './../../utils/fetch';
import { decodePayload } from './../../utils/decode';

import logo from '../../assets/images/logo.svg';
import Modal from '../../components/common/Modal';

import ResetPasswordForm from '../../components/site/ResetPasswordForm';

export const Login = () => {
  const authContext = useContext(AuthContext);
  const [redirectOnLogin, setRedirectOnLogin] = useState(
    false
  );
  const [loginLoading, setLoginLoading] = useState(false);
  const { addToast } = useToasts();
  const { register, handleSubmit, errors } = useForm();

  const onSubmitLogin = async (authData) => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post('/accounts/sign_in', authData);
      const decodedPayload = decodePayload(data);

      authContext.setAuthState(decodedPayload);
    } catch(error) {
      setLoginLoading(false);
      addToast("Your password and email do not match!", { appearance: 'error', autoDismiss: true });
    }
  }

  // Reset Password Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="m-auto">
          <div className="rounded shadow bg-white">
            <div className="onbaording__form-header text-gray-700 text-center p-5 sm:p-10">
              <div className="flex flex-row items-center justify-center p-2">
                <img src={logo} alt="logo" className="h-10 sm:h-12"/>
              </div>
              <p className="text-lg font-bold">Let's get you ready to start your working day.</p>
            </div>
            <div className="border-b border-gray-300"></div>
            <form
              onSubmit={handleSubmit(onSubmitLogin)}
              className="w-full max-w-lg p-10">
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight ${ errors.auth && errors.auth.email ? "border-red-500" : "focus:border-purple-500" } focus:outline-none focus:bg-white text-sm`}
                    id="email"
                    name="auth.email"
                    type="email"
                    placeholder="Enter your email"
                    ref={register({ required: true })}
                  />
                  { errors.auth && errors.auth.email && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">email is required</p> }
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.auth && errors.auth.password ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                    id="password"
                    name="auth.password"
                    type="password"
                    placeholder="Enter your password"
                    ref={register({ required: true })}
                  />
                  { errors.auth && errors.auth.password && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">password is required</p> }
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2 mt-4">
                <div className="w-full px-3">
                  <button className="w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg text-center" type="submit">
                    { loginLoading ?
                    <div className="flex flex-row justify-center items-center">
                      <svg className="animate-spin text-center h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div> : "Login" }
                  </button>
                </div>
              </div>
              <div>
                <span
                className="font-bold text-sm text-purple-800 hover:underline"
                onClick={openModal}
                >
                  Forgot password?
                </span>
              </div>
            </form>
            <div className="border-b border-gray-300"></div>
            <div className="text-center text-xs sm:text-sm p-4">
              Don't have an account? No problem! <Link to="/accounts/register" className="font-bold text-purple-800 hover:text-purple-600 underline">Register here</Link>.
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ResetPasswordForm />
      </Modal>
    </>
  );
}

export default Login;