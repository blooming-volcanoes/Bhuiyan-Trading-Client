import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FeatureUplaod from "../../../Components/dashboard/ProductUpload/FeatureUplaod";
import GalleryUpload from "../../../Components/dashboard/ProductUpload/GalleryUpload";
import useFileFeatureUploader from "../../../hooks/useFileUploaders/useFileFeatureUploader";
import useGalleryUploader from "../../../hooks/useFileUploaders/useGalleryUploder";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "../../../services/category.service";
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
  const { register, handleSubmit, reset } = useForm();
  const [featureLoader, setFeatureLoader] = useState(false);
  const [galleryLoader, setGalleryLoader] = useState(false);

  // Category states
  const [cateGories, setCateGories] = useState([]);
  const [cateGoryLoading, setCateGoryLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  // Fetch all Categories
  useEffect(() => {
    async function getProducts() {
      setCateGoryLoading(true);
      try {
        const data = await httpCateGoryService.getAllCategory();
        setCateGories(data);
      } catch (error) {
        setCateGoryLoading(false);
        console.log(error);
      }

      setCateGoryLoading(false);
    }
    getProducts();
  }, []);

  const handelCategories = (e) => {
    setCategoryId(e.target.value);
  };

  // Feature Image All states
  const [uploadedFeature, setUploadedFeature] = useState(null);
  const { featureFile, repairSingleFile, setFeatureFile } =
    useFileFeatureUploader();
  const [readFeatureImage, setReadFeatureImage] = useState(null);

  // Gallery Image states
  const { setGalleryFiles, galleryFiles, repairMultipleFiles } =
    useGalleryUploader();
  const [renderGalleryImages, setRenderGalleryImages] = useState(null);
  const [uploadedGalleryImage, setUploadedGalleryImage] = useState(null);

  // Gallery Image function
  const handelGalleryImages = async () => {
    if (galleryFiles === uploadedGalleryImage) {
      toast.success("The gallery images have already been saved.");
      return;
    }
    setGalleryLoader(true);
    try {
      const data = await httpProductService.uploadGalleryImage(galleryFiles);
      setGalleryFiles(data?.url);
      setUploadedGalleryImage(data?.url);
      setRenderGalleryImages(data?.url);
      toast.success("Feature Image Successfully Saved");
    } catch (error) {
      setGalleryLoader(false);
      console.log(error);
    }
    setGalleryLoader(false);
  };

  // feature Image functions
  const handelSaveFeatureImage = async () => {
    if (uploadedFeature === featureFile) {
      toast.success("The Feature image have already been saved.");
      return;
    }
    setFeatureLoader(true);
    try {
      const data = await httpProductService.uploadFeatureImage(featureFile);
      setFeatureFile(data?.url);
      setReadFeatureImage(data?.url);
      setUploadedFeature(data?.url);
      toast.success("Feature Image Successfully Saved");
    } catch (error) {
      setFeatureLoader(false);
      console.log(error.response);
      if (error.response.status) {
        toast.error("File is too large or Internal Server Error");
      }
    }
    setFeatureLoader(false);
  };

  console.log(categoryId);

  // Main form here
  const onSubmit = async (data) => {
    if (uploadedFeature && uploadedGalleryImage && categoryId) {
      const modifiedData = {
        ...data,
        featureImg: uploadedFeature,
        gallaryImg: uploadedGalleryImage?.join(";"),
        categoryId,
      };
      try {
        console.log(modifiedData);
      } catch (error) {
        console.log(error);
      }

      // Gallery Image States
      setGalleryFiles(null);
      setRenderGalleryImages(null);
      setUploadedGalleryImage(null);
      // Feature Image states
      setFeatureFile(null);
      setReadFeatureImage(null);
      setUploadedFeature(null);
      setCategoryId(null);
      reset();
    }
    if (!uploadedFeature) {
      toast.error("Please Select or save your feature Image");
    }
    if (!uploadedGalleryImage?.length) {
      toast.error("Please Select or save your Gallery Images");
    }
    if (!categoryId) {
      toast.error("Please Select a category");
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

            {/* CateGory dropdown */}
            {cateGoryLoading ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton
                  styles="flex justify-center"
                  svg="w-10 h-10 text-indigo-500"
                />
              </div>
            ) : (
              <select
                onChange={handelCategories}
                className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              >
                <option>Select a Category</option>
                {cateGories.map((category) => (
                  <option key={category?.id} value={category?.id}>
                    {category?.categoryName}
                  </option>
                ))}
              </select>
            )}

            {/* Feature Upload component */}
            {featureLoader ? (
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

            {galleryLoader ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton svg="w-10 h-10 text-indigo-500" />
              </div>
            ) : (
              <GalleryUpload
                setGalleryFiles={setGalleryFiles}
                galleryFiles={galleryFiles}
                repairMultipleFiles={repairMultipleFiles}
                renderGalleryImages={renderGalleryImages}
                setRenderGalleryImages={setRenderGalleryImages}
                handelGalleryImages={handelGalleryImages}
                setUploadedGalleryImage={setUploadedGalleryImage}
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
