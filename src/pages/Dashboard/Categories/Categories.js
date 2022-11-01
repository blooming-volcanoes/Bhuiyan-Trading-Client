import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import CategoryTable from "../../../Components/dashboard/Table/CategoryTable";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "../../../services/category.service";
import httpProductService from "./../../../services/product.service";

const theadData = ["Category name", "Sub-category Name", "Action"];

function Categories() {
  const [loader, setLoader] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [categoryRelatedProduct, setCategoryRelatedProduct] = useState([]);
  const [productRelatedImages, setProductRelatedImages] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    async function loadCategories() {
      setLoader(true);
      try {
        const data = await httpCateGoryService.getAllCategory();
        setAllCategories(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }

    loadCategories();
  }, [isDeleted]);

  useEffect(() => {
    async function deleteAllProductRelatedImages() {
      if (productRelatedImages.length) {
        for (let i = 0; i < productRelatedImages.length; i++) {
          const element = productRelatedImages[i];
          await httpProductService.deleteGalleryImages(element.split("/")[4]);
        }
      }
    }

    async function deleteAllCategoryRelatedProducts() {
      if (categoryRelatedProduct.length) {
        for (let i = 0; i < categoryRelatedProduct.length; i++) {
          const element = categoryRelatedProduct[i];
          await httpProductService.deleteProduct(element?.id, {
            headers: {
              authorization: `Bearer ${user?.token}`,
            },
          });
        }
      }
    }
    deleteAllCategoryRelatedProducts();
    deleteAllProductRelatedImages();
  }, [isDeleted]);

  function handelCategoryDelete(category) {
    setProductRelatedImages([]);
    setCategoryRelatedProduct([]);
    // get all the products
    httpProductService.getAllProductByCateGory(category.id).then((data) => {
      setCategoryRelatedProduct(data);
      for (let i = 0; i < data.length; i++) {
        const product = data[i];
        setProductRelatedImages((prev) => [
          ...prev,
          ...product.gallaryImg,
          product.featureImg,
        ]);
      }
    });

    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        httpCateGoryService
          .deleteCategoryById(category.id)
          .then((data) => {
            Swal.fire("Saved!", "", "success");
            setIsDeleted(true);
            category.galleryImg.forEach(async (element) => {
              if (element?.split("/")[3] === "category") {
                await httpCateGoryService.deleteCategoryImageByName(
                  element?.split("/")[4]
                );
              } else {
                await httpProductService.deleteGalleryImages(
                  element.split("/")[4]
                );
              }
            });
            if (category.featureImg.split("/")[3] === "category") {
              httpCateGoryService
                .deleteCategoryImageByName(category.featureImg?.split("/")[4])
                .then(() => {});
            } else {
              httpProductService
                .deleteGalleryImages(category.featureImg?.split("/")[4])
                .then(() => {});
            }
            setProductRelatedImages([]);
            setCategoryRelatedProduct([]);
          })
          .catch((error) => {
            setIsDeleted(false);
            console.log(error);
          })
          .finally(() => {
            setIsDeleted(false);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <DashboardLayout>
      <section className="main-container lg:mx-5">
        <h1 className="my-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          All Categories ({allCategories?.length})
        </h1>

        {/* all-categories */}
        {loader ? (
          <div className="flex h-screen justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : (
          <CategoryTable
            handelCategoryDelete={handelCategoryDelete}
            theadData={theadData}
            tableData={allCategories}
          />
        )}
      </section>
    </DashboardLayout>
  );
}

export default Categories;
