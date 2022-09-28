import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import Pagination from "../../../Components/custom/Pagination/Pagination";
import ProductTable from "./../../../Components/dashboard/Table/ProductTable";
import DashboardLayout from "./../../../layouts/DashboardLayout";
import httpProductService from "./../../../services/product.service";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [tableHeadData, setTableHeadData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDataLimitDone, setIsDataLimitDone] = useState(false);

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
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    loadAllProducts();
  }, [searchParams]);

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

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          All Products
        </h1>

        {loader ? (
          <div className="flex h-screen items-center justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : (
          <ProductTable theadData={tableHeadData} tableData={allProducts} />
        )}

        <Pagination
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          isDataLimitDone={isDataLimitDone}
        />
      </section>
    </DashboardLayout>
  );
}

export default Products;
