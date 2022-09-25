import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import CateGoryFeatureUpload from "../../../Components/dashboard/CateGoryUpload/CateGoryFeatureUpload";
import CategoryGalleryUpload from "../../../Components/dashboard/CateGoryUpload/CategoryGalleryUpload";
import useGalleryUploader from "../../../hooks/useFileUploaders/useGalleryUploder";
import DashboardLayout from "../../../layouts/DashboardLayout";
import useFileFeatureUploader from "./../../../hooks/useFileUploaders/useFileFeatureUploader";
import httpCateGoryService from "./../../../services/category.service";

function CateGoryUpload() {
  const { register, handleSubmit, reset } = useForm();
  const { setFeatureFile, featureFile, repairSingleFile } =
    useFileFeatureUploader();

  // Feature Image State
  const [renderFeatureImage, setRenderFeatureImage] = useState(null);
  const [featureImageLoader, setFeatureImageLoader] = useState(false);
  const [uploadedFeatureImage, setUploadedFeatureImage] = useState(null);
  const [submitLoader, setSubmitLoader] = useState(false);

  // Gallery Image states
  const { setGalleryFiles, galleryFiles, repairMultipleFiles } =
    useGalleryUploader();
  const [renderGalleryImages, setRenderGalleryImages] = useState(null);
  const [uploadedGalleryImage, setUploadedGalleryImage] = useState(null);
  const [galleryLoader, setGalleryLoader] = useState(false);

  // Gallery Image function
  const handelGalleryImages = async () => {
    if (galleryFiles === uploadedGalleryImage) {
      toast.success("The gallery images have already been saved.");
      return;
    }
    setGalleryLoader(true);
    try {
      const data = await httpCateGoryService.uploadGalleryImage(galleryFiles);
      setGalleryFiles(data?.url);
      setUploadedGalleryImage(data?.url);
      setRenderGalleryImages(data?.url);
      toast.success("Gallery Image Successfully Saved");
    } catch (error) {
      setGalleryLoader(false);
      if (error.response.status) {
        toast.error("Image is too large or Internal Server Error");
      }
      console.log(error);
    }
    setGalleryLoader(false);
  };

  const handelSaveFeatureImage = async () => {
    if (uploadedFeatureImage === featureFile) {
      toast.success("The Feature image have already been saved.");
      return;
    }

    setFeatureImageLoader(true);
    try {
      const data = await httpCateGoryService.uploadFeatureImage(featureFile);
      setUploadedFeatureImage(data?.url);
      setRenderFeatureImage(data?.url);
      setFeatureFile(data?.url);
      toast.success("Feature Image Successfully Saved");
    } catch (error) {
      setFeatureImageLoader(false);
      console.log(error);
      if (error.response.status) {
        toast.error("Image is too large or Internal Server Error");
      }
    }
    setFeatureImageLoader(false);
  };

  const onSubmit = async (userInput) => {
    if (uploadedFeatureImage && uploadedGalleryImage) {
      setSubmitLoader(true);
      try {
        const modifiedData = {
          ...userInput,
          subCategoryName: userInput.subCategoryName.split(" ").join(";"),
          featureImg: uploadedFeatureImage,
          galleryImg: uploadedGalleryImage?.join(";"),
        };

        const data = await httpCateGoryService.createCategory(modifiedData);
        if (data.msg) {
          toast.success(data.msg);
        } else {
          toast.success("Product Uploaded Successfully");
        }
      } catch (error) {
        setSubmitLoader(true);
        if (error?.response?.data?.msg) {
          toast.error(error.response.data.msg);
        } else {
          toast.error("Internal Server Error");
        }
        console.log(error);
      }
      setSubmitLoader(false);

      // Gallery Image States
      setGalleryFiles(null);
      setRenderGalleryImages(null);
      setUploadedGalleryImage(null);

      // Feature Image States
      setFeatureFile(null);
      setRenderFeatureImage(null);
      setUploadedFeatureImage(null);
    }
    reset();
    if (!uploadedFeatureImage) {
      toast.error("Please Select or save your feature Image");
    }
    if (!uploadedGalleryImage) {
      toast.error("Please Select or save your Gallery Image");
    }
  };

  return (
    <DashboardLayout>
      <section>
        <h1 className="my-10 text-center text-2xl font-semibold capitalize text-indigo-500 drop-shadow">
          Upload your Categories Here
        </h1>
        <div className="mt-6 flex justify-center">
          <form
            className="mx-5 flex w-full flex-col space-y-5 rounded border bg-white p-4 shadow-xl md:w-2/3 lg:w-2/3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-lg font-semibold text-gray-500 drop-shadow">
              Fill all the Necessary Details
            </h1>
            <input
              type="text"
              className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              required
              placeholder="Type a Category name"
              {...register("categoryName")}
            />
            <input
              type="text"
              required
              className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              placeholder="Sub-categories each nam must be separated by Space like: health care"
              {...register("subCategoryName")}
            />

            {featureImageLoader ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton
                  styles="flex justify-center"
                  svg="w-10 h-10 text-indigo-500"
                />
              </div>
            ) : (
              <CateGoryFeatureUpload
                featureFile={featureFile}
                setFeatureFile={setFeatureFile}
                repairSingleFile={repairSingleFile}
                renderFeatureImage={renderFeatureImage}
                setRenderFeatureImage={setRenderFeatureImage}
                handelSaveFeatureImage={handelSaveFeatureImage}
                featureImageLoader={featureImageLoader}
                setUploadedFeatureImage={setUploadedFeatureImage}
              />
            )}

            {galleryLoader ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton svg="w-10 h-10 text-indigo-500" />
              </div>
            ) : (
              <CategoryGalleryUpload
                setGalleryFiles={setGalleryFiles}
                galleryFiles={galleryFiles}
                repairMultipleFiles={repairMultipleFiles}
                renderGalleryImages={renderGalleryImages}
                setRenderGalleryImages={setRenderGalleryImages}
                handelGalleryImages={handelGalleryImages}
                setUploadedGalleryImage={setUploadedGalleryImage}
                galleryLoader={galleryLoader}
              />
            )}

            {submitLoader ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton svg="w-10 h-10 text-indigo-500" />
              </div>
            ) : (
              <button className="dashboard-btn" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default CateGoryUpload;
