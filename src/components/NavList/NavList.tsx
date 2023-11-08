import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

interface NavListProps {
  items: string[];
}

const NavList = ({ items }: NavListProps) => {
  const listItemElements = items.map((item) => (
    <li
      key={nanoid()}
      className="text-[0.8125rem] font-bold leading-[1.5625rem] tracking-[0.125rem]"
    >
      <Link
        className="text-white hover:text-raw-sienna"
        to={`/${item !== "Home" ? item.toLowerCase() : ""}`}
      >
        {item.toUpperCase()}
      </Link>
    </li>
  ));

  return (
    <ul
      className={`
        flex flex-col gap-4
        md:flex-row md:gap-[2.125rem]`}
    >
      {listItemElements}
    </ul>
  );
};

export default NavList;
