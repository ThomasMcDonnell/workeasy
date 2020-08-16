import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';
import Transition from './Transition';

const Modal = React.forwardRef(function Modal(props, ref) {
  const { children, onClose, isOpen, ...other } = props

  const handleEsc = (event) => {
    if (['Esc', 'Escape'].includes(event.key)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const modalComponent = (
    <Transition show={isOpen}>
      <>
        <Transition
          enter="transition ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={onClose}>
            <Transition
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 transform translate-y-1/2"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0  transform translate-y-1/2"
            >
              <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
              <div
                className="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-2xl"
                role="dialog"
                onClick={(e) => e.stopPropagation()}
                ref={ref}
                {...other}
              >
                <FocusLock returnFocus>
                  <header className="flex justify-end">
                    <button
                      className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700 focus:outline-none"
                      aria-label="close"
                      onClick={onClose}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        role="img"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </header>
                  {children}
                </FocusLock>
              </div>
              </div>
            </Transition>
          </Backdrop>
        </Transition>
      </>
    </Transition>
  )

  return mounted ? createPortal(modalComponent, document.body) : null
})

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Modal