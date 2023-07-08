import { useLocation } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Categories, About, Footer, Product, Banner } from "../../components";
import productsData from "../../data/products";

const Products = () => {
  const { pathname } = useLocation();
  const category = pathname.slice(1);

  useScrollToTop();

  const productElements = productsData
    .filter((product) => product.category === category)
    .sort((a, b) => b.id - a.id)
    .map((filteredProduct) => (
      <Product
        key={filteredProduct.id}
        slug={filteredProduct.slug}
        isNew={filteredProduct.new}
        name={filteredProduct.name}
        description={filteredProduct.description}
        images={filteredProduct.categoryImage}
        category={filteredProduct.category}
        type="default"
      />
    ));

  return (
    <>
      <header>
        <Banner category={category} />
      </header>
      <main
        className={`
          md:gap-32 md:pb-[7.5rem]
          lg:pb-40`}
      >
        <section
          className={`
            mb-16 flex flex-col gap-[7.5rem] text-center
            md:mb-0 md:gap-[7.5rem]
            lg:gap-[10rem]`}
        >
          {productElements}
        </section>
        <Categories />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Products;
