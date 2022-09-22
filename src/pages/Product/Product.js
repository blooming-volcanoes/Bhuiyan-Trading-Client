import React, { useEffect, useState } from "react";

import AllProducts from "./AllProducts/AllProducts";
import Banner from "./Banner/Banner";
import MostPopularProducts from "./MostPopularProducts/MostPopularProducts";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import bannerImage from "../../assets/Images/pexels-kindel-media-8352350.jpg";
import httpProductService from "./../../services/product.service";

const Product = () => {
  const [imageUrl] = useState(bannerImage);
  const user = useSelector((state) => state.auth.user);
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    httpProductService
      .getProductByCateGory(id, {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      })
      .then((data) => {
        setProducts(data);
      });
  }, [id, user]);

  console.log(products);

  return (
    <>
      <Banner bannerImage={imageUrl} />
      <MostPopularProducts products={products} />
      <AllProducts products={products} />
    </>
  );
};

export default Product;
