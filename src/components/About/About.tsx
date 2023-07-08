const About = () => (
  <section
    className={`
      mt-1 text-center
      md:m-0
      lg:mt-8 lg:flex lg:flex-row-reverse lg:justify-between lg:text-left`}
  >
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="/assets/shared/desktop/image-best-gear.jpg"
      />
      <source
        media="(min-width: 768px)"
        srcSet="/assets/shared/tablet/image-best-gear.jpg"
      />
      <img
        className="mx-auto rounded-lg"
        src="/assets/shared/mobile/image-best-gear.jpg"
        alt="Person wearing headphones"
      />
    </picture>
    <div className="lg:flex lg:max-w-[27.8125rem] lg:flex-col lg:justify-center">
      <h2
        className={`
          mx-auto my-9 text-[1.75rem] font-bold uppercase tracking-[0.0625rem]
          md:mb-9 md:mt-16 md:max-w-[36rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.089rem]
          lg:mt-0`}
      >
        Bringing you the <span className="text-raw-sienna">best</span> audio
        gear
      </h2>
      <p
        className={`
          mx-auto text-[0.9375rem] font-medium leading-relaxed opacity-50
          md:max-w-[35.8125rem]`}
      >
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  </section>
);

export default About;
