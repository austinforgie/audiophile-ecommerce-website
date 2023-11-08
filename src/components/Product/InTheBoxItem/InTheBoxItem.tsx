import { FORMAT_CASE } from "../../../utilities";

interface InTheBoxItemProps {
  quantity: number;
  item: string;
}

const InTheBoxItem = ({ quantity, item }: InTheBoxItemProps) => (
  <li className="flex gap-6">
    <span className="text-[0.9375rem] font-bold leading-relaxed text-raw-sienna">
      {`${quantity}x`}
    </span>
    <p className="text-[0.9375rem] font-medium leading-relaxed opacity-50">
      {FORMAT_CASE(item, "start")}
    </p>
  </li>
);

export default InTheBoxItem;
