import React, { useEffect, useState } from "react";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import CategoryTable from "../../../Components/dashboard/Table/CategoryTable";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "../../../services/category.service";

const theadData = ["categoryName", "subCategoryName", "Action"];

function Categories() {
  const [loader, setLoader] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

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
          <CategoryTable theadData={theadData} tableData={allCategories} />
        )}
      </section>
    </DashboardLayout>
  );
}

export default Categories;
