import NavList from "../NavList/NavList";

const Footer = () => {
  const items = ["Home", "Headphones", "Speakers", "Earphones"];

  return (
    <div className="bg-cod-gray">
      <footer
        className={`
          relative mx-auto flex list-none flex-col items-center gap-[3.1rem] bg-cod-gray px-6 pb-8 pt-[3.2rem] text-center text-white
          md:max-w-[61rem] md:items-start md:gap-8 md:px-[2.4375rem] md:pb-12 md:pt-14 md:text-left
          lg:max-w-[69.375rem] lg:px-0 lg:pt-[4.6875rem]`}
      >
        <div className="absolute top-0 h-1 w-[6.31rem] bg-raw-sienna"></div>
        <div
          className={`
            flex flex-col gap-[3.1rem]
            md:gap-8
            lg:w-full lg:flex-row lg:justify-between lg:gap-0`}
        >
          <img
            src={"/assets/shared/desktop/logo.svg"}
            width={143}
            height={25}
            alt="Audiophile logo"
          />
          <nav>
            <NavList items={items} />
          </nav>
        </div>

        <p
          className={`
            max-w-[32rem] text-[0.9375rem] opacity-50
            md:max-w-[43rem]
            lg:max-w-[33.75rem]`}
        >
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div
          className={`
            flex w-full flex-col items-center gap-[3.1rem]
            md:flex-row md:justify-between`}
        >
          <div
            className={`
              text-[0.9375rem] font-bold leading-[1.5625rem] text-white opacity-50
              md:mt-12
              lg:mt-6`}
          >
            Copyright 2021. All Rights Reserved
          </div>
          <div className="flex gap-4">
            <a href="/">
              <img
                src={"/assets/shared/desktop/icon-facebook.svg"}
                width={24}
                height={24}
                alt="Facebook logo"
              />
            </a>
            <a href="/">
              <img
                src={"/assets/shared/desktop/icon-twitter.svg"}
                width={24}
                height={20}
                alt="Twitter logo"
              />
            </a>
            <a href="/">
              <img
                src={"/assets/shared/desktop/icon-instagram.svg"}
                width={24}
                height={24}
                alt="Instagram logo"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
