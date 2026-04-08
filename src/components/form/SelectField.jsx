import React from "react";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  required = false,
  placeholder = "Select...",
}) => {
  return (
    <div className="mb-4">

      {/* Label */}
      <label
        htmlFor={name}
        className="block text-sm font-medium text-black mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Select */}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg bg-white text-black transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}

    </div>
  );
};

export default SelectField;