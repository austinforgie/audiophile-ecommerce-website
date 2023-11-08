import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartItem } from "../CartModal";
import { Total } from "../Total";

interface ConfirmationModalProps {
  grandTotal: number;
}

const ConfirmationModal = ({ grandTotal }: ConfirmationModalProps) => {
  const { cartItems, getCartQuantity, getItemQuantity, clearCart } = useCart();
  const FIRST_CART_ITEM = cartItems.slice(0, 1).shift();
  const REMAINING_ITEMS =
    getCartQuantity() - getItemQuantity(FIRST_CART_ITEM?.id ?? 0);

  return (
    <aside className="fixed top-0 z-50 flex h-screen w-full flex-col justify-center bg-black bg-opacity-40 px-6">
      <div
        role="dialog"
        className={`
          mx-auto flex max-w-[20.4375rem] flex-col gap-8 rounded-lg bg-white px-8 pb-[1.9375rem] pt-8
          md:max-w-[33.75rem] md:p-12`}
      >
        <div className="mr-auto rounded-full bg-raw-sienna text-white">
          <img
            src={"/assets/checkout/icon-order-confirmation.svg"}
            width={64}
            height={64}
            alt="White checkmark"
          />
        </div>
        <div>
          <h1
            className={`
              mb-4 text-2xl font-bold uppercase leading-7 tracking-[0.05rem] text-black
              md:mb-6 md:max-w-[17.75rem] md:text-[2rem] md:leading-9 md:tracking-[0.07rem]`}
          >
            Thank you for your order
          </h1>
          <p className="text-[0.9375rem] font-medium leading-6 text-black opacity-50">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="md:flex">
          <div
            className={`
              rounded-t-lg bg-seashell px-6 py-6
              md:rounded-none md:rounded-l-lg`}
          >
            <CartItem item={FIRST_CART_ITEM} options={{ counter: false }} />
            {REMAINING_ITEMS > 0 && (
              <>
                <div>
                  <hr
                    className={`
                      mb-3 mt-2 
                      md:mt-1`}
                  />
                </div>
                <span className="block text-center text-xs font-bold leading-4 opacity-50">
                  {`and ${REMAINING_ITEMS} other item(s)`}
                </span>
              </>
            )}
          </div>
          <div
            className={`
              rounded-b-lg bg-black
              md:flex md:flex-col md:justify-center md:rounded-none md:rounded-r-lg md:pr-16`}
          >
            <Total
              label={"Grand Total"}
              amount={grandTotal}
              type="confirmation"
            />
          </div>
        </div>
        <Link
          to={"/"}
          className={`
            btn block bg-raw-sienna text-center text-white hover:bg-[#FBAF85]
            md:mt-3`}
          onClick={clearCart}
        >
          Back to home
        </Link>
      </div>
    </aside>
  );
};

export default ConfirmationModal;
