import { Category } from "./Category";
import categoryData from "../../data/category";

const Categories = () => {
  const categoryElements = categoryData.map(({ id, title, image }) => (
    <Category key={id} title={title} image={image} />
  ));

  return (
    <section
      className={`
        flex flex-col items-center gap-16 text-center
        md:mt-12 md:flex-row md:justify-center md:gap-2.5
        lg:mt-[7.5rem] lg:gap-[1.875rem]`}
    >
      {categoryElements}
    </section>
  );
};

export default Categories;
