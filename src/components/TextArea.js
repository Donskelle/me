import React from 'react';

const InputField = (props) => (
  <textarea
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
  />
);
export default InputField;