import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { Categories } from "../../Categories";
import { useNavbar } from "../../../context/NavbarContext";
import NavList from "../../NavList/NavList";

const Navbar = () => {
  const items = ["Home", "Headphones", "Speakers", "Earphones"];

  const { cartOpened, toggleCart } = useCart();
  const { menuOpened, toggleMenu } = useNavbar();

  const handleCartClick = () => {
    if (!menuOpened) toggleCart();
  };

  const handleMenuClick = () => {
    if (!cartOpened) toggleMenu();
  };

  return (
    <>
      {menuOpened && (
        <aside
          className={`
            fixed top-[5.625rem] z-50 h-full w-full bg-black bg-opacity-40
            lg:hidden`}
        >
          <div
            role="dialog"
            className={`
              mx-auto rounded-b-lg bg-white px-7 pb-[1.9375rem] pt-20
              md:px-10 md:pb-[4.1875rem] md:pt-16`}
          >
            <Categories />
          </div>
        </aside>
      )}
      <div className="sticky top-0 z-50 bg-black">
        <nav
          className={`
            mx-auto px-[1.4rem] py-[2rem] text-white
            md:max-w-[58.5rem] md:px-[2.5rem]
            lg:max-w-[69.375rem] lg:px-0 lg:py-[2.1875rem]`}
        >
          <ul className="flex list-none items-center justify-between">
            <li className="lg:hidden">
              <button
                type="button"
                onClick={handleMenuClick}
                className="border-none bg-transparent"
              >
                <img
                  src={"/assets/shared/tablet/icon-hamburger.svg"}
                  width={16}
                  height={15}
                  alt="Menu icon"
                />
              </button>
            </li>
            <li
              className={`
                md:ml-[2.625rem] md:mr-auto
                lg:m-0`}
            >
              <Link to={"/"}>
                <img
                  src={"/assets/shared/desktop/logo.svg"}
                  width={143}
                  height={25}
                  alt="Audiophile logo"
                />
              </Link>
            </li>
            <li
              className={`
                hidden
                lg:mr-auto lg:block lg:pl-[12.3125rem]`}
            >
              <NavList items={items} />
            </li>
            <li>
              <button
                type="button"
                className="border-none bg-transparent"
                onClick={handleCartClick}
              >
                <img
                  src={"/assets/shared/desktop/icon-cart.svg"}
                  width={23}
                  height={20}
                  alt="Cart icon"
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
