import { useNavigate } from "react-router-dom";
import ProductCards from "../components/Card/ProductCards";
import Button from "../components/Elements/Button/Button";
import { useEffect, useState } from "react";
import { Myproducts } from "../components/config";

const email = localStorage.getItem("email");

const ProductPage = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedProducts = localStorage.getItem('product');
    if (storedProducts){
      setProduct(JSON.parse(storedProducts));
    }else {
      setProduct([])
    }
  }, [])

  useEffect(() => {
    if (product.length > 0){
      const sum = product.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
      setTotalPrice(sum);
      localStorage.setItem('product', JSON.stringify(product))
    }
  }, [product])

  const productHandler = (newProduct) => {
    setProduct((prevProduct) => {
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

  const logOutHandler = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
        Hello, <span className="text-black font-semibold pl-2">{email}</span>
        <Button onClick={logOutHandler} className="bg-black px-2 mx-2">
          LogOut
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {Myproducts.map((product) => (
            <ProductCards key={product.id}>
              <ProductCards.Header />
              <ProductCards.Body title={product.name}>
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
          <h1 className="text-3xl font-bold mb-2 ml-5 text-blue-600">Cart <span className="text-black">{product.length}</span></h1>
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
              {product.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price.toLocaleString('id-ID', {style: 'currency', currency: "IDR"})}</td>
                  <td>{p.quantity}</td>
                  <td>{(p.price * p.quantity).toLocaleString('id-ID', {style: 'currency', currency: "IDR"})}</td>
                </tr>
              ))}
              <tr>
                <td className="font-bold" colSpan={3}>Total Price</td>
                <td className="font-bold">{(TotalPrice).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
