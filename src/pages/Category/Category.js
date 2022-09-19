import React, { useEffect, useRef, useState } from "react";

import Header from "../../components/common/Header/Header";
import { getAverageColor } from "../../lib/lib";
import Footer from "./../../components/common/Footer/Footer";
import AllProducts from "./AllProducts/AllProducts";
import Banner from "./Banner/Banner";
import MostPopularProducts from "./MostPopularProducts/MostPopularProducts";

const Category = () => {
  const image = useRef();
  const [color, setColor] = useState(null);
  const [imageUrl] = useState("https://picsum.photos/id/888/500/300");

  useEffect(() => {
    image.current.onload = () => {
      const { R, G, B } = getAverageColor(image.current, 4);
      setColor({ R, G, B });
    };
  }, []);
  return (
    <>
      <Header color={color} />
      <Banner bannerImage={imageUrl} />
      <MostPopularProducts />
      <AllProducts />
      <Footer />

      {/* the image below is not shown on the UI, rather used to find the average color of the banner image */}
      <img
        ref={image}
        src={imageUrl}
        crossOrigin=""
        alt="hello"
        className="hidden"
      />
    </>
  );
};

export default Category;
