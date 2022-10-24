import draftToHtml from "draftjs-to-html";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { BsArrowLeft } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Moment from "react-moment";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingButton from "../../Components/custom/Buttons/LoadingButton";
import PageLayout from "../../layouts/PageLayout";
import SocialMedia from "./../../Components/common/SocialMedia/SocialMedia";
import httpBlogService from "./../../services/blog.service";

function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    async function getBlog() {
      setLoader(true);
      try {
        const data = await httpBlogService.getSingleBlogBySlug(slug);
        isMounted && setBlog(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getBlog();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <PageLayout>
      {loader ? (
        <div className="flex h-screen justify-center space-y-4">
          <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
        </div>
      ) : (
        <section>
          {/* latest News Banner */}

          <div className="">
            <div className="mx-5 flex h-full min-h-[300px] max-w-4xl items-center md:mx-auto">
              <div className="mt-20">
                <h1 className="text-4xl font-medium">{blog?.title}</h1>
                <p className="mt-2 flex space-x-2 text-xs font-semibold">
                  <span>
                    <Moment parse="YYYY-MM-DD HH:mm">{blog?.created_at}</Moment>
                  </span>
                  <span className="text-green-500">
                    <Moment date={blog?.updated_at} fromNow />
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Recent Blog */}
          <div className="gird-cols-1 grid gap-1 md:grid-cols-6 lg:grid-cols-6">
            {/* blog Image */}
            <div className="mx-5 md:mx-0 lg:col-span-5">
              <LazyLoadImage
                height="100%"
                width="100%"
                className="mx-auto h-64 w-full rounded object-cover md:h-96 "
                effect="blur"
                src={blog?.featureImg}
              />

              {/* <img
                className="mx-auto h-64 w-full rounded object-cover md:h-96 "
                src={blog?.featureImg}
                alt=""
              /> */}
            </div>
            <div className="flex w-full items-center justify-center">
              <SocialMedia
                data={{
                  url: `${process.env.REACT_APP_MAIN_DOMAIN}${location?.pathname}`,
                  title: blog?.title,
                }}
                share
                styles="flex lg:flex-col lg:space-y-4 space-x-2 lg:space-x-0"
              />
            </div>
            {/* blog contents */}
          </div>

          <div className="mx-4 py-10 md:max-w-5xl lg:mx-auto lg:max-w-5xl">
            <article className="prose prose-h1:!text-lg prose-h1:!font-semibold prose-h2:!text-base prose-h2:!font-semibold prose-a:!text-blue-600 prose-ul:leading-[20px] md:prose-lg lg:prose-xl">
              {ReactHtmlParser(
                draftToHtml(blog?.postDesc && JSON.parse(blog?.postDesc))
              )}
            </article>

            <div className="mt-12 flex justify-center">
              <button
                onClick={() => navigate(-1)}
                className="dashboard-btn flex items-center border-gray-500 bg-gray-500 hover:text-gray-500"
              >
                <span className="mr-2 text-2xl">
                  <BsArrowLeft />
                </span>
                Back
              </button>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}

export default BlogPage;
