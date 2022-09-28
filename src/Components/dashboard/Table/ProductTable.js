import React from "react";

function ProductTable({ theadData, tableData }) {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {theadData.map((data) => (
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
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
                {tableData.map((data) => (
                  <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[40px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {data?.title}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap font-semibold  text-green-500">
                        {data?.price}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap font-semibold  text-green-500">
                        {data?.currency}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap font-semibold  text-gray-500">
                        {data?.unit}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[50px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {data?.shortDesc}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[50px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {data?.productDesc}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
                      <p className="whitespace-no-wrap h-[50px] overflow-y-auto  font-semibold text-indigo-500  scrollbar-hide">
                        {data?.categoryName}
                      </p>
                    </td>
                    <td className="flex h-[90px] flex-col overflow-y-auto border-b border-gray-200 bg-white py-1 px-5 text-sm scrollbar-hide">
                      {data?.subCategoryName?.map((sub) => (
                        <p className="whitespace-no-wrap text-xs font-semibold text-green-600">
                          <span>{sub}</span>
                        </p>
                      ))}
                    </td>

                    <td className="space-x-4 border-b border-gray-200 bg-white px-5 py-1 text-sm">
                      <div className="flex  space-x-2">
                        <span
                          to={`/admin/dashboard/categories/edit/${data?.id}`}
                          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                        >
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                          ></span>
                          <span className="relative cursor-pointer">Edit</span>
                        </span>
                        <button className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
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

export default ProductTable;
