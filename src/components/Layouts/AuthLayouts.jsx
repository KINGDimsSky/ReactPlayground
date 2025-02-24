import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../hooks/DarkMode";
import Button from "../Elements/Button/Button";

const AuthLayouts = ({ children, title, type}) => {
  const {IsDarkMode, SetIsDarkMode} = useDarkMode()

  console.log (IsDarkMode)

  return (
    <div className={`flex flex-col gap-y-2 min-h-screen justify-center items-center ${IsDarkMode && (
      "bg-slate-900"
    )}`}>
      <div className="w-full max-w-xs">
        <Button onClick={() => SetIsDarkMode(!IsDarkMode)}>
          {IsDarkMode ? "Light" : "Dark"}
        </Button>
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
