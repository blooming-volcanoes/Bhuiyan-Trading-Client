import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../layouts/DashboardLayout";

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Type your full name",
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
  const { user } = useSelector((state) => state.auth.user);
  console.log(user);

  const [userData, setUserData] = useState({
    name: user?.name,
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

  async function handelUpdateUserInfo() {}

  console.log(userData);

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
            {inputs.map((input) => (
              <label htmlFor={input.name} className="flex flex-col space-y-2">
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
                  required
                  id={input.name}
                  name={input.name}
                  className="rounded-lg border-gray-300 text-sm"
                />
              </label>
            ))}
            <button
              className="dashboard-btn w-full flex-1 border-green-500 bg-green-400 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default UserProfile;
