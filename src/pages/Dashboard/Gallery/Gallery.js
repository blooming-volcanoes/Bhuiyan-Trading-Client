import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpProductService from "../../../services/product.service";
import httpGalleryService from "./../../../services/gallery.service";
import SingleGalleryImage from "./SingleGalleryImage";

function Gallery() {
  const [allImages, setAllImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchQueryParams, setSearchQueryParams] = useSearchParams();
  const [isImageDeleted, setIsImageDeleted] = useState(false);

  useEffect(() => {
    let isMuted = true;
    async function getGalleryImages() {
      setLoader(true);
      try {
        const page = searchQueryParams.get("page") || 1;
        const limit = searchQueryParams.get("limit") || 10;
        const data = await httpGalleryService.getGalleryImagesByPagination(
          page,
          limit
        );
        isMuted && setAllImages(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getGalleryImages();
    return () => {
      isMuted = false;
    };
  }, [searchQueryParams, isImageDeleted]);

  function handelDeleteImage(image) {
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        httpProductService
          .deleteGalleryImages(image.split("/")[4])
          .then(() => {
            Swal.fire("Saved!", "", "success");
            setIsImageDeleted(true);
          })
          .finally(() => {
            setIsImageDeleted(false);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <DashboardLayout>
      <section className="bg-gray-100">
        <h1 className="py-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Gallery
        </h1>

        {/* Render All the Images */}
        <div>
          {loader ? (
            <div className="flex h-screen items-center justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <div className="mx-5 flex flex-wrap items-center justify-between space-x-4">
              {allImages?.results?.map((image) => (
                <SingleGalleryImage
                  handelDeleteImage={handelDeleteImage}
                  key={image}
                  image={image}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 pb-10">
          {allImages?.previous && (
            <button
              onClick={() => {
                setSearchQueryParams({
                  page: searchQueryParams.get("page")
                    ? +searchQueryParams.get("page") - 1
                    : 2,
                  limit: 10,
                });
              }}
              className="dashboard-btn flex items-center border-gray-500 bg-gray-500 hover:text-gray-500"
            >
              <span className="mr-2 text-2xl">
                <BsArrowLeft />
              </span>
              Back
            </button>
          )}
          {allImages?.next && (
            <button
              onClick={() => {
                setSearchQueryParams({
                  page: searchQueryParams.get("page")
                    ? +searchQueryParams.get("page") + 1
                    : 2,
                  limit: 10,
                });
              }}
              className="dashboard-btn flex items-center"
            >
              Load More
              <span className="ml-2 text-2xl">
                <BsArrowRight />
              </span>
            </button>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Gallery;
