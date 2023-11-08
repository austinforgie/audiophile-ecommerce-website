import { Link } from "react-router-dom";
import "./Featured.css";

interface FeaturedProps {
  slug: string;
  image: { src: { sm: string; md: string; lg: string }; alt: string };
  heading: string;
  description?: string;
  category: string;
}

const Featured = ({
  slug,
  image: {
    src: { sm, md, lg },
    alt,
  },
  heading,
  description,
  category,
}: FeaturedProps) => {
  let modifier;
  if (heading.includes("ZX9")) {
    modifier = "--dark";
  } else if (heading.includes("ZX7") || heading.includes("YX1")) {
    modifier = "--transparent";
  }

  return (
    <div className={`Featured__${slug} rounded-lg`}>
      <picture className="Featured__picture">
        <source media="(min-width: 1440px)" srcSet={lg} />
        <source media="(min-width: 768px)" srcSet={md} />
        <img
          className={`Featured__${slug}-image rounded-lg`}
          src={sm}
          alt={alt}
        />
      </picture>

      <div
        className={`Featured__${slug}-content flex flex-col justify-center rounded-lg`}
      >
        <h2 className={`Featured__${slug}-heading font-bold`}>
          {heading.toUpperCase()}
        </h2>
        {description && (
          <p className={`Featured__${slug}-description`}>{description}</p>
        )}
        <Link
          className={`
            Featured__link${modifier} btn
            lg:mr-auto`}
          to={`${category}/${slug}`}
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default Featured;
