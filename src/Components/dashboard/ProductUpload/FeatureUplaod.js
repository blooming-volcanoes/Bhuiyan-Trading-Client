import React, { useRef } from "react";

function FeatureUplaod({
  file,
  repairSingleFile,
  setFile,
  handelSaveFeatureImage,
  readFeatureImage,
  setReadFeatureImage,
  setUploadedFeature,
}) {
  const fileRef = useRef();

  function handelFeatureFiles(e) {
    repairSingleFile(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setReadFeatureImage(readerEvent.target.result);
    };
  }

  return (
    <div className="space-y-4 rounded border border-gray-300 p-2 shadow">
      {/* Show feature Image */}
      <p className="text-center text-xs text-indigo-500">
        Note : Upload a Product Feature Image here
      </p>
      <div>
        {readFeatureImage && (
          <div>
            <img
              className="h-[200px] w-full object-contain"
              src={readFeatureImage}
              alt=""
            />
          </div>
        )}
      </div>

      {file ? (
        <div className="flex w-full justify-center space-x-6">
          <button
            onClick={handelSaveFeatureImage}
            type="button"
            className="dashboard-btn border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500"
          >
            Save
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFile(null);
              setReadFeatureImage(null);
              setReadFeatureImage(null);
            }}
            className="dashboard-btn border-red-500 bg-red-400 hover:border-red-500 hover:text-red-500"
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
        onChange={handelFeatureFiles}
        ref={fileRef}
        type="file"
        className="hidden"
      />
    </div>
  );
}

export default FeatureUplaod;
