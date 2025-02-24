import ProductCards from "../components/Card/ProductCards";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import TableCard from "../components/Fragments/TableCard";
import { useDarkMode } from "../hooks/DarkMode";


const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const {IsDarkMode} = useDarkMode()

  useEffect(() => {
    getProducts((data) => {
      setProduct(data)
    });
  }, [])

  return (
    <>
      <div className={`flex justify-center py-5 ${IsDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap">
        {product.length === 0 && (
          <h2>No Items Found!</h2>
        )}
          {product.length && product.map((product) => (
            <ProductCards key={product.id}>
              <ProductCards.Header image={product.image} id={product.id}/>
              <ProductCards.Body title={product.title}>
                {product.description}
              </ProductCards.Body>
              <ProductCards.Footer
                id={product.id}
                price={product.price}
              />
            </ProductCards>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold mb-2 ml-5 text-blue-600">Cart <span className="text-black"></span></h1>
          <TableCard products={product}/>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
