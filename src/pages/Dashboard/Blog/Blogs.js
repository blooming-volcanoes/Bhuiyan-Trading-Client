import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import Pagination from "../../../Components/custom/Pagination/Pagination";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpBlogService from "../../../services/blog.service";
import BlogsTable from "./../../../Components/dashboard/Table/BlogsTable";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tableHeadData, setTableHeadData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDataLimitDone, setIsDataLimitDone] = useState(false);

  useEffect(() => {
    async function getAllBlogs() {
      setLoader(true);
      try {
        const data = await httpBlogService.getAllBlogsWithPagination(
          searchParams.get("page")
        );
        setBlogs(
          data.sort((a, b) => {
            let firstTime = new Date(a.updated_at);
            let lastTime = new Date(b.updated_at);

            return lastTime - firstTime;
          })
        );
        if (!data.length || data.length < 10) {
          setIsDataLimitDone(true);
        } else {
          setIsDataLimitDone(false);
        }
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    getAllBlogs();
  }, [searchParams]);

  useEffect(() => {
    if (blogs.length) {
      let keys = [];
      for (let key in blogs[0]) {
        if (
          key !== "id" &&
          key !== "featureImg" &&
          key !== "postDesc" &&
          key !== "categoryId" &&
          key !== "status"
        ) {
          keys.push(key);
        }
      }
      setTableHeadData(keys);
    }
  }, [blogs]);

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          All Blogs
        </h1>

        {loader ? (
          <div className="flex h-screen items-center justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : (
          <BlogsTable theadData={tableHeadData} tableData={blogs} />
        )}

        <Pagination
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          isDataLimitDone={isDataLimitDone}
        />
      </section>
    </DashboardLayout>
  );
}

export default Blogs;
