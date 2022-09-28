import React, { useEffect, useState } from "react";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import ContactUsTable from "../../../Components/dashboard/Table/ContactUsTable";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpContactService from "./../../../services/contact.service";

function Contact() {
  const [allTableData, setAllTableData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tableHeadData, setTableHeadData] = useState([]);

  // fetch all the user data
  useEffect(() => {
    setLoader(true);
    async function loadTableData() {
      try {
        const data = await httpContactService.getAllContactData();
        setAllTableData(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    loadTableData();
  }, []);

  useEffect(() => {
    if (allTableData.length) {
      let keys = [];
      for (let key in allTableData[0]) {
        if (key !== "id") {
          keys.push(key);
        }
      }
      setTableHeadData(keys);
    }
  }, [allTableData]);

  console.log(tableHeadData);

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Contact us data table
        </h1>

        {/* Table */}
        {loader ? (
          <div className="flex h-screen items-center justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : (
          <ContactUsTable theadData={tableHeadData} tableData={allTableData} />
        )}
      </section>
    </DashboardLayout>
  );
}

export default Contact;
