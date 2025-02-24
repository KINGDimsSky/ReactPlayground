import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductCards = ({children}) => {
  return (
    <div className="w-full max-w-xs border my-2 bg-gray-800 border-gray-700 rounded-lg shadow mx-4 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Body = ({children, title}) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)}
        </h5>
      </a>
      <p className="text-sm text-white ">
        {children.substring(0, 100)}
      </p>
    </div>
  );
};

const Footer = ({price, id}) => {
  const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-base font-bold text-white">{price.toLocaleString('id-ID', {style: 'currency', currency: "IDR"})}</span>
        <Button onClick={() => dispatch(addToCart({id, qty: 1}))} className="bg-blue-600 text-sm text-white">Add To Card</Button>
      </div>
    )
}

const Header = ({image, id}) => {
    return (
        <Link to={`/product/${id}`}>
        <img src={image} alt="" className="p-8 rounded-t-lg h-60 w-full object-cover" />
      </Link>
    )
}

ProductCards.Header = Header;
ProductCards.Body = Body;
ProductCards.Footer = Footer;

export default ProductCards;
