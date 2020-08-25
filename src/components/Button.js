import React from 'react';

const Button = (props) => (
  // eslint-disable-next-line react/button-has-type
  <button
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  />
);
export default Button;