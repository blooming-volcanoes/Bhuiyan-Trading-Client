import bg from "../../../assets/Images/bg.jpg";

function Banner() {
  return (
    <section
      className="flex h-full min-h-[550px] bg-center bg-no-repeat p-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bg}')`,
      }}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-10 lg:items-start lg:justify-start">
        <h1 className="text-center text-6xl font-bold text-white lg:text-start lg:text-7xl ">
          <span className="text-xl font-medium lg:text-3xl"> Welcome</span>{" "}
          <br /> Bhuiya Trading <br />{" "}
          <span className="text-2xl font-medium lg:text-4xl">Corporation</span>
        </h1>

        <button
          className="w-full rounded border-2 border-red-500 bg-white py-2  px-6 font-medium text-red-500 hover:bg-gray-100 lg:w-[200px]"
          type="button"
        >
          Our Products
        </button>
      </div>
    </section>
  );
}

export default Banner;
