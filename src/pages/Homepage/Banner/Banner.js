import { useEffect, useState } from "react";
import httpDashboardService from "./../../../services/dashboard.service";

function Banner() {
  const [headerData, setHeaderData] = useState(null);
  useEffect(() => {
    async function getHeaderData() {
      try {
        const data = await httpDashboardService.getHeaderData();
        setHeaderData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getHeaderData();
  }, []);

  return (
    <section className="banner-bg h-screen">
      <div className="main-container flex h-full items-center justify-center md:justify-start">
        <div className="animate__animated animate__fadeInLeft text-center md:text-left">
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
