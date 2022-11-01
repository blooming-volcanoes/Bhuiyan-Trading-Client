import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import httpProductService from "../../../services/product.service";
import SingleGalleryImage from "../Gallery/SingleGalleryImage";
import DashboardLayout from "./../../../layouts/DashboardLayout";
import httpBrandService from "./../../../services/brand.service";

function BrandPage() {
  const [uploadedLogo, setUploadedLogo] = useState(null);
  const [isLogoSubmitted, setIsLogoSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isBrandLoading, setIsBrandLoading] = useState(false);
  const [allBrands, setAllBrands] = useState([]);
  const [isBrandDeleted, setIsBrandDeleted] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    logo: null,
  });

  useEffect(() => {
    setUserData((prev) => {
      return {
        ...prev,
        logo: uploadedLogo,
      };
    });
  }, [uploadedLogo]);

  function handelInputChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handelFormSubmit(e) {
    e.preventDefault();
    if (!userData.name.length) {
      toast.error("Must need to give a name");
      return;
    }
    if (!userData.logo) {
      toast.error("Must need to select a logo");
      return;
    }
    setLoader(true);
    try {
      await httpBrandService.postBrand(userData);
      toast.success("Brand added Successfully");
      setIsLogoSubmitted(true);
      setUserData({
        name: "",
        logo: null,
      });
    } catch (error) {
      toast.error("Internal Server Error");
      console.log(error);
    } finally {
      setLoader(false);
      setIsLogoSubmitted(false);
    }
  }

  //   get All Brand

  useEffect(() => {
    async function getAlLBrands() {
      setIsBrandLoading(true);
      try {
        const data = await httpBrandService.getAllBrands();
        setAllBrands(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsBrandLoading(false);
      }
    }
    getAlLBrands();
  }, [loader, isBrandDeleted]);

  //   Delete Brand
  function handelDeleteBrand(image, id) {
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        httpBrandService
          .deleteSingleBrandById(id)
          .then(() => {
            setIsBrandDeleted(true);
            Swal.fire("Saved!", "", "success");
            httpProductService
              .deleteGalleryImages(image.split("/")[4])
              .then(() => {});
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsBrandDeleted(false);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Brand Page
        </h1>

        {/* Form */}
        <div className="my-10 flex justify-center">
          <form
            onSubmit={handelFormSubmit}
            className="relative mx-5 w-full space-y-4 rounded border-2 bg-white p-4 shadow-lg md:w-[600px] lg:w-[600px]"
          >
            <label htmlFor="cateName" className="flex flex-col space-y-2">
              <span id="name" className="text-xs font-semibold text-gray-400">
                Name
              </span>
              <input
                onChange={handelInputChange}
                type="text"
                value={userData.name}
                required
                id="name"
                name="name"
                className="rounded-lg border-gray-300 text-sm"
              />
            </label>

            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold text-gray-400">Logo</span>
              <UploadFile
                isMultiple={false}
                setUploadedFeature={setUploadedLogo}
                uploadedFeature={uploadedLogo}
                isFeatureSubmitted={isLogoSubmitted}
              />
            </div>
            {loader ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton
                  styles="flex justify-center"
                  svg="w-10 h-10 text-indigo-500"
                />
              </div>
            ) : (
              <button
                disabled={loader}
                className="dashboard-btn w-full flex-1 border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
                type="submit"
              >
                Submit
              </button>
            )}
          </form>
        </div>

        {/* Render All Brands Here */}
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          All Brands Here
        </h1>

        <div>
          {isBrandLoading ? (
            <div className="flex h-full items-center justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : allBrands.length <= 0 ? (
            <div className="mt-10 flex h-full  justify-center space-y-4 font-bold text-gray-500">
              <h1 className="text-2xl">No Brand uploaded yet!!!</h1>
            </div>
          ) : (
            <div className="mx-5 flex flex-wrap items-center justify-between space-x-4">
              {allBrands.map((brand) => (
                <SingleGalleryImage
                  handelDeleteImage={handelDeleteBrand}
                  brandId={brand?.id}
                  key={brand?.name}
                  image={brand?.logo}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default BrandPage;
