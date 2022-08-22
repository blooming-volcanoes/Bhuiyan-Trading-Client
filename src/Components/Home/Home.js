import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import OurProducts from "./OurProducts/OurProducts";
import WhoWe from "./WhoWe/WhoWe";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <OurProducts />
      <WhoWe />
    </div>
  );
}

export default Home;
