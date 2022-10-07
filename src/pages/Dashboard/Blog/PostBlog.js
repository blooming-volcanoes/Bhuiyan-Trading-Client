import { convertToRaw, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpCateGoryService from "../../../services/category.service";

function PostBlog() {
  const [cateGories, setCateGories] = useState([]);
  const [cateGoryLoading, setCateGoryLoading] = useState(false);
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
    console.log(+e.target.value);
  };

  //   Editor State
  function onEditorStateChange(editorState) {
    setEditorState(editorState);
    const content = convertToRaw(editorState.getCurrentContent());
    if (content.blocks[0].text === "") {
      setEditorState(() => EditorState.createEmpty());
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
          <form className="mx-5 flex w-full flex-col space-y-5 rounded border bg-white p-4 shadow-xl md:w-2/3 lg:w-2/3">
            <input
              className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              type="text"
              placeholder="Title"
            />
            <textarea
              className="h-28 rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
              placeholder="Meta description"
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
                <option>Select a Category</option>
                {cateGories.map((category) => (
                  <option key={category?.id} value={category?.id}>
                    {category?.categoryName}
                  </option>
                ))}
              </select>
            )}
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
                mention={{
                  separator: " ",
                  trigger: "@",
                  suggestions: [
                    {
                      text: "PROGRAMMER",
                      value: "Programmer",
                      url: "/programmer",
                    },
                    {
                      text: "JAVASCRIPT",
                      value: "javascript",
                      url: "/javascript",
                    },
                    {
                      text: "REACT",
                      value: "React",
                      url: "/react",
                    },
                  ],
                }}
                hashtag={{
                  separator: " ",
                  trigger: "#",
                }}
                wrapperClassName="border-2 p-1 rounded shadow"
                toolbarClassName="!py-3 !border-none !bg-[#f9f9f9]"
                editorClassName="!h-full !min-h-[200px] scrollbar-hide"
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
