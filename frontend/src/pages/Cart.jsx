import TransactionsTable from "../components/TransactionsTable";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
function Cart() {
  const Items = useContext(CartContext);
  return (
    <div className="bg-[#FFF5E2] py-10 ">
      <TransactionsTable cartItems={Items.cartItems} />
    </div>
  );
}

export default Cart;
