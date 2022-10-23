import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import Pagination from "../../../Components/custom/Pagination/Pagination";
import useDebounce from "../../../hooks/useDebounce";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpBlogService from "../../../services/blog.service";
import BlogsTable from "./../../../Components/dashboard/Table/BlogsTable";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tableHeadData, setTableHeadData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDataLimitDone, setIsDataLimitDone] = useState(false);
  const [isBlogDeleted, setIsBlogDeleted] = useState(false);
  const [search, setSearch] = useState(null);
  const debounceData = useDebounce(search, 800);
  const [searchLoader, setSearchLoader] = useState(false);
  const [previousAllBlogs, setPreviousAllBlogs] = useState([]);

  useEffect(() => {
    async function getAllBlogs() {
      setLoader(true);
      try {
        const data = await httpBlogService.getAllBlogsWithPagination(
          searchParams.get("page")
        );
        const sortedBlogs = data.sort((a, b) => {
          let firstTime = new Date(a.updated_at);
          let lastTime = new Date(b.updated_at);

          return lastTime - firstTime;
        });
        setBlogs(sortedBlogs);
        setPreviousAllBlogs(sortedBlogs);
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
  }, [searchParams, isBlogDeleted]);

  useEffect(() => {
    if (blogs.length) {
      let keys = [];
      for (let key in blogs[0]) {
        if (
          key !== "featureImg" &&
          key !== "postDesc" &&
          key !== "categoryId" &&
          key !== "status" &&
          key !== "slug"
        ) {
          keys.push(key);
        }
      }
      setTableHeadData(keys);
    }
  }, [blogs]);

  const handelDeleteBlog = (slug) => {
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setIsBlogDeleted(true);
        httpBlogService
          .deleteBlogBySlug(slug)
          .then((data) => {
            Swal.fire("Saved!", "", "success");
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsBlogDeleted(false);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // handle product search
  useEffect(() => {
    async function getSearchResult() {
      setSearchLoader(true);
      try {
        const data = await httpBlogService.searchBlogByTheTitle({
          title: `%${debounceData}%`,
        });

        setBlogs(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchLoader(false);
      }
    }

    if (debounceData) {
      getSearchResult();
    } else {
      setBlogs(previousAllBlogs);
    }
  }, [debounceData]);

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          All Blogs
        </h1>

        <div className="mx-8 mt-4 flex w-full justify-center lg:w-2/4 lg:justify-start">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className=" flx-1 lg:full w-[400px] rounded border-2 border-gray-400 text-sm shadow focus:ring-0"
            placeholder="Search example. Ships models"
          />
        </div>

        {loader ? (
          <div className="flex h-screen items-center justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : blogs.length ? (
          searchLoader ? (
            <div className="flex h-screen items-center justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <BlogsTable
              handelDeleteBlog={handelDeleteBlog}
              theadData={tableHeadData}
              tableData={blogs}
            />
          )
        ) : (
          <div className="mt-10 flex h-full  justify-center space-y-4 font-bold text-gray-500">
            <h1 className="text-2xl">{blogs.msg}</h1>
          </div>
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
