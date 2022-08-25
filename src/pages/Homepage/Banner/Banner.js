function Banner() {
  return (
    <section className="banner-bg h-screen">
      <div className="main-container flex h-full items-center justify-center md:justify-start">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white md:text-4xl">Welcome</h3>
          <h1 className="text-[50px] font-bold text-white md:text-[70px]">
            Bhuiyan Trading
          </h1>
          <h3 className="text-2xl font-bold text-white md:text-4xl">
            Corporation
          </h3>
          <button className="banner-btn" type="button">
            Our Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
