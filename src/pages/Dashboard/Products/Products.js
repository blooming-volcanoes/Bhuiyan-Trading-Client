/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import Pagination from "../../../Components/custom/Pagination/Pagination";
import useDebounce from "../../../hooks/useDebounce";
import ProductTable from "./../../../Components/dashboard/Table/ProductTable";
import DashboardLayout from "./../../../layouts/DashboardLayout";
import httpProductService from "./../../../services/product.service";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [tableHeadData, setTableHeadData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDataLimitDone, setIsDataLimitDone] = useState(false);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [search, setSearch] = useState(null);
  const debounceData = useDebounce(search, 800);
  const [searchLoader, setSearchLoader] = useState(false);
  const [allPreviousProducts, setAllPreviousProducts] = useState([]);

  // load all Products
  useEffect(() => {
    async function loadAllProducts() {
      setLoader(true);
      try {
        const data = await httpProductService.getAllProductsByPagination(
          searchParams.get("page")
        );
        if (!data.length || data.length < 10) {
          setIsDataLimitDone(true);
        } else {
          setIsDataLimitDone(false);
        }
        setAllProducts(data);
        setAllPreviousProducts(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }

    loadAllProducts();
  }, [isProductDeleted, searchParams]);

  useEffect(() => {
    if (allProducts.length) {
      let keys = [];
      for (let key in allProducts[0]) {
        if (
          key !== "id" &&
          key !== "featureImg" &&
          key !== "gallaryImg" &&
          key !== "categoryId"
        ) {
          keys.push(key);
        }
      }
      setTableHeadData(keys);
    }
  }, [allProducts]);

  // handel Delete Product
  const handelDeleteProduct = (product) => {
    const deletedImages = [product.featureImg, ...product.gallaryImg];

    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setIsProductDeleted(true);
        httpProductService
          .deleteProduct(product?.id, {
            headers: {
              authorization: `Bearer ${user?.token}`,
            },
          })
          .then((data) => {
            deletedImages.forEach(async (img) => {
              await httpProductService.deleteGalleryImages(img.split("/")[4]);
            });
            console.log(data);
            Swal.fire("Saved!", "", "success");
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsProductDeleted(false);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // handle product search
  useEffect(() => {
    async function getSearchResult() {
      setSearchLoader(true);
      try {
        const data = await httpProductService.searchProductByTitle({
          title: `%${debounceData}%`,
        });

        setAllProducts(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchLoader(false);
      }
    }

    if (debounceData) {
      getSearchResult();
    } else {
      setAllProducts(allPreviousProducts);
    }
  }, [debounceData]);

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          All Products
        </h1>

        <div className="mx-8 mt-4 flex w-full justify-center lg:w-2/4 lg:justify-start">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className=" flx-1 lg:full w-[400px] rounded border-2 border-gray-400 text-sm shadow focus:ring-0"
            placeholder="Search example. SAILOR 90 Satellite TV"
          />
        </div>

        {loader ? (
          <div className="flex h-screen items-center justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : allProducts.length ? (
          searchLoader ? (
            <div className="flex h-screen items-center justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <ProductTable
              handelDeleteProduct={handelDeleteProduct}
              theadData={tableHeadData}
              tableData={allProducts}
            />
          )
        ) : (
          <div className="mt-10 flex h-full  justify-center space-y-4 font-bold text-gray-500">
            <h1 className="text-2xl">{allProducts.msg}</h1>
          </div>
        )}

        {!debounceData && (
          <div className="mt-7">
            <Pagination
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              isDataLimitDone={isDataLimitDone}
            />
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}

export default Products;
