import { Link } from "react-router-dom";
import { useCart, Cart, CartItem as Item } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { nanoid } from "nanoid";
import { FORMAT_CURRENCY } from "../../utilities";

const CartModal = () => {
  const {
    clearCart,
    cartItems,
    getCartQuantity,
    getCartTotal,
    cartOpened,
    toggleCart,
  }: Cart = useCart();

  const cartItemElements = cartItems.map((item: Item) => (
    <CartItem key={nanoid()} item={item} options={{ counter: true }} />
  ));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") toggleCart();
  };

  return (
    cartOpened && (
      <aside
        className={`
          fixed top-[5.2rem] h-full w-full bg-black bg-opacity-40 px-6 pt-6
          md:pr-10 md:pt-8
          lg:px-0 lg:pt-10`}
        onClick={toggleCart}
      >
        <div
          className={`
            mx-auto
            md:max-w-[54rem]
            lg:max-w-[69.375rem]`}
        >
          <div
            role="dialog"
            className={`
              mx-auto max-w-[20.4375rem] rounded-lg bg-white px-7 pb-[1.9375rem] pt-8
              md:ml-auto md:mr-0 md:max-w-[23.5625rem]`}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {getCartQuantity() > 0 ? (
              <div>
                <div className="flex justify-between">
                  <div className="text-lg font-bold uppercase leading-[1.5625rem] tracking-[0.08rem]">
                    Cart ({getCartQuantity()})
                  </div>
                  <button
                    type="button"
                    className="border-none bg-transparent font-['Manrope'] text-[0.9375rem] font-medium leading-[1.5625rem] opacity-50 hover:underline"
                    onClick={clearCart}
                  >
                    Remove all
                  </button>
                </div>
                <div className="my-[1.9375rem] flex flex-col gap-6">
                  {cartItemElements}
                </div>
                <div className="flex justify-between">
                  <div className="mb-6 text-[0.9375rem] font-medium uppercase leading-[1.5625rem] opacity-50">
                    Total
                  </div>
                  <div className="text-lg font-bold uppercase leading-[1.5625rem]">
                    {FORMAT_CURRENCY(getCartTotal())}
                  </div>
                </div>
                <Link
                  className="btn block bg-[#d87d4a] text-center text-white hover:bg-[#FBAF85]"
                  onClick={toggleCart}
                  to={"/checkout"}
                >
                  Checkout
                </Link>
              </div>
            ) : (
              <p className="text-center">Your cart is currently empty.</p>
            )}
          </div>
        </div>
      </aside>
    )
  );
};

export default CartModal;
