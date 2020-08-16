import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/logo.svg';
import Modal from '../../components/common/Modal';

export const Login = () => {

  // Login
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  // Reset Password Modal
  const [isModalOpen, setIsModalOpen] = useState(false)

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
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-lg p-10">
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight ${ errors.password ? "border-red-500" : "focus:border-purple-500" } focus:outline-none focus:bg-white text-sm`}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
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
                    className={`appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none ${ errors.password ? "border-red-500" : "focus:border-purple-500" } focus:bg-white text-sm`}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    ref={register({ required: true })}
                  />
                  { errors.password && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">password is required</p> }
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2 mt-4">
                <div className="w-full px-3">
                  <button className="w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">
                    Login
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
        <div>
          {/*Header*/}
          <div>
            <h3 className="text-2xl font-extrabold mb-3 text-gray-700">
              <FontAwesomeIcon icon={faLock} />
              <span className="ml-4">Forgot your password</span>
            </h3>
            <p className="text-sm text-gray-700">No worries, we will send you a reset link if you have already activated your account. Otherwise, we will send you the link to activate your account.</p>
          </div>
          {/*Form*/}
          <form
            className="w-full mt-4"
            >
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email address
                </label>
                <input
                  name="email"
                  className="appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-purple-500 focus:bg-white text-sm" id="email-reset" type="email" placeholder="thomas@workeasy.ie"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse">
            <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">
              Reset
            </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Login;