import Banner from "./Banner/Banner";
import Future from "./Future/Future";
import Header from "./Header/Header";
import OurProducts from "./OurProducts/OurProducts";
import PopularProducts from "./PopularProducts/PopularProducts";
import Search from "./Search/Search";
import ShipEquipment from "./ShipEquipment/ShipEquipment";
import WhoWe from "./WhoWe/WhoWe";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <OurProducts />
      <WhoWe />
      <Future />
      <ShipEquipment />
      <Search />
      <PopularProducts />
    </div>
  );
}

export default Home;
