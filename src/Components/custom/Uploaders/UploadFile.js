import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useFileFeatureUploader from "../../../hooks/useFileUploaders/useFileFeatureUploader";
import useGalleryUploader from "../../../hooks/useFileUploaders/useGalleryUploder";
import httpProductService from "../../../services/product.service";
import FeatureUplaod from "../../dashboard/ProductUpload/FeatureUplaod";
import GalleryUpload from "../../dashboard/ProductUpload/GalleryUpload";
import LoadingButton from "../Buttons/LoadingButton";

function UploadFile({
  isMultiple,
  uploadedGalleryImage,
  setUploadedGalleryImage,
  setUploadedFeature,
  uploadedFeature,
  setTrackGalleryImageLength,
  isFeatureSubmitted,
  isGallerySubmitted,
}) {
  // Feature Image All states
  // const [uploadedFeature, setUploadedFeature] = useState(null);
  const { featureFile, repairSingleFile, setFeatureFile } =
    useFileFeatureUploader();
  const [readFeatureImage, setReadFeatureImage] = useState(null);
  const [featureLoader, setFeatureLoader] = useState(false);

  // Gallery Image states
  const { setGalleryFiles, galleryFiles, repairMultipleFiles } =
    useGalleryUploader();
  const [renderGalleryImages, setRenderGalleryImages] = useState(null);
  // const [uploadedGalleryImage, setUploadedGalleryImage] = useState(null);
  const [galleryLoader, setGalleryLoader] = useState(false);

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

  useEffect(() => {
    if (!isMultiple) {
      setFeatureFile(null);
      setReadFeatureImage(null);
      setUploadedFeature(null);
    }
  }, [isFeatureSubmitted]);

  useEffect(() => {
    if (isMultiple) {
      setGalleryFiles(null);
      setRenderGalleryImages(null);
      setUploadedGalleryImage(null);
    }
  }, [isGallerySubmitted]);

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
      console.log(error);
      if (error.response.status) {
        toast.error("Image is too large or Internal Server Error");
      }
    }
    setFeatureLoader(false);
  };

  return (
    <div>
      {isMultiple ? (
        galleryLoader ? (
          <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
            <LoadingButton
              styles="flex justify-center"
              svg="w-10 h-10 text-indigo-500"
            />
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
            galleryLoader={galleryLoader}
            setTrackGalleryImageLength={setTrackGalleryImageLength}
          />
        )
      ) : featureLoader ? (
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
          featureLoader={featureLoader}
        />
      )}
    </div>
  );
}

export default UploadFile;
