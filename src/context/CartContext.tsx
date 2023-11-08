import { createContext, useContext, useState, ReactNode } from "react";
import { CartModal } from "../components";

export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
  cartOpened: boolean;
  toggleCart: () => void;
  addToCart: (product: CartItem, quantity: number) => void;
  updateItemQuantity: (id: number, amount: number) => void;
  clearCart: () => void;
  getCartQuantity: () => number;
  getCartTotal: () => number;
  getItemQuantity: (id: number) => number;
}

const CartContext = createContext<Cart>({} as Cart);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpened, setCartOpened] = useState(false);

  const addToCart = (product: CartItem, quantity: number) => {
    const targetItem = cartItems.find((item) => item.id === product.id);

    setCartItems((prevCartItems) => {
      if (targetItem)
        return prevCartItems.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });

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

  const updateItemQuantity = (id: number, amount: number) => {
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

  const getItemQuantity = (id: number) =>
    cartItems.find((item) => item.id === id)?.quantity || 0;

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
