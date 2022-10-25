import React, { useEffect, useState } from "react";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import DashboardLayout from "../../../layouts/DashboardLayout";

function GalleryUpload() {
  const [uploadedGalleryImage, setUploadedGalleryImage] = useState(null);
  const [trackGalleryImageLength, setTrackGalleryImageLength] = useState(null);
  const [isGallerySubmitted, setIsGallerySubmitted] = useState(false);

  useEffect(() => {
    if (uploadedGalleryImage) {
      console.log(uploadedGalleryImage);
      setIsGallerySubmitted(true);
    }
  }, [uploadedGalleryImage]);

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Gallery Image Upload
        </h1>

        {/* uploading option */}
        <form className="mx-auto mt-10 flex flex-col justify-center space-y-4 border bg-white p-4 shadow-xl md:w-2/3 lg:w-2/3">
          <div className="flex-1">
            <UploadFile
              isMultiple={true}
              setUploadedGalleryImage={setUploadedGalleryImage}
              uploadedGalleryImage={uploadedGalleryImage}
              setTrackGalleryImageLength={setTrackGalleryImageLength}
              isGallerySubmitted={isGallerySubmitted}
            />
          </div>
        </form>
      </section>
    </DashboardLayout>
  );
}

export default GalleryUpload;
