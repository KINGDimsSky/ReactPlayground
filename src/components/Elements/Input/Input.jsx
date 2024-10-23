import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, name}, ref) => {
  return (
    <input
      type={type}
      className="placeholder:opacity-50  text-sm border rounded w-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;