import React from "react";
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
      <a
        className="text-white hover:text-raw-sienna"
        href={`/${item !== "Home" ? item.toLowerCase() : ""}`}
      >
        {item.toUpperCase()}
      </a>
    </li>
  ));

  return (
    <ul
      className="flex flex-col gap-4
                   md:flex-row md:gap-[2.125rem]"
    >
      {listItemElements}
    </ul>
  );
};

export default NavList;
