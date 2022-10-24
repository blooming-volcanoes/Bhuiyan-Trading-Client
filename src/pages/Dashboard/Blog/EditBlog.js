import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpProductService from "../../../services/product.service";
import httpBlogService from "./../../../services/blog.service";

function EditBlog() {
  const [loading, setLoading] = useState(false);
  const [uploadedFeature, setUploadedFeature] = useState(null);
  const [isFeatureSubmitted, setIsFeatureSubmitted] = useState(false);
  const [prevDeletedImage, setPrevDeletedImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    metaDesc: "",
    alt: "",
    categoryId: "",
    title: "",
    postDesc: "",
    featureImg: "",
    imgCaption: "",
    focusKey: "",
    status: "now",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // Fetch previous Blog
  useEffect(() => {
    let isMuted = true;
    async function getSingleBlog() {
      setLoader(true);
      try {
        const data = await httpBlogService.getSingleBlogBySlug(params?.slug);
        isMuted &&
          setInputData((prev) => {
            return {
              ...prev,
              ...data,
            };
          });
        const rawToContent = JSON.parse(data?.postDesc);
        setEditorState(() =>
          EditorState.createWithContent(convertFromRaw(rawToContent))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getSingleBlog();
    return () => {
      isMuted = false;
    };
  }, [params]);

  // Set feature Image
  useEffect(() => {
    setInputData((prev) => {
      return {
        ...prev,
        featureImg: uploadedFeature || "",
      };
    });
  }, [uploadedFeature]);

  // Handel form Data change
  const handelFormDataChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //   Editor State
  function onEditorStateChange(editorState) {
    setEditorState(editorState);
    const content = convertToRaw(editorState.getCurrentContent());
    setInputData((prev) => {
      return {
        ...prev,
        postDesc: JSON.stringify(content),
      };
    });
  }

  // Filter out the previous Image
  const handelChangeFeatureImg = (prevImage) => {
    setPrevDeletedImage(prevImage);
    setInputData((prev) => {
      return {
        ...prev,
        featureImg: "",
      };
    });
  };

  async function handelSubmitForm(e) {
    e.preventDefault();
    const content = convertToRaw(editorState.getCurrentContent());
    if (inputData.featureImg === "") {
      toast.error("Please select or save the feature Image");
      return;
    }
    if (inputData.categoryId === "") {
      toast.error("Please select a category");
      return;
    }
    if (content.blocks[0].text === "") {
      toast.error("Please write a Blog!!");
      return;
    }
    setLoading(true);
    // Delete updated and created Because Of MySql Error
    delete inputData?.updated_at;
    delete inputData?.created_at;
    try {
      await httpBlogService.updateBlog(inputData.id, inputData);
      toast.success("Blog Updated Successfully", {
        duration: 4000,
      });

      // Clear All the fields
      setEditorState(() => EditorState.createEmpty());
      setIsFeatureSubmitted(true);
      setInputData({
        metaDesc: "",
        alt: "",
        categoryId: "",
        title: "",
        postDesc: "",
        featureImg: "",
        imgCaption: "",
        focusKey: "",
        status: "",
      });

      // Delete previous Feature image from Database
      await httpProductService.deleteGalleryImages(
        prevDeletedImage.split("/")[4]
      );
      navigate(-1);
    } catch (error) {
      toast.error("Internal Server Error", {
        duration: 4000,
      });
      setLoading(false);
      console.log(error);
    }
    setLoading(false);
  }

  const handelCancelUpdate = () => {
    navigate(-1);
  };

  return (
    <DashboardLayout>
      <section>
        <h1 className="my-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Edit Blog
        </h1>

        {/* Blog contents */}
        <div className="my-5 flex justify-center">
          {loader ? (
            <div className="flex h-screen items-center justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <form
              onSubmit={handelSubmitForm}
              className="mx-5 flex w-full flex-col space-y-5 rounded border bg-white p-4 shadow-xl md:w-2/3 lg:w-2/3"
            >
              <input
                className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                name="title"
                value={inputData.title}
                type="text"
                placeholder="Title"
                onChange={handelFormDataChange}
                required
              />
              <input
                className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                name="focusKey"
                type="text"
                value={inputData.focusKey}
                placeholder="Focus keys"
                onChange={handelFormDataChange}
                required
              />
              <input
                className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                name="alt"
                value={inputData.alt}
                type="text"
                placeholder="Alt"
                onChange={handelFormDataChange}
                required
              />
              <textarea
                className="h-28 rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                name="metaDesc"
                value={inputData.metaDesc}
                placeholder="Meta description"
                required
                onChange={handelFormDataChange}
              ></textarea>

              <input
                className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                name="imgCaption"
                value={inputData.imgCaption}
                type="text"
                placeholder="Image Caption"
                onChange={handelFormDataChange}
                required
              />
              <div className="relative rounded  p-2 shadow">
                {/* Feature Image */}
                {inputData.featureImg !== "" ? (
                  <>
                    <img
                      className="mx-auto h-[200px]  w-[600px] rounded border object-cover  p-2 "
                      src={inputData && inputData["featureImg"]}
                      alt=""
                    />
                    <button
                      onClick={() =>
                        handelChangeFeatureImg(inputData["featureImg"])
                      }
                      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                      className="absolute -top-[4px] right-[30px] rounded-full bg-gray-100 text-2xl font-semibold text-red-500 transition-all hover:scale-110"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-10 w-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <UploadFile
                    isMultiple={false}
                    setUploadedFeature={setUploadedFeature}
                    uploadedFeature={uploadedFeature}
                    isFeatureSubmitted={isFeatureSubmitted}
                  />
                )}
              </div>

              {/* Editor */}
              <div>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    fontFamily: {
                      options: [
                        "Arial",
                        "Georgia",
                        "Impact",
                        "Tahoma",
                        "Times New Roman",
                        "Poppins",
                      ],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                  }}
                  hashtag={{
                    separator: " ",
                    trigger: "#",
                  }}
                  wrapperClassName="border-2 p-1 rounded shadow"
                  toolbarClassName="!py-3 !border-none !bg-[#f9f9f9]"
                  editorClassName="!h-full px-3 !min-h-[200px] scrollbar-hide"
                  placeholder="Start writing..."
                />
              </div>

              {loading ? (
                <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                  <LoadingButton
                    styles="flex justify-center"
                    svg="w-10 h-10 text-indigo-500"
                  />
                </div>
              ) : (
                <>
                  <button
                    className="dashboard-btn flex-1 border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={loading}
                  >
                    Update
                  </button>
                  <button
                    onClick={handelCancelUpdate}
                    className="dashboard-btn flex-1 border-red-500 bg-red-400 hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed"
                    type="button"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default EditBlog;
