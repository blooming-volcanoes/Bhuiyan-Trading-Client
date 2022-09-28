import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpProductService from "./../../../services/product.service";

function ProductEdit() {
  const [prevProduct, setPrevProduct] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});
  const [loader, setLoader] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);
  const { id } = useParams();

  // get a Single Product
  useEffect(() => {
    async function getSingleProduct() {
      setLoader(true);
      try {
        const data = await httpProductService.getSingleProductById(id);
        setPrevProduct(data[0]);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    getSingleProduct();
  }, [id]);

  useEffect(() => {
    if (prevProduct) {
      let newObj = {};
      for (let key in prevProduct) {
        if (
          key !== "id" &&
          key !== "categoryId" &&
          key !== "categoryName" &&
          key !== "subCategoryName"
        ) {
          newObj[key] = prevProduct[key];
        }
      }
      setCurrentProduct(newObj);
    }
  }, [prevProduct]);

  const handelChangeDetails = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(currentProduct);

  return (
    <DashboardLayout>
      <section className="my-5">
        <h1 className="my-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Edit Product
        </h1>

        {/* Update form */}
        <div className="mt-10 flex justify-center">
          {loader ? (
            <div className="flex h-full justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <form className="relative mx-5 w-full space-y-4 rounded border-2 bg-white p-4 shadow-lg md:w-[600px] lg:w-[600px]">
              {Object.keys(currentProduct).map(
                (input) =>
                  input !== "gallaryImg" &&
                  input !== "featureImg" &&
                  input !== "productDesc" &&
                  input !== "shortDesc" && (
                    <label
                      htmlFor="cateName"
                      className="flex flex-col space-y-2"
                    >
                      <span
                        id="cateName"
                        className="text-xs font-semibold text-gray-400"
                      >
                        {(input === "title" && "Title") ||
                          (input === "price" && "Price") ||
                          (input === "currency" && "Currency") ||
                          (input === "unit" && "Unit")}
                      </span>
                      <input
                        type="text"
                        name={input}
                        className="rounded-lg border-gray-300 text-sm"
                        onChange={handelChangeDetails}
                        defaultValue={prevProduct[input]}
                      />
                    </label>
                  )
              )}
              <label className="flex flex-col space-y-2">
                <span
                  id="cateName"
                  className="text-xs font-semibold text-gray-400"
                >
                  Short Description
                </span>
                <textarea
                  onChange={handelChangeDetails}
                  className="h-28 rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                  required={true}
                  name="shortDesc"
                  defaultValue={prevProduct && prevProduct["shortDesc"]}
                ></textarea>
              </label>

              <label className="flex flex-col space-y-2">
                <span
                  id="cateName"
                  className="text-xs font-semibold text-gray-400"
                >
                  Product Description
                </span>
                <textarea
                  onChange={handelChangeDetails}
                  className="h-28 rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                  required={true}
                  name="productDesc"
                  defaultValue={prevProduct && prevProduct["productDesc"]}
                ></textarea>
              </label>
              <>
                {updateLoader ? (
                  <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                    <LoadingButton
                      styles="flex justify-center"
                      svg="w-10 h-10 text-indigo-500"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <button
                      className="dashboard-btn flex-1 border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
                      type="submit"
                    >
                      Update
                    </button>

                    <button
                      className="dashboard-btn flex-1 border-red-500 bg-red-400 hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </>
            </form>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ProductEdit;
