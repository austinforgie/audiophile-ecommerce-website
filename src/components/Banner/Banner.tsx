interface BannerProps {
  category: string;
}

const Banner = ({ category }: BannerProps) => (
  <div
    className={`
      mb-16 bg-black px-[1.4rem] py-[1.8rem] text-center
      md:mb-[7.5rem] md:pb-24 md:pt-[6.5625rem]
      lg:mb-40`}
  >
    <h1
      className={`
        text-[1.75rem] font-bold tracking-[0.125rem] text-white
        md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.09rem]`}
    >
      {category.toUpperCase()}
    </h1>
  </div>
);

export default Banner;
