import React, { useEffect, useState } from "react";
import bgTop from "../../assets/Images/bg-top.png";
import dummy from "../../assets/Images/dummy.jpg";
import PageLayout from "../../layouts/PageLayout";
import LoadingButton from "./../../Components/custom/Buttons/LoadingButton";
import httpBlogService from "./../../services/blog.service";

function LatestNews() {
  const [blogs, setBlogs] = useState([]);
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
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    getAllBlogs();
  }, []);

  console.log(blogs);

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
          <div className="flex h-full justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : (
          <div className="main-container grid grid-cols-1 gap-x-10 gap-y-10 py-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-0">
            {/* blog Image */}
            <img className="rounded" src={blogs[0]?.featureImg} alt="" />

            {/* blog contents */}
            <div className="space-y-4">
              <p className="text-sm font-semibold">
                Date : {new Date(blogs[0]?.updated_at).toLocaleDateString()}{" "}
                Time : {new Date(blogs[0]?.updated_at).toLocaleTimeString()}
              </p>

              <h1 className="text-3xl font-semibold">{blogs[0]?.title}</h1>
              <p className="mt-5 pt-3 text-justify font-semibold text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, magni exercitationem aliquid et recusandae
                praesentium. Molestiae, velit cupiditate dolore similique soluta
                ea provident eius dolor voluptatem tenetur sapiente maiores,
                officiis fugiat nesciunt nostrum laboriosam? Sit itaque nam
                illum, repellendus impedit doloribus enim, ad repudiandae sunt,
                aliquam aperiam repellat veritatis obcaecati. Autem ipsam eos
                perferendis labore porro voluptates tempore eum nesciunt non
                illum minima laudantium facere qui possimus, excepturizz
              </p>
            </div>
          </div>
        )}

        {/* All blogs */}
        <div className=" main-container grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-4">
          {Array(8)
            .fill(blogs[0])
            .map((blog, i) => (
              <div
                className="space-y-2 rounded-lg bg-white py-4 px-2 shadow-lg"
                key={i}
              >
                <img className="rounded" src={dummy} alt="" />
                <p className="text-lg font-semibold">{blog?.title}</p>
                <p className="text-xs font-semibold">
                  Date : {new Date().toLocaleDateString()} Time :{" "}
                  {new Date().toLocaleTimeString()}
                </p>
                <p className="font-semibold">{blog?.content}</p>
              </div>
            ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default LatestNews;
