import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';

import { AuthContext } from './../../context/AuthContext'
import { publicFetch } from './../../utils/fetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useToasts } from 'react-toast-notifications';

export const ResetPasswordForm = () => {
  const authContext = useContext(AuthContext);
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);
  const { addToast } = useToasts();
  const { register, handleSubmit, errors } = useForm();

  const onSubmitResetPassword = async (userData) => {
    try {
      setResetPasswordLoading(true);
      const { data } = await publicFetch.post('/accounts/password/forgot', userData)
      addToast(data.message, { appearance: 'success', autoDismiss: true });
      setResetPasswordLoading(false);
    } catch(error) {
      setResetPasswordLoading(false);
      addToast(error.response.data.message, { appearance: 'error', autoDismiss: true });
    }
  }

  return (
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
      onSubmit={handleSubmit(onSubmitResetPassword)}
      >
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email address
          </label>
          <input
            name="user.email"
            className="appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-purple-500 focus:bg-white text-sm"
            id="email-reset"
            type="email"
            ref={register({ required: true })}
            placeholder="thomas@workeasy.ie"
          />
          { errors.user && errors.user.email && <p className="text-red-500 text-xs italic -my-2 mb-2 pl-2">email is required</p> }
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg text-center" type="submit">
          { resetPasswordLoading ?
          <div className="flex flex-row justify-center items-center">
            <svg className="animate-spin text-center h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div> : "Reset" }
        </button>
      </div>
    </form>
  </div>
  )
}

export default ResetPasswordForm;