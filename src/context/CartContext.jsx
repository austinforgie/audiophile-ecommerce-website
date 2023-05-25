import React, { createContext, useContext, useState } from "react";
import { CartModal } from "../components";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const addToCart = (product, quantity) => {
    const targetItem = cartItems.find((item) => item.id === product.id);

    setCartItems((prevCartItems) => {
      if (targetItem)
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );

      return [
        ...prevCartItems,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
        },
      ];
    });
  };

  const updateItemQuantity = (id, amount) => {
    const targetItem = cartItems.find((item) => item.id === id);

    if (targetItem && targetItem.quantity + amount === 0) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== targetItem.id)
      );
    }

    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + amount };
        }

        return item;
      });
    });
  };

  const toggleCart = () => setCartOpened(!cartOpened);

  const clearCart = () => setCartItems([]);

  const getCartQuantity = () => {
    return cartItems.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getItemQuantity = (id) =>
    cartItems.find((item) => item.id === id).quantity;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartOpened,
        toggleCart,
        addToCart,
        updateItemQuantity,
        clearCart,
        getCartQuantity,
        getCartTotal,
        getItemQuantity,
      }}
    >
      {children}
      <CartModal />
    </CartContext.Provider>
  );
};
