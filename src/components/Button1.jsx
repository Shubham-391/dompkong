import React from 'react'

function Button1(props) {
  return (
    <>
      <button
        className={`py-4 px-6 rounded-[4px] bg-[#FDDA60] shadow-[0px_4px_16px_0px_rgba(253,218,96,0.50)] hover:shadow-none transition-all duration-300 ease-linear ${props.className}`}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button1