import React from "react";
import { nanoid } from "nanoid";
import { Category } from "./Category";
import categoryData from "../../data/category";

const Categories = () => {
  const categoryElements = categoryData.map((category) => (
    <Category key={nanoid()} title={category.title} image={category.image} />
  ));

  return (
    <section
      className="flex flex-col items-center gap-16 text-center
                   md:mt-12 md:flex-row md:justify-center md:gap-2.5
                     lg:mt-[7.5rem] lg:gap-[1.875rem]"
    >
      {categoryElements}
    </section>
  );
};

export default Categories;
