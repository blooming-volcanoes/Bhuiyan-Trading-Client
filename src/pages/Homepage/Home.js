import { useEffect, useState } from "react";
import Footer from "../../Components/common/Footer/Footer";
import Header from "../../Components/common/Header/Header";
import httpDashboardService from "../../services/dashboard.service";
import Banner from "./Banner/Banner";
import Future from "./Future/Future";
import OurBlogs from "./OurBlogs/OurBlogs";
import OurProducts from "./OurProducts/OurProducts";
import PopularProducts from "./PopularProducts/PopularProducts";
import ShipEquipment from "./ShipEquipment/ShipEquipment";
import WhoWe from "./WhoWe/WhoWe";

function Home() {
  const [headerData, setHeaderData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getHeaderData() {
      setLoader(true);
      try {
        const data = await httpDashboardService.getHeaderData();
        setHeaderData(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    getHeaderData();
  }, []);
  return (
    <>
      <Header />
      <Banner headerData={headerData} loader={loader} />
      <OurProducts />
      <WhoWe />
      <Future />
      <ShipEquipment />
      <OurBlogs />
      <PopularProducts />
      <Footer />
    </>
  );
}

export default Home;
