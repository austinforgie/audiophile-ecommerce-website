import { nanoid } from "nanoid";
import { FORMAT_CURRENCY, SHORTEN_PRODUCT_NAME } from "../../../utilities";
import { useCart, Cart, CartItem as Item } from "../../../context/CartContext";
import { QuantityButton } from "./QuantityButton";

export interface CartItemProps {
  item: Item | undefined;
  options: { counter: boolean };
}

const CartItem = ({ item, options }: CartItemProps) => {
  const { getItemQuantity }: Cart = useCart();

  return (
    item && (
      <div key={nanoid()} className="flex items-center gap-4">
        <img
          className="rounded-lg"
          src={`/assets/cart/image-${item.slug}.jpg`}
          width={64}
          height={64}
          alt={item.name}
        />
        <div>
          <div
            className={`
              text-[0.9375rem] font-bold leading-[1.5625rem]
              md:mr-[1.3125rem]`}
          >
            {SHORTEN_PRODUCT_NAME(item)}
          </div>
          <div className="text-sm font-bold leading-[1.5625rem] opacity-50">
            {FORMAT_CURRENCY(item.price)}
          </div>
        </div>
        {options.counter ? (
          <div className="ml-auto flex h-8 items-center justify-evenly bg-[#f1f1f1]">
            <QuantityButton
              label="-"
              itemId={item.id}
              quantity={-1}
            ></QuantityButton>
            <div className="w-6 text-center text-[0.8125rem] font-bold">
              {getItemQuantity(item.id)}
            </div>
            <QuantityButton
              label="+"
              itemId={item.id}
              quantity={1}
            ></QuantityButton>
          </div>
        ) : (
          <div
            className={`
              mb-auto ml-auto mt-[0.45rem] text-base font-bold leading-6 opacity-50
              md:mt-1.5`}
          >
            {`x${getItemQuantity(item.id)}`}
          </div>
        )}
      </div>
    )
  );
};

export default CartItem;
