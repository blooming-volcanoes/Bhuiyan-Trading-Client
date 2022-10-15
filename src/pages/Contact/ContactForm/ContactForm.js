import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { MdCall, MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import httpContactService from "./../../../services/contact.service";

export default function ContactForm() {
  const [loader, setLoader] = useState(false);
  const [queryParams] = useSearchParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (userData) => {
    setLoader(true);
    const modifiedData = {
      ...userData,
      productId: queryParams.get("id") || "",
    };
    try {
      await httpContactService.createContactInfo(modifiedData);
      Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "We will connect with you soon",
        showConfirmButton: false,
        timer: 2500,
      });
      navigate("/");
    } catch (error) {
      toast.error("Internal Server Error");
      setLoader(false);
      console.log(error);
    }
    setLoader(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#073042] ">
      <Toaster />
      <div className="main-container py-10">
        {/* titles */}
        <div>
          <ul className="space-y-4 text-white">
            <li className="flex w-2/4 space-x-2">
              <span>
                <MdLocationOn className="inline text-xl" />
              </span>
              <span>
                Mohiddin Market (2nd floor), Abdul Barek Road, North Pahartali,
                Chittagong, Bangladesh.
              </span>
            </li>
            <li className="flex w-2/4 space-x-2">
              <span>
                <MdMarkEmailRead className="inline text-xl" />
              </span>
              <a href="mailto:info@bhuiyantrad.com">info@bhuiyantrad.com</a>
            </li>
            <li className="flex w-2/4 space-x-2">
              <span>
                <MdCall className="inline text-xl" />
              </span>
              <a href="tel:01818929292">+88-01818929292</a>
            </li>
          </ul>
        </div>

        {/* inputs */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
          {/* left side form */}
          <div className="m-0 flex flex-col space-y-6 lg:mr-20">
            <input
              className="rounded-lg"
              required
              {...register("userName")}
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              required
              className="rounded-lg"
              type="email"
              placeholder="Email"
            />
            <input
              className="rounded-lg"
              {...register("productName")}
              defaultValue={queryParams.get("name") && queryParams.get("name")}
              type="text"
              placeholder="Product Name"
              required
            />
            <input
              className="rounded-lg"
              required
              {...register("emailTitle")}
              type="text"
              placeholder="Email Title"
            />
            <textarea
              required
              {...register("comments")}
              className="h-[150px] rounded-lg"
              id=""
              placeholder="Your comments"
            ></textarea>
          </div>

          {/* Right Side */}
          <div className="mt-10 flex flex-col space-y-6 lg:mt-0">
            <input
              required
              {...register("country")}
              className="rounded-lg"
              type="text"
              placeholder="Country"
            />
            <input
              required
              {...register("city")}
              className="rounded-lg"
              type="text"
              placeholder="City"
            />
            <input
              required
              {...register("zipCode")}
              className="rounded-lg"
              type="text"
              placeholder="Zip Code"
            />
            {loader ? (
              <LoadingButton
                text="Loading"
                styles="bg-white-400 ml-auto text-white w-36 rounded-lg py-2 px-4 font-extrabold text-[#073042] py-2 px-4"
              />
            ) : (
              <button
                type="submit"
                className="ml-auto w-36 rounded-lg bg-white py-2 px-4 font-extrabold text-[#073042]"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
