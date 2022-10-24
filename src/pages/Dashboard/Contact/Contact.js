import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import Pagination from "../../../Components/custom/Pagination/Pagination";
import ContactUsTable from "../../../Components/dashboard/Table/ContactUsTable";
import useDebounce from "../../../hooks/useDebounce";
import DashboardLayout from "../../../layouts/DashboardLayout";
import httpContactService from "./../../../services/contact.service";

function Contact() {
  const [allTableData, setAllTableData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [tableHeadData, setTableHeadData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDataLimitDone, setIsDataLimitDone] = useState(false);
  const [isContactInfoDeleted, setIsContactInfoDeleted] = useState(false);
  const [search, setSearch] = useState(null);
  const debounceData = useDebounce(search, 800);
  const [searchLoader, setSearchLoader] = useState(false);
  const [previousContactInfo, setPreviousContactInfo] = useState([]);

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
        setPreviousContactInfo(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
      setLoader(false);
    }
    loadTableData();
  }, [searchParams, isContactInfoDeleted]);

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
          .catch((error) => {
            setIsContactInfoDeleted(false);
            toast.error("Internal Server Error");
            console.log(error);
          })
          .finally(() => {
            setIsContactInfoDeleted(false);
          });
      }
    });
  }

  // handle product search
  useEffect(() => {
    async function getSearchResult() {
      setSearchLoader(true);
      try {
        const data = await httpContactService.searchContactInfoByTitle({
          title: `%${debounceData}%`,
        });

        setAllTableData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchLoader(false);
      }
    }

    if (debounceData) {
      getSearchResult();
    } else {
      setAllTableData(previousContactInfo);
    }
  }, [debounceData]);

  return (
    <DashboardLayout>
      <section>
        <h1 className="mt-4 text-center text-2xl font-semibold text-indigo-500 drop-shadow">
          Contact us data table
        </h1>

        <div className="mx-8 mt-4 flex w-full justify-center lg:w-2/4 lg:justify-start">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className=" flx-1 lg:full w-[400px] rounded border-2 border-gray-400 text-sm shadow focus:ring-0"
            placeholder="Search here example. Jhon"
          />
        </div>

        {/* Table */}
        {loader ? (
          <div className="flex h-screen items-center justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : allTableData.length ? (
          searchLoader ? (
            <div className="flex h-screen items-center justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            <ContactUsTable
              handelDelete={handelDelete}
              theadData={tableHeadData}
              tableData={allTableData}
            />
          )
        ) : (
          <div className="mt-10 flex h-full  justify-center space-y-4 font-bold text-gray-500">
            <h1 className="text-2xl">{allTableData.msg}</h1>
          </div>
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
