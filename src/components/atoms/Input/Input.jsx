import React from "react";

const Input = ({
  className,
  label,
  placeholder,
  name,
  value,
  type,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
