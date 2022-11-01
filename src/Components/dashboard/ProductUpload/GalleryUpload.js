import React, { useEffect, useRef, useState } from "react";
import httpProductService from "../../../services/product.service";

function GalleryUpload({
  setGalleryFiles,
  galleryFiles,
  repairMultipleFiles,
  renderGalleryImages,
  setRenderGalleryImages,
  handelGalleryImages,
  setUploadedGalleryImage,
  galleryLoader,
  setTrackGalleryImageLength,
}) {
  const fileRef = useRef();
  const [selectMulti, setSelectMulti] = useState([]);
  // console.log(selectMulti);
  const handelGalleryFiles = async (e) => {
    const files = [...e.target.files];
    const newFiles = [];

    files.forEach((file) => {
      newFiles.push(file);
    });

    setSelectMulti((prev) => [...prev, ...newFiles]);

    setTrackGalleryImageLength(files.length);
  };

  // Render the images
  useEffect(() => {
    if (selectMulti?.length) {
      repairMultipleFiles(selectMulti);
      async function loadRenderImage() {
        // Convert the FileList into an array and iterate
        let files = Array.from(selectMulti).map((file) => {
          // Define a new file reader
          let reader = new FileReader();

          // Create a new promise
          return new Promise((resolve) => {
            // Resolve the promise after reading file
            reader.onload = () => resolve(reader.result);

            // Read the file as a text
            reader.readAsDataURL(file);
          });
        });

        // At this point you'll have an array of results
        let res = await Promise.all(files);
        setRenderGalleryImages(res);
      }
      loadRenderImage();
    }
  }, [selectMulti?.length]);

  async function handelClearAllGalleryImages(e) {
    e.stopPropagation();
    if (renderGalleryImages.length) {
      renderGalleryImages.forEach(async (img) => {
        await httpProductService.deleteGalleryImages(img.split("/")[4]);
      });
    }
    setSelectMulti([]);
    setGalleryFiles(null);
    setRenderGalleryImages(null);
    setUploadedGalleryImage(null);
  }

  return (
    <div className="space-y-4 rounded border border-gray-300 p-2 shadow">
      <div
        className={`${
          renderGalleryImages?.length > 0 && "h-[300px] overflow-y-auto"
        }`}
      >
        {renderGalleryImages && (
          <div className="flex flex-col items-center justify-center space-y-5">
            {renderGalleryImages.map((img, i) => (
              <img
                key={i}
                className="w-[600px]  object-contain"
                src={img}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {galleryFiles ? (
        <div className="flex w-full justify-center space-x-6">
          {renderGalleryImages && renderGalleryImages[0]?.startsWith("data") && (
            <button
              disabled={galleryLoader}
              type="button"
              className="dashboard-btn border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
              onClick={handelGalleryImages}
            >
              Save
            </button>
          )}

          {renderGalleryImages && renderGalleryImages[0]?.startsWith("data") && (
            <button
              disabled={galleryLoader}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileRef.current.click();
              }}
              className="dashboard-btn border-red-500 bg-red-400 hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed"
            >
              Add More
            </button>
          )}
          <button
            disabled={galleryLoader}
            type="button"
            onClick={handelClearAllGalleryImages}
            className="dashboard-btn border-red-500 bg-red-400 hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed"
          >
            Clear All
          </button>
          <input
            onChange={handelGalleryFiles}
            ref={fileRef}
            type="file"
            multiple
            className="hidden"
          />
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
            Select Gallery Images
          </span>

          <input
            onChange={handelGalleryFiles}
            ref={fileRef}
            type="file"
            multiple
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}

export default GalleryUpload;
