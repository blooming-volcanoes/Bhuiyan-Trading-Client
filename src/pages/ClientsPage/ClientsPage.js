import React from "react";
import fish1 from "../../assets/Images/fish1.jpg";
import PageLayout from "./../../layouts/PageLayout";

// import bgTop from "../../assets/Images/bg-right.png";
function ClientsPage() {
  return (
    <PageLayout>
      {/* Banner */}

      <div className="bg-top-bottom w-full bg-[#BCCEFF] bg-no-repeat py-10">
        <div className="main-container grid lg:grid-cols-2">
          {/* Left side */}
          <h1 className="my-20 flex w-2/4 flex-col text-lg font-semibold leading-[1]">
            Lorem ipsum <br />
            <span className=" text-5xl">Lorem ipsum</span> <br />
            <span className="ml-auto text-sm">Lorem ipsum</span>
          </h1>

          {/* Right Side */}
          <div>
            <img className="" src={fish1} alt="" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ClientsPage;
