import React from "react";

const Button = ({ className, style, type, name, id, children }) => {
  return (
    <button className={className} style={style} type={type} name={name} id={id}>
      {children}
    </button>
  );
};

export default Button;
