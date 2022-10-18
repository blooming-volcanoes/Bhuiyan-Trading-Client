import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Pagination({ isDataLimitDone, searchParams, setSearchParams }) {
  return (
    <div className="flex items-center justify-center pb-10">
      {isDataLimitDone ? (
        +searchParams.get("page") !== 1 && (
          <button
            onClick={() => {
              setSearchParams({
                page: searchParams.get("page")
                  ? +searchParams.get("page") - 1
                  : 1,
              });
            }}
            className="dashboard-btn flex items-center border-gray-500 bg-gray-500 hover:text-gray-500"
          >
            <span className="mr-2 text-2xl">
              <BsArrowLeft />
            </span>
            Back
          </button>
        )
      ) : (
        <div className="flex space-x-4">
          {+searchParams.get("page") !== 1 && (
            <button
              onClick={() => {
                setSearchParams({
                  page: searchParams.get("page")
                    ? +searchParams.get("page") - 1
                    : 1,
                });
              }}
              className="dashboard-btn flex items-center border-gray-500 bg-gray-500 hover:text-gray-500"
            >
              <span className="mr-2 text-2xl">
                <BsArrowLeft />
              </span>
              Back
            </button>
          )}
          <button
            onClick={() => {
              setSearchParams({
                page: searchParams.get("page")
                  ? +searchParams.get("page") + 1
                  : 1,
              });
            }}
            className="dashboard-btn flex items-center"
          >
            Load More
            <span className="ml-2 text-2xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
