import { Link } from "react-router-dom";

const Hero = () => (
  <div
    className={`
      mx-auto max-w-[23.4375rem] bg-main-hero-sm bg-cover bg-bottom bg-no-repeat py-28 
      md:max-w-[48rem] md:bg-main-hero-md md:pb-[10.4375rem] md:pt-[7.875rem]
      lg:max-w-[90rem] lg:bg-main-hero-lg lg:bg-bottom lg:px-[10rem] lg:pt-[7.5rem]`}
  >
    <div
      className={`
        mx-auto flex max-w-[20.5rem] flex-col items-center text-center text-white
        md:max-w-[24.75rem]
        lg:m-0 lg:text-left`}
    >
      <h1
        className={`
          mb-6 text-4xl uppercase tracking-[0.08rem]
          md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[0.125rem]`}
      >
        <span
          className={`
            mb-4 block text-sm font-normal tracking-[0.625rem] opacity-50
            md:mb-6`}
        >
          New product
        </span>
        XX99 Mark II Headphones
      </h1>
      <p
        className={`
          mb-[1.7rem] text-[0.94rem] font-medium leading-6 opacity-75
          md:mb-10 md:px-4
          lg:mr-auto lg:max-w-[349px] lg:px-0`}
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link
        className={`
          btn bg-raw-sienna text-white hover:bg-hit-pink
          lg:mr-auto`}
        to={"/headphones/xx99-mark-two-headphones"}
      >
        See Product
      </Link>
    </div>
  </div>
);

export default Hero;
