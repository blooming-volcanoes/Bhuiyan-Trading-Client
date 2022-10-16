import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import facebook from "../../assets/Images/facebook.png";
import fish1 from "../../assets/Images/fish1.jpg";
import PageLayout from "../../layouts/PageLayout";
import httpBlogService from "./../../services/blog.service";

function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    let isMounted = true;

    async function getBlog() {
      try {
        const data = await httpBlogService.getSingleBlogById();
      } catch (error) {
        console.log(error);
      }
    }
  }, [slug]);

  console.log(slug);

  return (
    <PageLayout>
      <section>
        {/* latest News Banner */}

        <div className="">
          <div className="mx-5 flex h-full min-h-[300px] max-w-4xl items-center md:mx-auto">
            <div className="mt-20">
              <h1 className="text-4xl font-medium">
                This is title where i am going to write the tile of a page. this
                is title.
              </h1>
              <p className="mt-2 text-sm font-semibold">
                Date : {new Date().toLocaleDateString()} Time :{" "}
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Blog */}
        <div className="grid  gap-1 md:grid-cols-6 ">
          {/* blog Image */}
          <div className="col-span-5 mx-5 md:mx-0">
            <img
              className="mx-auto h-64 w-full rounded object-cover md:h-96 "
              src={fish1}
              alt=""
            />
          </div>
          <div className="mx-auto ml-4 md:my-auto">
            <ul className="gap-x-3">
              <li className="flex gap-3 md:flex-col   md:space-y-3">
                {Array(3)
                  .fill("")
                  .map((_, i) => (
                    <a key={i} href="/">
                      <img className="h-10 w-10" src={facebook} alt="" />
                    </a>
                  ))}
              </li>
            </ul>
          </div>
          {/* blog contents */}
        </div>

        <div className="mx-auto max-w-5xl  gap-5 py-10   ">
          <div className="space-y-4   ">
            <div className="mx-5 flex flex-col justify-end">
              <div className="flex flex-col md:flex-row ">
                <p className="col-auto text-justify font-semibold md:w-[70%]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, magni exercitationem aliquid et recusandae
                  praesentium. Molestiae, velit cupiditate dolore similique
                  soluta ea provident eius dolor voluptatem tenetur sapiente
                  maiores, officiis fugiat nesciunt nostrum laboriosam? Sit
                  itaque nam illum, repellendus impedit doloribus enim, ad
                  repudiandae sunt, aliquam aperiam repellat veritatis
                  obcaecati. Autem ipsam eos perferendis labore porro voluptates
                  tempore eum nesciunt non illum minima laudantium facere qui
                  possimus, excepturi
                </p>
                <ol className="mx-auto py-5 md:gap-x-3 ">
                  <h3 className="font-bold">Category</h3>
                  <hr />
                  <li className="  gap-3  md:space-y-3">
                    {">"} <a href="/">Fish</a>
                  </li>
                  <li className=" gap-3  md:space-y-3">
                    {">"} <a href="/">Fish</a>
                  </li>
                  <li className=" gap-3 md:space-y-3">
                    {">"} <a href="/">Fish</a>
                  </li>
                </ol>
              </div>
              <p className="col-auto text-justify font-semibold ">
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, magni exercitationem aliquid et recusandae
                praesentium. Molestiae, velit cupiditate dolore similique soluta
                ea provident eius dolor voluptatem tenetur sapiente maiores,
                officiis fugiat nesciunt nostrum laboriosam? Sit itaque nam
                illum, repellendus impedit doloribus enim, ad repudiandae sunt,
                aliquam aperiam repellat veritatis obcaecati. Autem ipsam eos
                perferendis labore porro voluptates tempore eum nesciunt non
                illum minima laudantium facere qui possimus, excepturi
                <br />
                <div className="my-6">
                  <img
                    className="mx-auto w-3/4 rounded md:h-80"
                    src={fish1}
                    alt=""
                  />
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, magni exercitationem aliquid et recusandae
                praesentium. Molestiae, velit cupiditate dolore similique soluta
                ea provident eius dolor voluptatem tenetur sapiente maiores,
                officiis fugiat nesciunt nostrum laboriosam? Sit itaque nam
                illum, repellendus impedit doloribus enim, ad repudiandae sunt,
                aliquam aperiam repellat veritatis obcaecati. Autem ipsam eos
                perferendis labore porro voluptates tempore eum nesciunt non
                illum minima laudantium facere qui possimus, excepturi
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default BlogPage;
