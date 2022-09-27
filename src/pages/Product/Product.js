import React, { useEffect, useState } from "react";

import AllProducts from "./AllProducts/AllProducts";
import Banner from "./Banner/Banner";
import MostPopularProducts from "./MostPopularProducts/MostPopularProducts";

import { useParams, useSearchParams } from "react-router-dom";
import bannerImage from "../../assets/Images/pexels-kindel-media-8352350.jpg";
import LoadingButton from "../../Components/custom/Buttons/LoadingButton";
import PageLayout from "./../../layouts/PageLayout";
import httpCateGoryService from "./../../services/category.service";
import httpProductService from "./../../services/product.service";

const Product = () => {
  const [imageUrl] = useState(bannerImage);
  const [data, setProducts] = useState([]);

  const [filteredProductsBySubCate, setFilteredProductsBySubCate] =
    useState(null);
  const [modifiedSubCategories, setModifiedSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterBySubLoader, setFilterBySubLoader] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams] = useSearchParams();
  const [isDataLimitDone, setIsDataLimitDone] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    httpProductService
      .getProductByCateGory(id, searchParams.get("page"))
      .then((data) => {
        setProducts(data);
        setSearchResult(data);
        if (!data.length || data.length < 10) {
          setIsDataLimitDone(true);
        } else {
          setIsDataLimitDone(false);
        }

        setSearchResult(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, searchParams]);

  useEffect(() => {
    if (data.length) {
      httpCateGoryService
        .getSingleCategoryById(data[0].categoryId)
        .then((data) => {
          const sub = [];
          for (let i = 0; i < data[0]?.subCategoryName.length; i++) {
            if (sub[i]?.title !== data[0].subCategoryName[i]) {
              sub.push({
                title: data[0].subCategoryName[i],
                featureImg: data[0].galleryImg[i],
              });
            }
          }
          setModifiedSubCategories(sub);
        });
    }

    // httpProductService
    //   .getAllProductByCateGory(id)
    //   .then((data) => {
    //     if (data.length) {
    //       const tempSub = [];
    //       for (let i = 0; i < data.length; i++) {
    //         for (let j = 0; j < data[i].subCategoryName.length; j++) {
    //           const element = data[i].subCategoryName[j];
    //           if (tempSub[j]?.title !== element) {
    //             tempSub.push({
    //               title: element,
    //               featureImg: data[i].categoryGallay[j],
    //             });
    //           }
    //         }
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [id, data]);

  const handelFilterProductBySubCategory = async (subCategory) => {
    // const filtered = products.filter((pd) =>
    //   pd.subCategoryName.includes(subCategory)
    // );
    setFilterBySubLoader(true);
    if (subCategory) {
      try {
        const data = await httpCateGoryService.getProductBySubCategory(
          subCategory
        );
        setFilteredProductsBySubCate(data);
      } catch (error) {
        setFilterBySubLoader(false);
        console.log(error);
      }
      setFilterBySubLoader(false);
    } else {
      setFilterBySubLoader(true);
      setTimeout(() => {
        setFilterBySubLoader(false);
        setFilteredProductsBySubCate(null);
      }, 400);
    }
  };

  const handelProductBySearch = (productName) => {
    const userInput = productName.trim().toLowerCase();
    if (userInput) {
      setProducts(
        data.filter((product) =>
          product.title.trim().toLowerCase().includes(userInput)
        )
      );
    } else {
      setProducts(searchResult);
    }
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
              products={data}
              modifiedSubCategories={modifiedSubCategories}
              handelFilterProductBySubCategory={
                handelFilterProductBySubCategory
              }
            />
            {filterBySubLoader ? (
              <div className="flex h-full justify-center space-y-4 py-4">
                <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
              </div>
            ) : (
              <AllProducts
                products={data}
                filteredProductsBySubCate={filteredProductsBySubCate}
                handelProductBySearch={handelProductBySearch}
                isDataLimitDone={isDataLimitDone}
              />
            )}
          </div>
        </PageLayout>
      )}
    </>
  );
};

export default Product;
