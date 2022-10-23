import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import { MdAddToPhotos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "./../../../services/category.service";
import httpProductService from "./../../../services/product.service";

function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prevLoading, setPrevLoading] = useState(false);
  const [prevCategory, setPrevCategory] = useState(null);
  const [details, setDetails] = useState({});
  const [uploadedFeature, setUploadedFeature] = useState(null);
  const [uploadedGalleryImage, setUploadedGalleryImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [trackGalleryImageLength, setTrackGalleryImageLength] = useState(null);
  const [updateLoader, setUpdateLoader] = useState(false);
  const [isAnyThingEdited, setIsAnyThingEdited] = useState(false);

  const [addSubCategory, setAddSubCategory] = useState(false);
  const [deletedFeatureImg, setDeletedFeatureImg] = useState(null);

  // all product by this category states
  const [allProducts, setGetAllProducts] = useState([]);

  useEffect(() => {
    if (id) {
      setPrevLoading(true);
      httpCateGoryService
        .getSingleCategoryById(id)
        .then((data) => {
          setPrevCategory(data[0]);
        })
        .catch((error) => {
          console.log(error);
          setPrevLoading(false);
        })
        .finally(() => {
          setPrevLoading(false);
        });
    }
  }, [id]);

  // get All products by this category
  useEffect(() => {
    if (prevCategory) {
      async function loadAllProductByCategory() {
        try {
          const data = await httpProductService.getAllProductByCateGory(id);
          setGetAllProducts(data);
        } catch (error) {
          console.log(error);
        }
      }
      loadAllProductByCategory();
    }
  }, [id, prevCategory]);

  // Set the previous value
  useEffect(() => {
    if (prevCategory) {
      setDetails((prev) => {
        return {
          ...prev,
          categoryName: prevCategory.categoryName,
          featureImg: prevCategory?.featureImg,
          galleryImg: prevCategory?.galleryImg,
        };
      });
    }
  }, [prevCategory]);

  // Getting all the data
  const handelInputChange = (e) => {
    const { value, name } = e.target;
    setIsAnyThingEdited(true);
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  async function updateAllTheProducts(category) {
    for (let i = 0; i < allProducts.length; i++) {
      allProducts[i].categoryName = category.categoryName;
    }
  }

  useEffect(() => {
    setDetails((prev) => {
      return {
        ...prev,
        featureImg: uploadedFeature,
      };
    });
  }, [uploadedFeature]);

  // Submit the form
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(details?.subCategoryName, uploadedGalleryImage);
    if (
      details?.subCategoryName?.trim().split(" ").length !==
      uploadedGalleryImage?.length
    ) {
      const lengthOfNewSub = details.subCategoryName?.trim()?.split(" ").length;
      toast.error(
        `Now you need to add ${lengthOfNewSub} Images in Gallery Images`
      );
      return;
    }

    if (details?.featureImg === "") {
      toast.error(`Please Upload a feature Image`);
      return;
    }

    let currentSub;
    if (details?.subCategoryName) {
      currentSub =
        prevCategory.subCategoryName.join(";") +
        ";" +
        details?.subCategoryName.trim().split(" ").join(";");
    } else {
      currentSub = prevCategory.subCategoryName.join(";");
    }

    const modifiedDetails = {
      ...details,
      subCategoryName: currentSub,
      featureImg: details.featureImg,
      galleryImg: uploadedGalleryImage
        ? details.galleryImg.join(";") + ";" + uploadedGalleryImage.join(";")
        : details.galleryImg.join(";"),
    };

    setUpdateLoader(true);
    updateAllTheProducts(modifiedDetails);
    try {
      const data = await httpCateGoryService.updateCategory(
        prevCategory.id,
        modifiedDetails
      );
      if (data.msg) {
        toast.success(data.msg);
      }

      allProducts.map(async (product) => {
        await httpProductService.updateSingleProduct(product.id, {
          categoryName: product.categoryName,
        });
      });

      navigate(-1);
    } catch (error) {
      setUpdateLoader(false);
      toast.error("Internal Server Error");
      console.log(error);
    }
    setUpdateLoader(false);

    setTrackGalleryImageLength(null);
  };

  // Cancel Editing
  const handelCancel = () => {
    navigate(-1);
  };

  // handel Change feature Image
  const handelChangeFeatureImg = (img) => {
    setDetails((prev) => {
      return {
        ...prev,
        featureImg: "",
      };
    });
    setDeletedFeatureImg(img);
  };

  return (
    <DashboardLayout>
      <section className="my-5">
        <h1 className="my-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Edit Category
        </h1>
        <div className="mt-10 flex justify-center">
          {prevLoading ? (
            <div className="flex h-full justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <form
              onSubmit={handelSubmit}
              className="relative mx-5 w-full space-y-4 rounded border-2 bg-white p-4 shadow-lg md:w-[600px] lg:w-[600px]"
            >
              {/* Input fields */}
              <label htmlFor="cateName" className="flex flex-col space-y-2">
                <span
                  id="cateName"
                  className="text-xs font-semibold text-gray-400"
                >
                  Category name
                </span>
                <input
                  onChange={handelInputChange}
                  name="categoryName"
                  type="text"
                  className="rounded-lg border-gray-300 text-sm"
                  defaultValue={prevCategory?.categoryName}
                />
              </label>
              {/* Sub Categories */}
              <label htmlFor="cateName" className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <button
                    onClick={() => setAddSubCategory(true)}
                    type="button"
                    className="flex items-center  rounded bg-indigo-200 p-1 text-xs font-semibold text-indigo-500"
                  >
                    Add more Subcategories
                    <MdAddToPhotos className="ml-2 text-xl" />
                  </button>
                  {addSubCategory && (
                    <button
                      onClick={() => {
                        setAddSubCategory(false);
                        setDetails((prev) => {
                          return {
                            ...prev,
                            subCategoryName: null,
                          };
                        });
                      }}
                      type="button"
                      className="flex items-center  rounded bg-red-200 p-1 text-xs font-semibold text-red-500"
                    >
                      Cancel
                      <ImCross className="ml-2 text-sm" />
                    </button>
                  )}
                </div>

                {addSubCategory && (
                  <input
                    onChange={handelInputChange}
                    name={`subCategoryName`}
                    type="text"
                    className="rounded-lg border-gray-300 text-sm"
                    placeholder="Each Sub category will be separated by Space"
                  />
                )}
              </label>

              {/* Feature Image upload */}
              <div className="relative rounded  p-2 shadow">
                <p className="text-center text-xs text-indigo-500">
                  Note : This for your main Category Image
                </p>
                {details?.featureImg ? (
                  <>
                    <img
                      className="mx-auto h-[200px]  w-[600px] rounded border object-cover  p-2 "
                      src={details && details["featureImg"]}
                      alt=""
                    />
                    <button
                      onClick={() =>
                        handelChangeFeatureImg(details["featureImg"])
                      }
                      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                      className="absolute top-[22px] -right-[3px] rounded-full bg-gray-100 text-2xl font-semibold text-red-500 transition-all hover:scale-110"
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

              {/* Gallery Image upload */}
              <p className="text-center text-xs text-indigo-500">
                Note : This is for your Sub-Category Image
              </p>
              <UploadFile
                isMultiple={true}
                setUploadedGalleryImage={setUploadedGalleryImage}
                uploadedGalleryImage={uploadedGalleryImage}
                setTrackGalleryImageLength={setTrackGalleryImageLength}
              />

              {/* Save and Cancel */}
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
                    {isAnyThingEdited && (
                      <button
                        className="dashboard-btn flex-1 border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
                        type="submit"
                      >
                        Update
                      </button>
                    )}
                    <button
                      onClick={handelCancel}
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

export default CategoryEdit;
