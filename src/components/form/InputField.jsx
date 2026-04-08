import React from "react";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      
      {/* Label */}
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-800 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Input */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-lg border bg-white text-slate-900 
          placeholder-gray-500 shadow-sm
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
        `}
      />

      {/* Error Message */}
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
      
    </div>
  );
};

export default InputField;