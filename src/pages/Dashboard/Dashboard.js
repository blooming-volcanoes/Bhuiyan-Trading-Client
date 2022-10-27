import React from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import WelcomeBanner from "./../../Components/dashboard/partials/dashboard/WelcomeBanner";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome banner */}
        <WelcomeBanner />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
