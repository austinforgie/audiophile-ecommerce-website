import { Link } from "react-router-dom";

interface ProductProps {
  slug: string;
  isNew?: boolean;
  name: string;
  images: { mobile: string; tablet: string; desktop: string };
  description?: string;
  category: string;
  type: "default" | "recommended";
}

const Product = ({
  slug,
  isNew,
  name,
  images,
  description,
  category,
  type,
}: ProductProps) => {
  const styles = {
    default: {
      container: "lg:gap-[7.8125rem] odd:lg:flex-row even:lg:flex-row-reverse",
      h2: `text-[1.75rem] leading-9 tracking-[0.0625rem] max-w-[17rem] lg:mt-0
      ${
        !isNew ? "mt-8 md:mt-[3.25rem]" : "mt-0 lg:mt-5"
      } md:mt-7 md:max-w-[20rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.09rem]`,
      img: "lg:max-w-[33.75rem]",
      content: "lg:gap-9",
    },
    recommended: {
      container: "lg:gap-0",
      h2: "text-2xl mt-8 md:mb-1 md:mt-10 md:leading-[2.0625rem] md:tracking-[0.107rem] lg:mx-auto",
      img: "lg:max-w-[21.875rem]",
      content: null,
    },
  };

  return (
    <div
      className={`
        flex flex-col items-center
        lg:text-left
        ${styles[type].container}`}
    >
      <picture>
        <source media="(min-width: 1440px)" srcSet={images.desktop} />
        <source media="(min-width: 768px)" srcSet={images.tablet} />
        <img
          className={`rounded-lg ${styles[type].img}`}
          src={images.mobile}
          alt={name}
        />
      </picture>
      <div
        className={`
          flex flex-col items-center gap-6 
          ${styles[type]?.content ?? ""}`}
      >
        {isNew && (
          <div
            className={`
              mt-8 text-[0.88rem] font-normal uppercase tracking-[0.625rem] text-raw-sienna
              md:-mb-10 md:mt-12
              lg:mr-auto lg:mt-0`}
          >
            New Product
          </div>
        )}
        <h2
          className={`
            ${styles[type].h2} font-bold uppercase
            lg:mr-auto`}
        >
          {name}
        </h2>
        {description && (
          <p
            className={`
              text-[0.9375rem] font-medium leading-relaxed opacity-50
              md:max-w-[35rem]`}
          >
            {description}
          </p>
        )}
        <Link
          className={`
            btn bg-raw-sienna text-white hover:bg-hit-pink
            lg:mr-auto`}
          to={`/${category}/${slug}`}
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default Product;
