import React, { useRef } from "react";
import httpCateGoryService from "../../../services/category.service";

function CateGoryFeature({
  featureFile,
  setFeatureFile,
  repairSingleFile,
  renderFeatureImage,
  setRenderFeatureImage,
  handelSaveFeatureImage,
  featureImageLoader,
  setUploadedFeatureImage,
}) {
  const fileRef = useRef();

  const handelCateGoryFeature = (e) => {
    repairSingleFile(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setRenderFeatureImage(readerEvent.target.result);
    };
  };

  async function handelClearAllFeatureImages(e) {
    e.stopPropagation();
    if (renderFeatureImage) {
      await httpCateGoryService.deleteCategoryImageByName(
        renderFeatureImage?.split("/")[4]
      );
    }

    setRenderFeatureImage(null);
    setFeatureFile(null);
    setUploadedFeatureImage(null);
  }

  return (
    <div className="space-y-4 rounded border border-gray-300 p-2 shadow">
      {/* Show feature Image */}
      <p className="text-center text-xs text-indigo-500">
        Note : Upload a Category Feature Image here (Only JPEG, JPG, PNG file
        are allowed)
      </p>
      <div>
        {renderFeatureImage && (
          <div>
            <img
              className="h-[200px] w-full object-contain"
              src={renderFeatureImage}
              alt=""
            />
          </div>
        )}
      </div>
      {featureFile ? (
        <div className="flex w-full justify-center space-x-6">
          <button
            disabled={featureImageLoader}
            onClick={handelSaveFeatureImage}
            type="button"
            className="dashboard-btn border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
          >
            Save
          </button>
          <button
            disabled={featureImageLoader}
            type="button"
            onClick={handelClearAllFeatureImages}
            className="dashboard-btn border-red-500 bg-red-400 hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed"
          >
            Change
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileRef.current.click()}
          className="flex cursor-pointer flex-col items-center justify-center"
        >
          <svg
            className="h-8 w-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">
            Select a Feature Image
          </span>
        </div>
      )}

      <input
        onChange={handelCateGoryFeature}
        ref={fileRef}
        type="file"
        className="hidden"
      />
    </div>
  );
}

export default CateGoryFeature;
