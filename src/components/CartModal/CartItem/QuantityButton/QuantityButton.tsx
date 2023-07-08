import { useCart, Cart } from "../../../../context/CartContext";

interface QuantityButtonProps {
  label: string;
  quantity: number;
  itemId: number;
}

const QuantityButton = ({ label, quantity, itemId }: QuantityButtonProps) => {
  const { updateItemQuantity }: Cart = useCart();
  const handleButtonClick = () => updateItemQuantity(itemId, quantity);

  return (
    <button
      type="button"
      className="border-none px-3.5 font-bold opacity-25 hover:text-raw-sienna hover:opacity-100"
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};

export default QuantityButton;
