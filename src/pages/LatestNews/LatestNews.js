import draftToHtml from "draftjs-to-html";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";
import { Link, useSearchParams } from "react-router-dom";
import bgTop from "../../assets/Images/bg-top.png";
import Pagination from "../../Components/custom/Pagination/Pagination";
import PageLayout from "../../layouts/PageLayout";
import LoadingButton from "./../../Components/custom/Buttons/LoadingButton";
import httpBlogService from "./../../services/blog.service";

function LatestNews() {
  const [blogs, setBlogs] = useState([]);
  const [smallBlogs, setSmallBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
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
    let modifiedSmallBlogs = [];
    if (blogs.length) {
      for (let i = 0; i < blogs.length; i++) {
        const parsedData = JSON.parse(blogs[i].postDesc);
        modifiedSmallBlogs.push({
          ...blogs[i],
          postDesc: {
            ...parsedData,
            blocks: [
              parsedData.blocks[0],
              parsedData.blocks[1] && parsedData.blocks[1],
            ],
          },
        });
      }
    }

    setSmallBlogs(modifiedSmallBlogs);
  }, [blogs]);

  return (
    <PageLayout>
      <section className="bg-gray-100">
        {/* latest News Banner */}

        <div
          className="bg-[#BCCEFF] bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url('${bgTop}')` }}
        >
          <div className="main-container flex h-full min-h-[300px] items-center">
            <h1 className="text-4xl font-medium">Latest News</h1>
          </div>
        </div>

        {/* Recent Blog */}
        {loader ? (
          <div className="flex h-screen justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : (
          <>
            <div className="main-container grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-0">
              {/* blog Image */}
              <img
                className="mx-auto w-full rounded object-contain md:w-[500px] lg:w-[500px]"
                src={smallBlogs[0]?.featureImg}
                alt=""
              />

              {/* blog contents */}
              <div>
                <p className="mt-2 flex space-x-2 text-xs font-semibold">
                  <span>
                    <Moment parse="YYYY-MM-DD HH:mm">
                      {smallBlogs[0]?.created_at}
                    </Moment>
                  </span>
                  <span className="text-green-500">
                    <Moment date={smallBlogs[0]?.updated_at} fromNow />
                  </span>
                </p>

                <h1 className="text-3xl font-semibold">
                  {smallBlogs[0]?.title}
                </h1>
                {/* blog content */}
                <article className="prose prose-sm h-[200px] overflow-y-auto rounded bg-white p-4 shadow scrollbar-hide prose-img:hidden">
                  {ReactHtmlParser(draftToHtml(smallBlogs[0]?.postDesc))}
                  ...
                </article>

                <Link to={`/blog/${smallBlogs[0]?.slug}`}>
                  <button type="button" className="dashboard-btn mt-4">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
            <h1 className="mt-10 text-center text-4xl font-bold text-gray-700 underline">
              More blogs
            </h1>
            {/* All blogs */}
            <div className="main-container grid grid-cols-1 gap-6 py-4 md:grid-cols-2 lg:grid-cols-4">
              {smallBlogs?.map((blog, i) => (
                <div
                  className="space-y-2 rounded-lg border bg-white py-4 px-2 shadow-lg"
                  key={i}
                >
                  <img
                    className="w-full rounded object-contain md:h-[300px] lg:h-[180px]"
                    src={blog?.featureImg}
                    alt=""
                  />
                  <Link
                    to={`/blog/${blog?.slug}`}
                    className="block text-sm font-light hover:text-blue-600 hover:underline"
                  >
                    {blog?.title}
                  </Link>
                  <p className="mt-2 flex space-x-2 text-xs font-semibold">
                    <span className="text-green-500">
                      <Moment date={blog?.updated_at} fromNow />
                    </span>
                  </p>

                  <button
                    type="button"
                    className="text-xs font-semibold text-gray-600 underline"
                  >
                    <Link to={`/blog/${blog?.slug}`}>Read More</Link>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        <Pagination
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          isDataLimitDone={isDataLimitDone}
        />
      </section>
    </PageLayout>
  );
}

export default LatestNews;
