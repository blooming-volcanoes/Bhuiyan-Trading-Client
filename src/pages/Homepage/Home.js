import PageLayout from "../../layouts/PageLayout";
import Banner from "./Banner/Banner";
import Future from "./Future/Future";
import OurBlogs from "./OurBlogs/OurBlogs";
import OurProducts from "./OurProducts/OurProducts";
import PopularProducts from "./PopularProducts/PopularProducts";
import ShipEquipment from "./ShipEquipment/ShipEquipment";
import WhoWe from "./WhoWe/WhoWe";

function Home() {
  return (
    <PageLayout>
      <Banner />
      <OurProducts />
      <WhoWe />
      <Future />
      <ShipEquipment />
      <OurBlogs />
      <PopularProducts />
    </PageLayout>
  );
}

export default Home;
