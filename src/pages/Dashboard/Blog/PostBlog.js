import { convertToRaw, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import toast from "react-hot-toast";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import UploadFile from "../../../Components/custom/Uploaders/UploadFile";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "../../../services/category.service";

function PostBlog() {
  const [cateGories, setCateGories] = useState([]);
  const [cateGoryLoading, setCateGoryLoading] = useState(false);
  const [uploadedFeature, setUploadedFeature] = useState(null);

  const [inputData, setInputData] = useState({
    metaDesc: "",
    categoryId: "",
    title: "",
    postDesc: "",
    featureImg: "",
    imgCaption: "",
    focusKey: "",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // Fetch all Categories
  useEffect(() => {
    async function getAllCategories() {
      setCateGoryLoading(true);
      try {
        const data = await httpCateGoryService.getAllCategory();
        setCateGories(data);
      } catch (error) {
        setCateGoryLoading(false);
        console.log(error);
      }

      setCateGoryLoading(false);
    }
    getAllCategories();
  }, []);

  //   Set categoryId
  const handelCategories = (e) => {
    if (isNaN(+e.target.value) !== true) {
      setInputData((prev) => {
        return {
          ...prev,
          categoryId: +e.target.value,
        };
      });
      return;
    }
    setInputData((prev) => {
      return {
        ...prev,
        categoryId: "",
      };
    });
  };

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
    if (content.blocks[0].text === "") {
      setEditorState(() => EditorState.createEmpty());
    }
    setInputData((prev) => {
      return {
        ...prev,
        postDesc: JSON.stringify(content),
      };
    });
  }

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
    try {
      console.log(inputData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DashboardLayout>
      <section>
        <h1 className="my-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Post a blog
        </h1>

        {/* Blog contents */}
        <div className="my-5 flex justify-center">
          <form
            onSubmit={handelSubmitForm}
            className="mx-5 flex w-full flex-col space-y-5 rounded border bg-white p-4 shadow-xl md:w-2/3 lg:w-2/3"
          >
            <input
              className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              name="title"
              type="text"
              placeholder="Title"
              onChange={handelFormDataChange}
              required
            />
            <input
              className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              name="focusKey"
              type="text"
              placeholder="Focus keys"
              onChange={handelFormDataChange}
              required
            />
            <textarea
              className="h-28 rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              name="metaDesc"
              placeholder="Meta description"
              required
              onChange={handelFormDataChange}
            ></textarea>
            {/* CateGory dropdown */}
            {cateGoryLoading ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton
                  styles="flex justify-center"
                  svg="w-10 h-10 text-indigo-500"
                />
              </div>
            ) : (
              <select
                onChange={handelCategories}
                className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              >
                <option value={null}>Select a Category</option>
                {cateGories.map((category) => (
                  <option key={category?.id} value={category?.id}>
                    {category?.categoryName}
                  </option>
                ))}
              </select>
            )}
            <input
              className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              name="imgCaption"
              type="text"
              placeholder="Image Caption"
              onChange={handelFormDataChange}
              required
            />
            {/* Feature Image */}
            <UploadFile
              isMultiple={false}
              setUploadedFeature={setUploadedFeature}
              uploadedFeature={uploadedFeature}
            />
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

            <button className="dashboard-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default PostBlog;
