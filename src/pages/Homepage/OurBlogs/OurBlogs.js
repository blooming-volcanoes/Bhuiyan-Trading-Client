import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import httpBlogService from "../../../services/blog.service";

function OurBlogs() {
  const [loader, setLoader] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let isMuted = true;
    async function getAllBlogs() {
      setLoader(true);
      try {
        const data = await httpBlogService.getAllBlogsWithPagination(1);
        isMuted &&
          setBlogs(
            data.sort((a, b) => {
              let firstTime = new Date(a.updated_at);
              let lastTime = new Date(b.updated_at);

              return lastTime - firstTime;
            })
          );
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    getAllBlogs();

    return () => {
      isMuted = false;
    };
  }, []);

  console.log(blogs);

  return (
    <section className="whowe-bg py-8" data-aos="fade-up">
      <div className="main-container">
        <h1 className="pb-6 text-center text-4xl font-bold text-white">
          Our Blogs
        </h1>
        {loader ? (
          <div className="flex h-full items-center justify-center space-y-4 py-10">
            <LoadingButton styles="" svg="w-16 h-16 text-white" />
          </div>
        ) : (
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                onClick={() => navigate(`/blog/${blog?.slug}`)}
                style={{
                  backgroundImage: `linear-gradient(
                    to top,
                    #000000c9,
                    #3b3b3ba9,
                    #77777765,
                    #b9b9b900,
                    #ffffff00
                  ),
           url(${blog.featureImg})`,
                }}
                className="flex h-[273px] cursor-pointer flex-col items-center justify-end rounded-lg bg-cover bg-center bg-no-repeat"
              >
                <h3 className="px-3 pb-10 text-xl font-bold text-white">
                  {blog?.title}
                </h3>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-center font-semibold">
          <button
            onClick={() => navigate(`/latestNews?page=1`)}
            className="rounded bg-white py-2 px-4 hover:bg-gray-100"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurBlogs;
