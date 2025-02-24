import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDarkMode } from "../../hooks/DarkMode";

const TableCard = ({products}) => {
    const cart = useSelector((state) => state.cart.data);
    const[TotalPrice, setTotalPrice] = useState(0)
    const {IsDarkMode} = useDarkMode()

      useEffect(() => {
        if (products.length && cart.length > 0){
          const sum = cart.reduce((total, item) => {
            const product = products.find((product) => product.id  === item.id)
            return total + product.price * item.qty
          }, 0)
          setTotalPrice(sum);
          localStorage.setItem('product', JSON.stringify(cart))
        }
      }, [cart, products])


      const totalPriceRef = useRef(null);
  
      useEffect(() => {
        if (cart.length > 0){
          totalPriceRef.current.style.display = "table-row"
        }else {
          totalPriceRef.current.style.display = "none"
        }
      }, [cart]);

    return (
        <table className={`text-left table-auto border-separate border-spacing-x-5 ${IsDarkMode && "text-white"}`}>
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => {
            const product = products.find((product) => product.id === p.id)
            return product ? (
              <tr key={p.id}>
              <td>{product.title.substring(0, 25)}</td>
              <td>{product.price.toLocaleString('id-ID', {style: 'currency', currency: "USD"})}</td>
              <td>{p.qty}</td>
              <td>{(product.price * p.qty).toLocaleString('id-ID', {style: 'currency', currency: "USD"})}</td>
            </tr>
            ) : null}
            )}
            
          <tr ref={totalPriceRef}>
            <td className="font-bold" colSpan={3}>Total Price</td>
            <td className="font-bold">{(TotalPrice).toLocaleString("id-ID", {style: "currency", currency: "USD"})}</td>
          </tr>
        </tbody>
      </table>
    )
}

export default TableCard;