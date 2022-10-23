import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import httpProductService from "../../../services/product.service";
import DashboardLayout from "./../../../layouts/DashboardLayout";
import httpDashboardService from "./../../../services/dashboard.service";

function HomePage() {
  const [uploadedFeature, setUploadedFeature] = useState(null);
  const [uploadedLogo, setUploadedLogo] = useState(null);
  const [isLogoSubmitted, setIsLogoSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [isFeatureSubmitted, setIsFeatureSubmitted] = useState(false);
  const [isAlreadyHeadExists, setIsAlreadyHeadExists] = useState(false);
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    async function getHeaderData() {
      try {
        const data = await httpDashboardService.getHeaderData();
        if (!data) {
          setIsAlreadyHeadExists(false);
        } else {
          setHeaderData(data);
          setIsAlreadyHeadExists(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getHeaderData();
  }, [loading]);

  // Submit the form
  const onSubmit = async (userData) => {
    setLoading(true);

    try {
      // Delete the previous image
      if (uploadedLogo && headerData.logo) {
        await httpProductService.deleteGalleryImages(
          headerData.logo.split("/")[4]
        );
      }
      if (uploadedFeature && headerData.backgroundImg) {
        await httpProductService.deleteGalleryImages(
          headerData.backgroundImg.split("/")[4]
        );
      }
      // Posting new Data
      const modified = {
        ...userData,
        logo: uploadedLogo || "",
        thirdTitle: userData.thirdTitle || headerData?.thirdTitle,
        secondTitle: userData.secondTitle || headerData?.secondTitle,
        mainTitle: userData.mainTitle || headerData?.mainTitle,
        backgroundImg: uploadedFeature || "",
      };
      console.log(modified);
      if (isAlreadyHeadExists) {
        await httpDashboardService.updateNewHeaderData(headerData.id, modified);
      } else {
        await httpDashboardService.postNewHeaderData(modified);
      }
      toast.success("Header Data has been updated");
    } catch (error) {
      setLoading(false);
      toast.success("Internal Server Error");
      console.log(error);
    }
    setLoading(false);
    reset();
    setIsFeatureSubmitted(true);
    setIsLogoSubmitted(true);
  };

  return (
    <DashboardLayout>
      <section>
        <h1 className="my-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Home Page
        </h1>
      </section>

      {/* Contents */}
      <div className="my-10 flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mx-5 w-full space-y-4 rounded border-2 bg-white p-4 shadow-lg md:w-[600px] lg:w-[600px]"
        >
          <label htmlFor="cateName" className="flex flex-col space-y-2">
            <span id="cateName" className="text-xs font-semibold text-gray-400">
              Main Title
            </span>
            <input
              type="text"
              required
              id="cateName"
              name="mainTitle"
              defaultValue={headerData && headerData?.mainTitle}
              className="rounded-lg border-gray-300 text-sm"
              {...register("mainTitle")}
            />
          </label>
          <label htmlFor="secondTitle" className="flex flex-col space-y-2">
            <span id="cateName" className="text-xs font-semibold text-gray-400">
              Second Title
            </span>
            <input
              type="text"
              required
              className="rounded-lg border-gray-300 text-sm"
              id="secondTitle"
              name="secondTitle"
              defaultValue={headerData && headerData?.secondTitle}
              {...register("secondTitle")}
            />
          </label>
          <label htmlFor="thirdTitle" className="flex flex-col space-y-2">
            <span id="cateName" className="text-xs font-semibold text-gray-400">
              Third Title
            </span>
            <input
              required
              type="text"
              className="rounded-lg border-gray-300 text-sm"
              id="thirdTitle"
              name="thirdTitle"
              defaultValue={headerData && headerData?.thirdTitle}
              {...register("thirdTitle")}
            />
          </label>
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-semibold text-gray-400">Logo</span>
            <UploadFile
              isMultiple={false}
              setUploadedFeature={setUploadedLogo}
              uploadedFeature={uploadedLogo}
              isFeatureSubmitted={isLogoSubmitted}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-semibold text-gray-400">
              Background Image
            </span>
            <UploadFile
              isMultiple={false}
              setUploadedFeature={setUploadedFeature}
              uploadedFeature={uploadedFeature}
              isFeatureSubmitted={isFeatureSubmitted}
            />
          </div>

          {loading ? (
            <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
              <LoadingButton
                styles="flex justify-center"
                svg="w-10 h-10 text-indigo-500"
              />
            </div>
          ) : (
            <button
              disabled={loading}
              className="dashboard-btn w-full flex-1 border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
              type="submit"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </DashboardLayout>
  );
}

export default HomePage;
