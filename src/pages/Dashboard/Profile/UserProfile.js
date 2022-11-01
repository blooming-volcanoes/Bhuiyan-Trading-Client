import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { addUser } from "../../../redux/auth/authAction";
import httpUserService from "./../../../services/user.service";

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "prevPassword",
    type: "password",
    placeholder: "Previous Password",
  },
  {
    name: "currentPassword",
    type: "password",
    placeholder: "Current Password",
  },
];

function UserProfile() {
  const { user } = useSelector((state) => state.auth);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.user?.name,
    prevPassword: "",
    currentPassword: "",
  });

  function handelInputChanges(e) {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handelUpdateUserInfo(e) {
    e.preventDefault();
    if (userData.currentPassword.length && !userData.prevPassword.length) {
      toast.error("Must need to put your previous password");
      return;
    }
    if (!userData.name.length) {
      toast.error("Name filed is empty");
      return;
    }
    let modifiedData;
    if (!userData.currentPassword.length) {
      modifiedData = { name: userData.name };
    } else {
      modifiedData = userData;
    }
    setLoader(true);
    try {
      const data = await httpUserService.updateUserInfo(modifiedData, {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      });

      const newUserObject = {
        ...user,
        user: { ...user.user, name: userData.name },
      };
      dispatch(addUser(newUserObject));
      setUserData((prev) => {
        return {
          ...prev,
          name: newUserObject.user.name,
          prevPassword: "",
          currentPassword: "",
        };
      });
      toast.success(data.msg);
    } catch (error) {
      toast.error(error?.response?.data);
      console.log(error?.response);
    } finally {
      setLoader(false);
    }
  }

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Edit your Profile
        </h1>

        {/* form */}
        <div className="my-10 flex justify-center">
          <form
            onSubmit={handelUpdateUserInfo}
            className="relative mx-5 w-full space-y-4 rounded border-2 bg-white p-4 shadow-lg md:w-[600px] lg:w-[600px]"
          >
            {inputs.map((input, i) => (
              <label
                key={i}
                htmlFor={input.name}
                className="flex flex-col space-y-2"
              >
                <span
                  id={input.name}
                  className="text-xs font-semibold text-gray-400"
                >
                  {input.placeholder}
                </span>
                <input
                  onChange={handelInputChanges}
                  autoComplete="off"
                  value={userData[input.name]}
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  className="rounded-lg border-gray-300 text-sm"
                />
              </label>
            ))}
            {loader ? (
              <div className="flex justify-center space-y-4 rounded border border-gray-300 p-2 shadow">
                <LoadingButton
                  styles="flex justify-center"
                  svg="w-10 h-10 text-indigo-500"
                />
              </div>
            ) : (
              <button
                disabled={loader}
                className="dashboard-btn w-full flex-1 border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
                type="submit"
              >
                update
              </button>
            )}
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default UserProfile;
