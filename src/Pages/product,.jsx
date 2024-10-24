import { useNavigate } from "react-router-dom";
import ProductCards from "../components/Card/ProductCards";
import Button from "../components/Elements/Button/Button";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

const ProductPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [product, setProduct] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedProducts = localStorage.getItem('product');
    if (storedProducts){
      setCart(JSON.parse(storedProducts));
    }else {
      setCart([])
    }
  }, [])

  useEffect(() => {
    if (product.length && cart.length > 0){
      const sum = cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
      setTotalPrice(sum);
      localStorage.setItem('product', JSON.stringify(cart))
    }
  }, [cart, product])

  useEffect(() => {
    getProducts((data) => {
      setProduct(data)
    });
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token){
      setUsername(getUsername(token));
    }else{
      navigate('login')
    }
  }, [])

  const productHandler = (newProduct) => {
    setCart((prevProduct) => {
      const existingProduct = prevProduct.find((product) => product.id === newProduct.id);

      if (existingProduct) {
        return prevProduct.map((p) => 
          p.id === newProduct.id ? {...p, quantity: p.quantity + 1} : p 
        );
      }else {
        return [...prevProduct, {...newProduct, quantity: 1}];
      }

    })
  };

  const totalPriceRef = useRef(null);
  
  useEffect(() => {
    if (cart.length > 0){
      totalPriceRef.current.style.display = "table-row"
    }else {
      totalPriceRef.current.style.display = "none"
    }
  }, [cart]);

 
  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
        Hello, <span className="text-black font-semibold pl-2">{username}</span>
        <Button onClick={logOutHandler} className="bg-black px-2 mx-2">
          LogOut
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
        {product.length === 0 && (
          <h2>No Items Found!</h2>
        )}
          {product.length && product.map((product) => (
            <ProductCards key={product.id}>
              <ProductCards.Header image={product.image}/>
              <ProductCards.Body title={product.title}>
                {product.description}
              </ProductCards.Body>
              <ProductCards.Footer
                onClick={() => productHandler(product)}
                price={product.price}
              />
            </ProductCards>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold mb-2 ml-5 text-blue-600">Cart <span className="text-black">{cart.length}</span></h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((p) => (
                <tr key={p.id}>
                  <td>{p.title.substring(0, 25)}</td>
                  <td>{p.price.toLocaleString('id-ID', {style: 'currency', currency: "USD"})}</td>
                  <td>{p.quantity}</td>
                  <td>{(p.price * p.quantity).toLocaleString('id-ID', {style: 'currency', currency: "USD"})}</td>
                </tr>
              ))}
              <tr ref={totalPriceRef}>
                <td className="font-bold" colSpan={3}>Total Price</td>
                <td className="font-bold">{(TotalPrice).toLocaleString("id-ID", {style: "currency", currency: "USD"})}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
