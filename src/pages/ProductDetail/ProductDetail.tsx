import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import { nanoid } from "nanoid";
import {
  Categories,
  Product,
  About,
  Footer,
  InTheBoxItem,
} from "../../components";
import productData from "../../data/products";
import { useCart } from "../../context/CartContext";
import { FORMAT_CURRENCY } from "../../utilities";

interface Styles {
  [key: string]: { picture?: string; img?: string };
}

const ProductDetail = () => {
  const { addToCart } = useCart();
  const INITIAL_QUANTITY = 1;
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const slug = pathname.slice(pathname.lastIndexOf("/") + 1);
  const [targetProduct] = productData.filter(
    (product) => product.slug === slug
  );

  useEffect(() => {
    setQuantity(INITIAL_QUANTITY);
  }, [pathname]);

  useScrollToTop();

  const updateQuantity = (amount: number) => {
    setQuantity((prevQuantity) =>
      prevQuantity + amount > INITIAL_QUANTITY
        ? prevQuantity + amount
        : INITIAL_QUANTITY
    );
  };

  const galleryImages = Object.entries(targetProduct.gallery).map(
    ([index, screenType]) => {
      const styles: Styles = {
        first: { img: "h-full" },
        second: { picture: "md:row-start-2", img: "h-full" },
        third: { picture: "md:col-start-2 md:row-span-full" },
      };

      return (
        <picture key={nanoid()} className={styles[index].picture}>
          <source
            media="(min-width: 1440px)"
            srcSet={`.${screenType.desktop}`}
          />
          <source media="(min-width: 768px)" srcSet={`.${screenType.tablet}`} />
          <img
            className={`${styles[index].img ?? ""} rounded-lg`}
            src={`.${screenType.mobile}`}
            alt={`${index} gallery item`}
          />
        </picture>
      );
    }
  );

  const extractCategory = (slug: string) => {
    let category = slug.slice(slug.lastIndexOf("-") + 1);
    category += slug.endsWith("r") ? "s" : "";
    return category;
  };

  const recommendedProducts = targetProduct.others.map(
    ({ image, slug, name }) => {
      const images = { ...image };
      Object.keys(images).forEach((screenType) => {
        images[screenType as keyof typeof images] =
          images[screenType as keyof typeof images].slice(1);
      });

      return (
        <Product
          key={nanoid()}
          slug={slug}
          name={name}
          images={images}
          category={extractCategory(slug)}
          type="recommended"
        />
      );
    }
  );

  const inTheBoxItems = targetProduct.includes.map(({ quantity, item }) => (
    <InTheBoxItem key={nanoid()} quantity={quantity} item={item} />
  ));

  return (
    <>
      <main
        className={`
          gap-[5.5rem]
          md:gap-[7.5rem] md:pb-28 md:pt-3
          lg:gap-[10rem] lg:pb-40`}
      >
        <section className="flex flex-col">
          <button
            type="button"
            className={`
              mb-6 mt-4 self-start text-base font-medium leading-relaxed opacity-50 hover:underline
              lg:mb-14 lg:mt-16`}
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <div
            className={`
              flex flex-col items-center
              md:flex-row md:justify-center md:gap-[4.2rem]
              lg:gap-[7.78125rem]`}
          >
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`.${targetProduct.image.desktop}`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`.${targetProduct.image.tablet}`}
              />
              <img
                className={`
                  max-w-[20.4rem] rounded-lg
                  md:max-w-[17.6rem]
                  lg:max-w-[33.75rem]`}
                src={`.${targetProduct.image.mobile}`}
                alt={targetProduct.name}
              />
            </picture>

            <div>
              {targetProduct.new && (
                <div
                  className={`
                    mt-8 text-sm font-normal uppercase leading-relaxed tracking-[0.625rem] text-raw-sienna
                    md:mb-2 md:mt-0 md:text-xs md:leading-4 md:tracking-[0.54rem]`}
                >
                  New Product
                </div>
              )}
              <h1
                className={`
                  mb-5 ${
                    !targetProduct.new ? "mb-6 mt-9" : "mt-4"
                  } max-w-[12.9rem] text-[1.75rem] font-bold uppercase tracking-[0.0625rem]
                  md:mb-6 md:mt-0 md:max-w-[12rem]
                  lg:mb-8 lg:mt-4 lg:max-w-[28.4375rem] lg:text-[2.5rem] lg:leading-[2.75rem] lg:tracking-[0.089rem]`}
              >
                {targetProduct.name}
              </h1>
              <p className="text-[0.9375rem] font-medium leading-relaxed opacity-50">
                {targetProduct.description}
              </p>
              <div className="mb-[1.9375rem] mt-6 text-lg font-bold tracking-[0.08rem] lg:mb-11 lg:mt-7">
                {FORMAT_CURRENCY(targetProduct.price)}
              </div>
              <div className="flex gap-4">
                <div className="flex w-28 items-center justify-evenly bg-seashell">
                  <button
                    type="button"
                    className="font-bold opacity-25 hover:text-raw-sienna hover:opacity-100"
                    onClick={() => updateQuantity(-1)}
                  >
                    <span className=" ">-</span>
                  </button>
                  <div className="text-[0.8125rem] font-bold">{quantity}</div>
                  <button
                    className="font-bold opacity-25 hover:text-raw-sienna hover:opacity-100"
                    onClick={() => updateQuantity(1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="btn bg-raw-sienna text-white hover:bg-hit-pink"
                  onClick={() =>
                    addToCart({ ...targetProduct, quantity }, quantity)
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`
            flex flex-col gap-[5.5rem]
            md:gap-[7.5rem] 
            lg:flex-row`}
        >
          <div>
            <h2
              className={`
                mb-6 text-2xl font-bold
                md:mb-8 md:text-[2rem] md:leading-9 md:tracking-[0.07rem]`}
            >
              FEATURES
            </h2>
            <p
              className={`
                whitespace-pre-line text-[0.9375rem] font-medium leading-relaxed opacity-50
                lg:max-w-[39.6875rem]`}
            >
              {targetProduct.features}
            </p>
          </div>
          <div
            className={`
              md:mb-0 md:flex 
              lg:flex-col`}
          >
            <h2
              className={`
                mb-6 text-2xl font-bold
                md:text-[2rem] md:leading-9 md:tracking-[0.07rem]`}
            >
              IN THE BOX
            </h2>
            <ul
              className={`
                flex flex-col gap-[0.4rem]
                md:mx-auto`}
            >
              {inTheBoxItems}
            </ul>
          </div>
        </section>
        <section
          className={`
            mx-auto grid gap-5
            md:grid md:grid-cols-[2fr,_3fr] md:grid-rows-2`}
        >
          {galleryImages}
        </section>
        <section
          className={`
            mb-20 flex flex-col items-center gap-14
            md:mb-0`}
        >
          <h2
            className={`
              -mb-4 mt-7 text-2xl font-bold uppercase
              md:mb-1 md:mt-0 md:text-[2rem] md:leading-9 md:tracking-[0.07rem]`}
          >
            You may also like
          </h2>
          <div
            className={`
              flex flex-col gap-14 
              md:flex-row md:gap-2.5 md:text-center
              lg:gap-[1.875rem]`}
          >
            {recommendedProducts}
          </div>
        </section>
        <Categories />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
