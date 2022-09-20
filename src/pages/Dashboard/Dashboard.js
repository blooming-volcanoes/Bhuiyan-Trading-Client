import React, { useState } from "react";

import Datepicker from "../../Components/dashboard/partials/actions/Datepicker";
import FilterButton from "../../Components/dashboard/partials/actions/FilterButton";
import DashboardAvatars from "../../Components/dashboard/partials/dashboard/DashboardAvatars";
import DashboardCard01 from "../../Components/dashboard/partials/dashboard/DashboardCard01";
import DashboardCard02 from "../../Components/dashboard/partials/dashboard/DashboardCard02";
import DashboardCard03 from "../../Components/dashboard/partials/dashboard/DashboardCard03";
import DashboardCard04 from "../../Components/dashboard/partials/dashboard/DashboardCard04";
import DashboardCard05 from "../../Components/dashboard/partials/dashboard/DashboardCard05";
import DashboardCard06 from "../../Components/dashboard/partials/dashboard/DashboardCard06";
import DashboardCard07 from "../../Components/dashboard/partials/dashboard/DashboardCard07";
import DashboardCard08 from "../../Components/dashboard/partials/dashboard/DashboardCard08";
import DashboardCard09 from "../../Components/dashboard/partials/dashboard/DashboardCard09";
import DashboardCard10 from "../../Components/dashboard/partials/dashboard/DashboardCard10";
import DashboardCard11 from "../../Components/dashboard/partials/dashboard/DashboardCard11";
import DashboardCard12 from "../../Components/dashboard/partials/dashboard/DashboardCard12";
import DashboardCard13 from "../../Components/dashboard/partials/dashboard/DashboardCard13";
import WelcomeBanner from "../../Components/dashboard/partials/dashboard/WelcomeBanner";
import Header from "../../Components/dashboard/partials/Header";
import Sidebar from "../../Components/dashboard/partials/Sidebar";
import DashboardLayout from "../../layouts/DashboardLayout";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
              {/* Welcome banner */}
              <WelcomeBanner />
              {/* Dashboard actions */}
              <div className="mb-8 sm:flex sm:items-center sm:justify-between">
                {/* Left: Avatars */}
                <DashboardAvatars />

                {/* Right: Actions */}
                <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
                  {/* Filter button */}
                  <FilterButton />
                  {/* Datepicker built with flatpickr */}
                  <Datepicker />
                  {/* Add view button */}
                  <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                    <svg
                      className="h-4 w-4 shrink-0 fill-current opacity-50"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="ml-2 hidden xs:block">Add view</span>
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
                {/* Line chart (Acme Plus) */}
                <DashboardCard01 />
                {/* Line chart (Acme Advanced) */}
                <DashboardCard02 />
                {/* Line chart (Acme Professional) */}
                <DashboardCard03 />
                {/* Bar chart (Direct vs Indirect) */}
                <DashboardCard04 />
                {/* Line chart (Real Time Value) */}
                <DashboardCard05 />
                {/* Doughnut chart (Top Countries) */}
                <DashboardCard06 />
                {/* Table (Top Channels) */}
                <DashboardCard07 />
                {/* Line chart (Sales Over Time) */}
                <DashboardCard08 />
                {/* Stacked bar chart (Sales VS Refunds) */}
                <DashboardCard09 />
                {/* Card (Customers) */}
                <DashboardCard10 />
                {/* Card (Reasons for Refunds) */}
                <DashboardCard11 />
                {/* Card (Recent Activity) */}
                <DashboardCard12 />
                {/* Card (Income/Expenses) */}
                <DashboardCard13 />
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
