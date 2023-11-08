import { Link } from "react-router-dom";
import { useNavbar } from "../../../context/NavbarContext";

interface CategoryProps {
  title: string;
  image: {
    sm: { width: string };
    lg: { width: string };
    src: string;
    alt: string;
  };
}

const Category = ({ title, image }: CategoryProps) => {
  const { menuOpened, toggleMenu } = useNavbar();

  const handleLinkClick = () => {
    if (menuOpened) toggleMenu();
  };

  return (
    <Link
      className="w-full uppercase"
      to={`/${title.toLowerCase()}`}
      onClick={handleLinkClick}
    >
      <div
        className={"relative rounded-lg bg-seashell pb-[1.3rem] pt-[5.1rem]"}
      >
        <img
          className={`
            absolute inset-x-0 top-[-3.125rem] mx-auto 
            lg:top-[-4.375rem] 
            ${image.sm.width} ${image.lg.width}`}
          src={image.src}
          alt={image.alt}
        />
        <h2
          className={`
            my-[0.65rem] text-[0.94rem] font-bold leading-5 tracking-[0.067rem]
            lg:mt-10 lg:text-lg`}
        >
          {title}
        </h2>
        <div>
          <div className="mr-[0.6rem] inline-block text-[0.81rem] font-bold tracking-[0.0626rem] opacity-50 hover:text-raw-sienna hover:opacity-100">
            Shop
          </div>
          <div className="inline-block h-[0.75rem] w-[0.5rem] bg-[url('/assets/shared/desktop/icon-arrow-right.svg')]"></div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
