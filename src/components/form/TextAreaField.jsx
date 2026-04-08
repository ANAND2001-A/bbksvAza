import React from 'react';

const TextAreaField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  error, 
  required = false,
  placeholder,
  rows = 4
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block body-medium text-black mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary resize-none ${
          error ? 'border-red-500' : 'border-border-light'
        }`}
      />
      {error && <p className="caption text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TextAreaField;