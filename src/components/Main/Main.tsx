import { nanoid } from "nanoid";
import { Categories } from "../Categories";
import { Featured } from "./Featured";
import { About } from "../About";
import featuredData from "../../data/featured";

const Main = () => {
  const featuredElements = featuredData.map((featured) => (
    <Featured
      key={nanoid()}
      slug={featured.slug}
      image={featured.image}
      heading={featured.name}
      description={featured?.description}
      category={featured.category}
    />
  ));

  return (
    <main>
      <Categories />
      <section
        className={`
          flex flex-col gap-6
          md:gap-8
          lg:gap-12`}
      >
        {featuredElements}
      </section>
      <About />
    </main>
  );
};

export default Main;
