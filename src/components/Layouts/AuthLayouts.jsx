import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type}) => {
  return (
    <div className="flex flex-col gap-y-2 min-h-screen justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl bg- font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please Enter your Details
        </p>
        {children}
        <p className='text-sm mt-5 text-center'>
         {type === "login" ? "Don't Have an Account?" : "Already Have an Account?"}
        <Link to={type === "login" ? "/register" : "/login"} className='text-blue-500 font-bold ml-1'>
          {type === "login" ? "Sign Up" : "Sign In"}
        </Link>
      </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
