import React, { useEffect, useState } from "react";

import AllProducts from "./AllProducts/AllProducts";
import Banner from "./Banner/Banner";
import MostPopularProducts from "./MostPopularProducts/MostPopularProducts";

import { IoIosArrowDroprightCircle, IoIosSearch } from "react-icons/io";
import { useParams, useSearchParams } from "react-router-dom";
import bannerImage from "../../assets/Images/pexels-kindel-media-8352350.jpg";
import LoadingButton from "../../Components/custom/Buttons/LoadingButton";
import useDebounce from "./../../hooks/useDebounce";
import PageLayout from "./../../layouts/PageLayout";
import httpCateGoryService from "./../../services/category.service";
import httpProductService from "./../../services/product.service";
import OurBrands from "./../Homepage/OurBrands/OurBrands";

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
  const [search, setSearch] = useState(null);
  const [searchLoader, setSearchLoader] = useState(false);
  const debounceData = useDebounce(search, 800);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    httpProductService
      .getProductByCateGoryWithPagination(id, searchParams.get("page"))
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
  }, [id, data]);

  const handelFilterProductBySubCategory = async (subCategory) => {
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

  // handle product search
  useEffect(() => {
    async function getSearchResult() {
      setSearchLoader(true);
      try {
        const data = await httpProductService.searchProductByTitle({
          title: `%${debounceData}%`,
        });

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchLoader(false);
      }
    }

    if (debounceData) {
      getSearchResult();
    } else {
      setProducts(searchResult);
    }
  }, [debounceData]);

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
            <Banner products={data} bannerImage={imageUrl} />
            <MostPopularProducts
              products={data}
              modifiedSubCategories={modifiedSubCategories}
              handelFilterProductBySubCategory={
                handelFilterProductBySubCategory
              }
            />
            {/* Search Area */}
            <div className="main-container py-6">
              <div className="flex flex-col items-center justify-between lg:flex-row">
                {/* title and serch box */}
                <div className="mb-4 flex items-center justify-end pl-2 md:pl-0">
                  <IoIosArrowDroprightCircle className="text-xl font-bold" />
                  <p className="ml-2 text-lg font-bold">All Products</p>
                </div>
                {/* search box */}
                <div className="relative mb-10 flex pr-2 md:pr-0">
                  <input
                    className="w-full rounded-xl border-slate-300 sm:w-80 md:w-80 lg:w-80"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    name="searchproduct"
                    id=""
                    placeholder="Search products"
                  />
                  <IoIosSearch className="absolute right-4 top-3 text-xl font-bold lg:right-2" />
                </div>
              </div>
            </div>
            {filterBySubLoader ? (
              <div className="flex h-full justify-center space-y-4 py-4">
                <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
              </div>
            ) : searchLoader ? (
              <div className="flex h-full justify-center space-y-4 py-4">
                <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
              </div>
            ) : (
              <AllProducts
                setSearch={setSearch}
                products={data}
                filteredProductsBySubCate={filteredProductsBySubCate}
                handelProductBySearch={handelProductBySearch}
                isDataLimitDone={isDataLimitDone}
              />
            )}
          </div>
          <OurBrands />
        </PageLayout>
      )}
    </>
  );
};

export default Product;
