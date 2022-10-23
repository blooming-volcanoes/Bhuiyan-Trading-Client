import { useEffect, useState } from "react";
import Footer from "../../Components/common/Footer/Footer";
import Header from "../../Components/common/Header/Header";
import httpCateGoryService from "../../services/category.service";
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

  const [cateGories, setCateGories] = useState([]);
  const [categoryLoader, setCategoryLoader] = useState(false);

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

  useEffect(() => {
    let isMuted = true;
    setCategoryLoader(true);
    async function getProducts() {
      try {
        const data = await httpCateGoryService.getAllCategory();
        isMuted && setCateGories(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    }
    getProducts();
    setCategoryLoader(false);

    return () => {
      isMuted = false;
    };
  }, []);
  return (
    <>
      <Header />
      <Banner headerData={headerData} loader={loader} />
      <OurProducts cateGories={cateGories} loader={categoryLoader} />
      <WhoWe />
      <Future />
      <ShipEquipment />
      <OurBlogs />
      <PopularProducts cateGories={cateGories} loader={categoryLoader} />
      <Footer />
    </>
  );
}

export default Home;
