import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import CateGoryFeatureUpload from "../../../Components/dashboard/CateGoryUpload/CateGoryFeatureUpload";
import DashboardLayout from "../../../layouts/DashboardLayout";
import useFileFeatureUploader from "./../../../hooks/useFileUploaders/useFileFeatureUploader";
import httpCateGoryService from "./../../../services/category.service";

function CateGoryUpload() {
  const { register, handleSubmit } = useForm();
  const { setFeatureFile, featureFile, repairSingleFile } =
    useFileFeatureUploader();
  const [renderFeatureImage, setRenderFeatureImage] = useState(null);
  const [featureImageLoader, setFeatureImageLoader] = useState(false);
  const [uploadedFeatureImage, setUploadedFeatureImage] = useState(null);
  const [submitLoader, setSubmitLoader] = useState(false);

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

  const onSubmit = async (data) => {
    if (uploadedFeatureImage) {
      setSubmitLoader(true);
      try {
        const modifiedData = {
          ...data,
          featureImg: uploadedFeatureImage,
          galleryImg: "",
        };
        console.log(modifiedData);
      } catch (error) {
        setSubmitLoader(true);
        console.log(error);
      }
      setSubmitLoader(false);
    }
    if (!uploadedFeatureImage) {
      toast.error("Please Select or save your feature Image");
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
              placeholder="Type Sub-categories name"
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
