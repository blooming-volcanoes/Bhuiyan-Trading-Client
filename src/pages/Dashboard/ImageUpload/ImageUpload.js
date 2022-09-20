import React, { useRef, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpDashboardService from "../../../services/dashboard.service";

function ImageUpload() {
  const fileRef = useRef();
  const [files, setFiles] = useState({});

  async function handelSubmit(e) {
    e.preventDefault();
    if (files?.type) {
      const formData = new FormData();
      formData.append("img", files);
      try {
        const data = await httpDashboardService.uploadImage(formData);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handelFiles(e) {
    setFiles(e.target.files[0]);
  }

  return (
    <DashboardLayout>
      <section className="mx-6 lg:mx-0">
        <div className="mt-20 flex w-full flex-col items-center justify-center space-y-4">
          {/* content */}
          <div>
            <h1 className="text-2xl font-semibold capitalize text-gray-400">
              Upload Your Images here 📷
            </h1>
          </div>
          {/* Upload  */}
          <form
            onSubmit={handelSubmit}
            className="border-blue hover:bg-blue flex h-full w-full cursor-pointer flex-col items-center justify-center space-y-10 rounded-lg border px-4  py-6 uppercase tracking-wide shadow-lg lg:h-[200px] lg:w-2/4"
          >
            <div
              onClick={() => fileRef.current.click()}
              className="flex flex-col items-center justify-center"
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
                Select a Image
              </span>
            </div>
            <input
              onChange={handelFiles}
              ref={fileRef}
              type="file"
              className="hidden"
            />
            <button className="dashboard-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ImageUpload;
