import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/Images/logo.png";
import AuthLayout from "../../layouts/AuthLayout";
import { addUser, authLoading } from "../../redux/auth/authAction";
import httpAuthService from "../../services/auth.service";
import LoadingButton from "./../../Components/custom/Buttons/LoadingButton";

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
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.authLoading);

  const onSubmit = async (inputData) => {
    dispatch(authLoading(true));
    try {
      const data = await httpAuthService.register(inputData);
      Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "Successfully signup",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addUser(data));
    } catch (error) {
      const { msg } = error.response.data;
      toast.error(msg);
      dispatch(authLoading(false));
    }
    dispatch(authLoading(false));
    reset();
  };

  return (
    <AuthLayout>
      <Toaster />
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

            {loading ? (
              <LoadingButton
                text="Loading"
                styles="w-full bg-red-400 text-white py-2 flex justify-center"
              />
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded  bg-red-400 py-2 font-semibold text-white"
              >
                Create Account
              </button>
            )}
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
    </AuthLayout>
  );
}

export default Register;
