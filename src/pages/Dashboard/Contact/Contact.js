import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import Pagination from "../../../Components/custom/Pagination/Pagination";
import ContactUsTable from "../../../Components/dashboard/Table/ContactUsTable";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpContactService from "./../../../services/contact.service";

function Contact() {
  const [allTableData, setAllTableData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tableHeadData, setTableHeadData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDataLimitDone, setIsDataLimitDone] = useState(false);
  const [isContactInfoDeleted, setIsContactInfoDeleted] = useState(false);

  // fetch all the user data
  useEffect(() => {
    setLoader(true);
    async function loadTableData() {
      try {
        const data = await httpContactService.getAllContactDataByPagination(
          searchParams.get("page")
        );
        if (!data.length || data.length < 10) {
          setIsDataLimitDone(true);
        } else {
          setIsDataLimitDone(false);
        }
        setAllTableData(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    loadTableData();
  }, [searchParams, isContactInfoDeleted]);

  console.log(isContactInfoDeleted);

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

  function handelDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsContactInfoDeleted(true);
        httpContactService
          .deleteContactInfo(id)
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .finally(() => {
            setIsContactInfoDeleted(false);
          });
      }
    });
  }

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
          <ContactUsTable
            handelDelete={handelDelete}
            theadData={tableHeadData}
            tableData={allTableData}
          />
        )}
        <Pagination
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          isDataLimitDone={isDataLimitDone}
        />
      </section>
    </DashboardLayout>
  );
}

export default Contact;
