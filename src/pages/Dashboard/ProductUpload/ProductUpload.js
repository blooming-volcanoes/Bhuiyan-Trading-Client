import React from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../layouts/DashboardLayout";

const inputFields = [
  {
    name: "title",
    placeholder: "Give a Title *",
    type: "text",
  },
  {
    name: "price",
    placeholder: "Give a Price example * : 150",
    type: "text",
  },
  {
    name: "currency",
    placeholder: "Give a Currency example * : BDT",
    type: "text",
  },
  {
    name: "unit",
    placeholder: "Available Products example * : 5",
    type: "text",
  },
  {
    name: "shortDesc",
    placeholder: "Give a Short Description *",
    type: "text",
  },
  {
    name: "productDesc",
    placeholder: "Give a Product Description *",
    type: "text",
  },
];

function ProductUpload() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <DashboardLayout>
      <section>
        <div className="my-5 flex justify-center">
          <form
            className="mx-5 flex w-full flex-col space-y-5 rounded border bg-white p-4 shadow-xl md:w-2/3 lg:w-2/3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-xl font-semibold capitalize text-gray-500 drop-shadow">
              Fill the Necessary Details
            </h1>
            {/* input fields */}
            {inputFields
              .filter(
                (input) =>
                  input.name !== "productDesc" && input.name !== "shortDesc"
              )
              .map((input, i) => (
                <input
                  key={i}
                  {...register(input.name)}
                  className="rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                  type={input.type}
                  required={true}
                  placeholder={input.placeholder}
                />
              ))}

            {/* text areas */}
            {inputFields
              .filter(
                (input) =>
                  input.name === "productDesc" || input.name === "shortDesc"
              )
              .map((input, i) => (
                <textarea
                  key={i}
                  className="h-28 rounded border-2 border-gray-400 text-sm focus:outline-none focus:ring-0"
                  required={true}
                  {...register(input.name)}
                  name={input.name}
                  placeholder={input.placeholder}
                ></textarea>
              ))}

            <button className="dashboard-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ProductUpload;
