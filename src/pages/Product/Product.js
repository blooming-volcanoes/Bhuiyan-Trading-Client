import React, { useEffect, useState } from "react";

import AllProducts from "./AllProducts/AllProducts";
import Banner from "./Banner/Banner";
import MostPopularProducts from "./MostPopularProducts/MostPopularProducts";

import { useParams } from "react-router-dom";
import bannerImage from "../../assets/Images/pexels-kindel-media-8352350.jpg";
import LoadingButton from "../../Components/custom/Buttons/LoadingButton";
import PageLayout from "./../../layouts/PageLayout";
import httpProductService from "./../../services/product.service";

const Product = () => {
  const [imageUrl] = useState(bannerImage);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    httpProductService
      .getProductByCateGory(id)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  console.log(products);

  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center space-y-4">
          <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
        </div>
      ) : (
        <PageLayout>
          <Banner bannerImage={imageUrl} />
          <MostPopularProducts products={products} />
          <AllProducts products={products} />
        </PageLayout>
      )}
    </>
  );
};

export default Product;
