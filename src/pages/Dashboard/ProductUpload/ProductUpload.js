import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FeatureUplaod from "../../../Components/dashboard/ProductUpload/FeatureUplaod";
import useFileFeatureUploader from "../../../hooks/useFileUploaders/useFileFeatureUploader";
import DashboardLayout from "../../../layouts/DashboardLayout";
import LoadingButton from "./../../../Components/custom/Buttons/LoadingButton";
import httpProductService from "./../../../services/product.service";

const inputFields = [
  {
    name: "title",
    placeholder: "Give a Title *",
    type: "text",
  },
  {
    name: "price",
    placeholder: "Give a Price example * : 150",
    type: "text",
  },
  {
    name: "currency",
    placeholder: "Give a Currency example * : BDT",
    type: "text",
  },
  {
    name: "unit",
    placeholder: "Available Products example * : 5",
    type: "text",
  },
  {
    name: "shortDesc",
    placeholder: "Give a Short Description *",
    type: "text",
  },
  {
    name: "productDesc",
    placeholder: "Give a Product Description *",
    type: "text",
  },
];

function ProductUpload() {
  const { register, handleSubmit } = useForm();
  const [uploadedFeature, setUploadedFeature] = useState(null);
  const [loader, setLoader] = useState(false);
  const { featureFile, repairSingleFile, setFeatureFile } =
    useFileFeatureUploader();
  const [readFeatureImage, setReadFeatureImage] = useState(null);

  const handelSaveFeatureImage = async () => {
    setLoader(true);
    try {
      const data = await httpProductService.uploadFeatureImage(featureFile);
      setFeatureFile(data?.url);
      setReadFeatureImage(data?.url);
      setUploadedFeature(data?.url);
      toast.success("Feature Image Successfully Saved");
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
    setLoader(false);
  };

  console.log(uploadedFeature);

  const onSubmit = (data) => {
    if (featureFile && uploadedFeature) {
      console.log({ ...data, featureImg: uploadedFeature });
    }
    if (!featureFile || !uploadedFeature) {
      toast.error("Please Select or save your feature Image");
    }
  };

  return (
    <DashboardLayout>
      <section>
        <div className="my-5 flex justify-center">
          <form
            className="mx-5 flex w-full flex-col space-y-5 rounded border bg-white p-4 shadow-xl md:w-2/3 lg:w-2/3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-xl font-semibold capitalize text-gray-500 drop-shadow">
              Fill the Necessary Details
            </h1>
            {/* input fields */}
            {inputFields
              .filter(
                (input) =>
                  input.name !== "productDesc" && input.name !== "shortDesc"
              )
              .map((input, i) => (
                <input
                  key={i}
                  {...register(input.name)}
                  className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                  type={input.type}
                  required={true}
                  placeholder={input.placeholder}
                />
              ))}

            {/* text areas */}
            {inputFields
              .filter(
                (input) =>
                  input.name === "productDesc" || input.name === "shortDesc"
              )
              .map((input, i) => (
                <textarea
                  key={i}
                  className="h-28 rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                  required={true}
                  {...register(input.name)}
                  name={input.name}
                  placeholder={input.placeholder}
                ></textarea>
              ))}
            {/* Feature Upload component */}
            {loader ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton
                  styles="flex justify-center"
                  svg="w-10 h-10 text-indigo-500"
                />
              </div>
            ) : (
              <FeatureUplaod
                file={featureFile}
                repairSingleFile={repairSingleFile}
                setFile={setFeatureFile}
                handelSaveFeatureImage={handelSaveFeatureImage}
                readFeatureImage={readFeatureImage}
                setReadFeatureImage={setReadFeatureImage}
                setUploadedFeature={setUploadedFeature}
              />
            )}

            <button className="dashboard-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ProductUpload;
