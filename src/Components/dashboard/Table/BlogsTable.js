import React from "react";
import { Link } from "react-router-dom";

function BlogsTable({ handelDeleteBlog, theadData, tableData }) {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div>
        <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {theadData.map((data, i) => (
                    <th
                      key={i}
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700"
                    >
                      {data}
                    </th>
                  ))}
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Actions
                  </th>

                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, i) => (
                  <tr key={i}>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[40px] overflow-y-auto  font-semibold text-gray-500  scrollbar-hide">
                        {data.id}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[40px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {data?.title}
                      </p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap font-semibold  text-green-500">
                        {data?.imgCaption}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap font-semibold  text-green-500">
                        {data?.focusKey}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap font-semibold  text-gray-500">
                        {data?.metaDesc}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[50px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {data?.alt}
                      </p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[50px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {new Date(data?.created_at).toLocaleString()}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[50px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {new Date(data?.updated_at).toLocaleString()}
                      </p>
                    </td>

                    <td className="space-x-4 border-b border-gray-200 bg-white px-5 py-1 text-sm">
                      <div className="flex  space-x-2">
                        <Link
                          to={`/admin/dashboard/blog/edit/${data?.slug}`}
                          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                        >
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                          ></span>
                          <span className="relative cursor-pointer">Edit</span>
                        </Link>
                        <button
                          onClick={() => handelDeleteBlog(data?.slug)}
                          className="relative inline-block px-3 py-1 font-semibold leading-tight text-white"
                        >
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full bg-red-500 opacity-75"
                          ></span>
                          <span className="relative cursor-pointer">
                            Delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsTable;
