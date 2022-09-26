import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "./../../../services/category.service";

function CategoryEdit() {
  const { id } = useParams();
  const [prevLoading, setPrevLoading] = useState(false);
  const [prevCategory, setPrevCategory] = useState({});
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (id) {
      setPrevLoading(true);
      httpCateGoryService
        .getSingleCategoryById(id)
        .then((data) => {
          setPrevCategory(data[0]);
          console.log(data[0]);
        })
        .catch((error) => {
          console.log(error);
          setPrevLoading(false);
        })
        .finally(() => {
          setPrevLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (prevCategory?.categoryName) {
      setDetails((prev) => {
        return {
          ...prev,
          categoryName: prevCategory.categoryName,
          subCategoryName: prevCategory.subCategoryName.join(" "),
        };
      });
    }
  }, [prevCategory]);

  // Getting all the data
  const handelInputChange = (e) => {
    const { value, name } = e.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(details);

  return (
    <DashboardLayout>
      <section>
        <h1 className="my-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Edit Category
        </h1>
        <div className="mt-10 flex justify-center">
          {prevLoading ? (
            <div className="flex h-full justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <form className="relative mx-5 w-full space-y-2 rounded border-2 bg-white p-4 shadow-lg md:w-[600px] lg:w-[600px]">
              {/* Input fields */}
              <label htmlFor="cateName" className="flex flex-col space-y-2">
                <span
                  id="cateName"
                  className="text-xs font-semibold text-gray-400"
                >
                  Category name
                </span>
                <input
                  onChange={handelInputChange}
                  name="categoryName"
                  type="text"
                  className="rounded-lg border-gray-300 text-sm"
                  defaultValue={prevCategory?.categoryName}
                />
              </label>
              {/* Sub Categories */}
              <label htmlFor="cateName" className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span
                    id="cateName"
                    className="text-xs font-semibold text-gray-400"
                  >
                    Subcategory names
                  </span>
                </div>

                <input
                  onChange={handelInputChange}
                  name={`subCategoryName`}
                  type="text"
                  defaultValue={details?.subCategoryName}
                  className="rounded-lg border-gray-300 text-sm"
                  placeholder="Each Sub category will be separated by Space"
                />
              </label>

              {/* Save and Cancel */}

              <>
                <div className="flex justify-between">
                  <button
                    className="dashboard-btn border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="dashboard-btn border-red-500 bg-red-400 hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </>
            </form>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default CategoryEdit;
