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
  const [filteredProductsBySubCate, setFilteredProductsBySubCate] =
    useState(null);
  const [modifiedSubCategories, setModifiedSubCategories] = useState([]);
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

  useEffect(() => {
    if (products.length) {
      const tempSub = [];
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].subCategoryName.length; j++) {
          const element = products[i].subCategoryName[j];
          if (tempSub[j]?.title !== element) {
            tempSub.push({
              title: element,
              featureImg: products[i].featureImg,
            });
          }
        }
      }

      setModifiedSubCategories(tempSub);
    }
  }, [products]);

  const handelFilterProductBySubCategory = (subCategory) => {
    const filtered = products.filter((pd) =>
      pd.subCategoryName.includes(subCategory)
    );
    setFilteredProductsBySubCate(filtered);
    window.scrollTo(0, 1000);
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center space-y-4">
          <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
        </div>
      ) : (
        <PageLayout>
          <div className="bg-gray-100">
            <Banner bannerImage={imageUrl} />
            <MostPopularProducts
              products={products}
              modifiedSubCategories={modifiedSubCategories}
              handelFilterProductBySubCategory={
                handelFilterProductBySubCategory
              }
            />
            <AllProducts
              products={products}
              filteredProductsBySubCate={filteredProductsBySubCate}
            />
          </div>
        </PageLayout>
      )}
    </>
  );
};

export default Product;
