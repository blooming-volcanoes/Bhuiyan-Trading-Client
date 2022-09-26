import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "./../../../services/category.service";

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

  // Set the previous value
  useEffect(() => {
    if (prevCategory) {
      setDetails((prev) => {
        return {
          ...prev,
          categoryName: prevCategory.categoryName,
          subCategoryName: prevCategory.subCategoryName.join(" "),
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

  // Submit the form
  const handelSubmit = async (e) => {
    e.preventDefault();

    const modifiedDetails = {
      ...details,
      subCategoryName: details?.subCategoryName.trim().split(" ").join(";"),
      featureImg: uploadedFeature || details.featureImg,
      galleryImg: uploadedGalleryImage
        ? uploadedGalleryImage.join(";")
        : details.galleryImg.join(";"),
    };
    setUpdateLoader(true);
    try {
      const data = await httpCateGoryService.updateCategory(
        prevCategory.id,
        modifiedDetails
      );
      if (data.msg) {
        toast.success(data.msg);
      }
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
                  <span
                    id="cateName"
                    className="text-xs font-semibold text-gray-400"
                  >
                    Subcategory names
                  </span>
                </div>

                <input
                  onChange={handelInputChange}
                  name={`subCategoryName`}
                  type="text"
                  defaultValue={details?.subCategoryName}
                  className="rounded-lg border-gray-300 text-sm"
                  placeholder="Each Sub category will be separated by Space"
                />
              </label>

              {/* Feature Image upload */}
              <p className="text-center text-xs text-indigo-500">
                Note : Update your Category feature Image here here (Only JPEG,
                JPG, PNG file are allowed)
              </p>
              <UploadFile
                isMultiple={false}
                setUploadedFeature={setUploadedFeature}
                uploadedFeature={uploadedFeature}
              />

              {/* Gallery Image upload */}
              <p className="text-center text-xs text-indigo-500">
                Note : Update your Category Gallery Image here here (Only JPEG,
                JPG, PNG file are allowed)
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