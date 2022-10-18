import draftToHtml from "draftjs-to-html";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import bgTop from "../../assets/Images/bg-top.png";
import PageLayout from "../../layouts/PageLayout";
import LoadingButton from "./../../Components/custom/Buttons/LoadingButton";
import httpBlogService from "./../../services/blog.service";

function LatestNews() {
  const [blogs, setBlogs] = useState([]);
  const [smallBlogs, setSmallBlogs] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getAllBlogs() {
      setLoader(true);
      try {
        const data = await httpBlogService.getAllBlogs();
        setBlogs(
          data.sort((a, b) => {
            let firstTime = new Date(a.updated_at);
            let lastTime = new Date(b.updated_at);

            return lastTime - firstTime;
          })
        );
        console.log(JSON.parse(data[0].postDesc));
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    getAllBlogs();
  }, []);

  useEffect(() => {
    let modifiedSmallBlogs = [];
    if (blogs.length) {
      for (let i = 0; i < blogs.length; i++) {
        const parsedData = JSON.parse(blogs[i].postDesc);
        console.log(parsedData.blocks[0].text.slice(0, 100));
        modifiedSmallBlogs.push({
          ...blogs[i],
          postDesc: { ...parsedData, blocks: [parsedData.blocks[0]] },
        });
      }
    }

    setSmallBlogs(modifiedSmallBlogs);
  }, [blogs]);

  console.log(smallBlogs);

  return (
    <PageLayout>
      <section>
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
                <p className="text-sm font-semibold">
                  Date :{" "}
                  {new Date(smallBlogs[0]?.updated_at).toLocaleDateString()}{" "}
                  Time :{" "}
                  {new Date(smallBlogs[0]?.updated_at).toLocaleTimeString()}
                </p>

                <h1 className="text-3xl font-semibold">
                  {smallBlogs[0]?.title}
                </h1>
                {/* blog content */}
                <article className="prose prose-sm prose-img:hidden">
                  {ReactHtmlParser(draftToHtml(smallBlogs[0]?.postDesc))}
                </article>

                <Link to={`/blog/${smallBlogs[0]?.slug}`}>
                  <button type="button" className="dashboard-btn mt-10">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
            {/* All blogs */}
            <div className=" main-container grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-4">
              {smallBlogs?.map((blog, i) => (
                <div
                  className="space-y-2 rounded-lg border bg-white py-4 px-2 shadow-lg"
                  key={i}
                >
                  <img className="rounded" src={blog?.featureImg} alt="" />
                  <Link
                    to={`/blog/${blog?.id}`}
                    className="text-lg font-semibold"
                  >
                    {blog?.title}
                  </Link>
                  <p className="text-xs font-semibold">
                    Date : {new Date(blog?.updated_at).toLocaleDateString()}{" "}
                    Time : {new Date(blog?.updated_at).toLocaleTimeString()}
                  </p>
                  {/* blog content */}
                  <article className="prose prose-sm  prose-p:truncate">
                    {ReactHtmlParser(draftToHtml(blog?.postDesc))}
                  </article>

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
      </section>
    </PageLayout>
  );
}

export default LatestNews;
