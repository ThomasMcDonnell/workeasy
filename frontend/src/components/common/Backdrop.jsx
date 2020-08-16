import React from 'react';

const Backdrop = React.forwardRef(function Backdrop(props, ref) {
  const { ...other } = props

  return <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center" ref={ref} {...other}></div>
})

export default Backdrop;