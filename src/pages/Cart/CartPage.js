import { useCart } from "../../context/CartContext";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
  const { cartList } = useCart();
const cartlistLength = cartList.length
  return (
    <main>       
      { cartlistLength ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}
