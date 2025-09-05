import React from 'react';

function Button({ title, className = '' }) {
  return (
    <button
    
      className={`bg-[#FB704F] hover:bg-[#fa5b36] text-white uppercase text-[14px] font-medium py-3 px-5 w-[140px] cursor-pointer transition duration-300 ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
