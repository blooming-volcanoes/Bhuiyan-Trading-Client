import React from "react";

import Image01 from "../../../../assets/Images/user-36-05.jpg";
import Image02 from "../../../../assets/Images/user-36-06.jpg";
import Image03 from "../../../../assets/Images/user-36-07.jpg";
import Image04 from "../../../../assets/Images/user-36-08.jpg";
import Image05 from "../../../../assets/Images/user-36-09.jpg";

function DashboardCard10() {
  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      location: "🇺🇸",
      spent: "$2,890.66",
    },
    {
      id: "1",
      image: Image02,
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      location: "🇩🇪",
      spent: "$2,767.04",
    },
    {
      id: "2",
      image: Image03,
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      location: "🇫🇷",
      spent: "$2,996.00",
    },
    {
      id: "3",
      image: Image04,
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      location: "🇮🇹",
      spent: "$1,220.66",
    },
    {
      id: "4",
      image: Image05,
      name: "Burak Long",
      email: "longburak@gmail.com",
      location: "🇬🇧",
      spent: "$1,890.66",
    },
  ];

  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg xl:col-span-6">
      <header className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-800">Customers</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-400">
              <tr>
                <th className="whitespace-nowrap p-2">
                  <div className="text-left font-semibold">Name</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-left font-semibold">Email</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-left font-semibold">Spent</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Country</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-100 text-sm">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="whitespace-nowrap p-2">
                      <div className="flex items-center">
                        <div className="mr-2 h-10 w-10 shrink-0 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={customer.image}
                            width="40"
                            height="40"
                            alt={customer.name}
                          />
                        </div>
                        <div className="font-medium text-slate-800">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-left">{customer.email}</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-left font-medium text-green-500">
                        {customer.spent}
                      </div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center text-lg">
                        {customer.location}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
