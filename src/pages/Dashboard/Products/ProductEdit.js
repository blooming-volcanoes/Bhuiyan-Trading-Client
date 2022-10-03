import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpProductService from "./../../../services/product.service";

function ProductEdit() {
  const [prevProduct, setPrevProduct] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});
  const [loader, setLoader] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);
  const [uploadedFeature, setUploadedFeature] = useState(null);
  const [uploadedGalleryImage, setUploadedGalleryImage] = useState(null);
  const [trackGalleryImageLength, setTrackGalleryImageLength] = useState(null);
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

  // Change feature Image
  const handelChangeFeatureImg = (key) => {
    setUploadedFeature(null);
    setCurrentProduct((prev) => {
      return {
        ...prev,
        [key]: null,
      };
    });
  };

  // Change feature Image
  const handelChangeGalleryImg = (key) => {
    setCurrentProduct((prev) => {
      return {
        ...prev,
        [key]: null,
      };
    });
  };

  const handelUpdateForm = (e) => {
    e.preventDefault();
    if (!currentProduct.featureImg && !uploadedFeature) {
      toast.error("Please select a feature Image");
      return;
    }
    const updatedForm = {
      ...currentProduct,
      featureImg: uploadedFeature || prevProduct?.featureImg,
    };
    console.log(updatedForm);
  };

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
            <form
              onSubmit={handelUpdateForm}
              className="relative mx-5 w-full space-y-4 rounded border-2 bg-white p-4 shadow-lg md:w-[600px] lg:w-[800px]"
            >
              {Object.keys(currentProduct).map(
                (input) =>
                  input !== "gallaryImg" &&
                  input !== "featureImg" &&
                  input !== "productDesc" &&
                  input !== "shortDesc" && (
                    <label
                      key={input}
                      htmlFor={input}
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
                        id={input}
                        name={input}
                        className="rounded-lg border-gray-300 text-sm"
                        onChange={handelChangeDetails}
                        defaultValue={prevProduct[input]}
                      />
                    </label>
                  )
              )}

              {/* render prev images and Update*/}

              {/* Feature Img */}
              <div className="relative mx-auto w-[400px] rounded border border-gray-300 p-2 shadow">
                <span className="text-xs font-semibold text-gray-400">
                  Feature Image
                </span>
                {currentProduct["featureImg"] !== null ? (
                  <>
                    <img
                      className="rounded object-contain "
                      src={prevProduct && prevProduct["featureImg"]}
                      alt=""
                    />
                    <button
                      onClick={() => handelChangeFeatureImg("featureImg")}
                      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                      className="absolute -top-[4px] -right-[19px] rounded-full bg-gray-100 text-2xl font-semibold text-red-500 transition-all hover:scale-110"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-10 w-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <UploadFile
                    isMultiple={false}
                    setUploadedFeature={setUploadedFeature}
                    uploadedFeature={uploadedFeature}
                  />
                )}
              </div>

              {/* Gallery Image */}
              <span className="text-xs font-semibold text-gray-400">
                Gallery Image
              </span>
              {currentProduct["gallaryImg"] ? (
                <div className="mx-auto h-[300px]  overflow-y-scroll rounded border border-gray-300 p-2 shadow scrollbar-hide">
                  {currentProduct["gallaryImg"].split(" ").map((img) => (
                    <div className="relative mx-auto w-[600px]">
                      <img
                        className=" rounded object-contain "
                        src={img}
                        alt=""
                      />
                      <button
                        onClick={() => handelChangeGalleryImg("gallaryImg")}
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                        className="absolute -top-[4px] -right-[19px] rounded-full bg-gray-100 text-2xl font-semibold text-red-500 transition-all hover:scale-110"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-10 w-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadFile
                  isMultiple={true}
                  setUploadedGalleryImage={setUploadedGalleryImage}
                  uploadedGalleryImage={uploadedGalleryImage}
                  setTrackGalleryImageLength={setTrackGalleryImageLength}
                />
              )}

              {/* text area */}
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

              {/* Update buttons */}
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
