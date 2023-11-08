import { FORMAT_CURRENCY } from "../../utilities";

interface TotalProps {
  label: string;
  amount: number;
  type: "summary" | "confirmation";
}

interface Styles {
  [key: string]: { [key: string]: { amount: string; container: string } };
}

const Total = ({ label, amount, type }: TotalProps) => {
  const styles: Styles = {
    summary: {
      "Grand Total": { amount: "text-raw-sienna", container: "mb-8 mt-4" },
    },
    confirmation: {
      "Grand Total": {
        amount: "text-white",
        container: "pl-6 py-4 gap-2 flex-col",
      },
    },
  };

  return (
    <div
      className={`${
        styles[type][label]?.container ?? "text-black"
      } flex justify-between`}
    >
      <div
        className={`${
          type === "summary" || "text-white"
        } text-[0.9375rem] font-medium uppercase leading-[1.5625rem] opacity-50`}
      >
        {label}
      </div>
      <div
        className={`text-lg font-bold uppercase leading-[1.5625rem] ${
          styles[type][label]?.amount ?? ""
        }`}
      >
        {FORMAT_CURRENCY(amount)}
      </div>
    </div>
  );
};
export default Total;
