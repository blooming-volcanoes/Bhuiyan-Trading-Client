// import BannerImg from "../../../assets/Images/bg.jpg";
import whiteBg from "../../../assets/Images/white-bg.jpg";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";

function Banner({ headerData, loader }) {
  return (
    <>
      {loader ? (
        <div className="flex h-screen items-center justify-center space-y-4">
          <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
        </div>
      ) : (
        <section
          id="HomeBanner"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
       url(${headerData ? headerData?.backgroundImg : whiteBg})`,
          }}
          className="h-screen bg-cover bg-center bg-no-repeat"
        >
          <div className="main-container flex h-full items-center justify-center md:justify-start">
            <div className="animate__animated animate__fadeInLeft text-center md:text-left">
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                {headerData?.mainTitle || "Welcome"}
              </h3>
              <h1 className="text-[50px] font-bold text-white md:text-[70px]">
                {headerData?.secondTitle || "Bhuiyan Trading"}
              </h1>
              <h3 className="text-2xl font-bold text-white md:text-4xl">
                {headerData?.thirdTitle || "Corporation"}
              </h3>

              <button
                onClick={() =>
                  window.scrollTo({
                    top:
                      document.getElementById("HomeBanner")?.offsetHeight - 100,
                    behavior: "smooth",
                  })
                }
                className="banner-btn"
                type="button"
              >
                Our Products
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Banner;
