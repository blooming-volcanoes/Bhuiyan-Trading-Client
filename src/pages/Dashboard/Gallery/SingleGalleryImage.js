import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SingleGalleryImage({ handelDeleteImage, image }) {
  const [copyUrl, setCopyUrl] = useState(null);

  function handelCopyUrl(image) {
    setCopyUrl(image);
    navigator.clipboard.writeText(image);
    toast.success("Link Copied !!!");
  }

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
      }}
      className="group relative m-4 flex h-full min-h-[200px] min-w-[280px] flex-1 cursor-pointer items-center justify-center rounded-lg bg-gray-100 "
    >
      <div className="absolute h-full w-full rounded-lg bg-white" />

      <LazyLoadImage
        className="h-full min-h-[200px]  rounded-lg object-cover"
        src={image}
        effect="blur"
      />

      <div className="absolute top-0 left-0 z-[3] flex h-full w-full cursor-pointer items-center justify-center space-x-4 bg-[rgba(0,0,0,0.2)] opacity-0 transition-all group-hover:opacity-100">
        {copyUrl === image ? (
          <button className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50%] bg-white font-bold text-green-600 transition-all hover:scale-110 focus:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
          </button>
        ) : (
          <div
            onClick={() => handelCopyUrl(image)}
            className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50%] bg-white transition-all hover:scale-110"
          >
            <BiCopy className="text-xl" />
          </div>
        )}

        <div
          onClick={() => handelDeleteImage(image)}
          className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50%] bg-white transition-all hover:scale-110"
        >
          <AiOutlineDelete className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default SingleGalleryImage;
