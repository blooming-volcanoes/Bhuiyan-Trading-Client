import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import PageLayout from "./../../layouts/PageLayout";

const inputFields = [
  {
    type: "text",
    placeholder: "Name",
    name: "name",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
  },
  {
    type: "text",
    placeholder: "Mobile No.",
    name: "contactNumber",
  },
];

function Register() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <PageLayout>
      <div className="flex min-h-screen flex-col rounded bg-gray-100 py-36">
        <div className="container mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full rounded bg-white px-6 py-8 text-black shadow-md"
          >
            <div className="flex items-center justify-center py-6">
              <img className="h-[80px]" src={logo} alt="" />
            </div>
            {inputFields.map((input) => (
              <input
                key={input.placeholder}
                {...register(input.name)}
                type={input.type}
                className="mb-4 block w-full rounded border-2 border-gray-300 p-3 focus:border focus:shadow-lg focus:ring-0"
                placeholder={input.placeholder}
                required={true}
              />
            ))}

            <button
              type="submit"
              className="w-full rounded bg-red-400 py-2 font-semibold text-white"
            >
              Create Account
            </button>
          </form>

          <div className="text-gray-dark mt-6 flex space-x-2">
            <p>Already have an account?</p>
            <Link className="font-semibold text-blue-400" to="/login">
              Login
            </Link>
            .
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Register;
