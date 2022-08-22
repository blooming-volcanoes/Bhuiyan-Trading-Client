import Banner from "./Banner/Banner";
import Future from "./Future/Future";
import Header from "./Header/Header";
import OurProducts from "./OurProducts/OurProducts";
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
    </div>
  );
}

export default Home;
