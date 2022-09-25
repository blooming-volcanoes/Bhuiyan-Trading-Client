import React, { useEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "../../../services/category.service";

function Categories() {
  const [loader, setLoader] = useState(false);
  const [editId, setEditId] = useState(null);
  const [allCategories, setAllCategories] = useState([]);

  const handelEdit = (id) => {
    if (allCategories.find((cate) => cate.id === id)) {
      setEditId(id);
    }
  };

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
  }, []);

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
          <div className="flex flex-wrap justify-between gap-4">
            {allCategories.map((category) => (
              <form className="relative min-w-[280px] flex-1 space-y-2 rounded border-2 bg-white p-4 shadow-lg">
                {/* Edit button */}
                <button
                  onClick={() => handelEdit(category?.id)}
                  className="absolute right-5 text-2xl"
                  type="button"
                >
                  <TiEdit />
                </button>

                <label htmlFor="cateName" className="flex flex-col space-y-2">
                  <span
                    id="cateName"
                    className="text-xs font-semibold text-gray-400"
                  >
                    Category name
                  </span>
                  <input
                    type="text"
                    className="rounded-lg border-gray-300 text-sm"
                    defaultValue={category?.categoryName}
                  />
                </label>
                {/* Sub Categories */}
                <label htmlFor="cateName" className="flex flex-col space-y-2">
                  <span
                    id="cateName"
                    className="text-xs font-semibold text-gray-400"
                  >
                    Subcategory names
                  </span>
                  {category?.subCategoryName?.map(
                    (sub) =>
                      sub !== "" && (
                        <input
                          type="text"
                          className="rounded-lg border-gray-300 text-sm"
                          defaultValue={sub}
                        />
                      )
                  )}
                </label>

                {/* Save and Cancel */}
                {editId === category.id && (
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
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </form>
            ))}
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}

export default Categories;
