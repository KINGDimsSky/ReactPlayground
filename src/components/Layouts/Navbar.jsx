import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../hooks/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const navigate = useNavigate();
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state.cart.data)
  const {IsDarkMode, SetIsDarkMode} = useDarkMode()

  useEffect(() => {
    const sum = cart.reduce((total, item) => {
        return total + item.qty
    }, 0)
    setTotalCart(sum)
  }, [cart])

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
      Hello, <span className="text-black font-semibold pl-2">{username}</span>
      <Button onClick={logOutHandler} className="bg-black px-2 mx-2">
        LogOut
      </Button>
      <div className="flex items-center bg-gray-800 p-2 ml-5 rounded-md">{totalCart}</div>
      <Button onClick={() => SetIsDarkMode(!IsDarkMode)} className="bg-black ml-4">
        {IsDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
