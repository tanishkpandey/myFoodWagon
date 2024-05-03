import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i._id === item._id);

    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + parseInt(item.price), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
