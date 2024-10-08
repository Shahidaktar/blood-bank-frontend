import moment from "moment";
import React, { useEffect, useState } from "react";
import API from "./../../services/API";

const Analytic = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <div className="mt-3 mx-2 grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4">
        {data?.map((record, i) => (
          <div
            key={i}
            className=" group relative shadow-lg p-4 border border-gray-200 space-y-3 rounded-md bg-white"
          >
            <div className="mx-44  lg:mx-14  sm:mx-24 md:mx-16  xl:mx-20">
              <h1 className=" p-3 w-full overflow-hidden rounded-md text-red-600 text-5xl lg:aspect-none group-hover:opacity-75 font-medium">
                {record.bloodGroup}
              </h1>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <h3 className="text-sm text-black">
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Total in : {record.totalIn} (ML)
                  </a>
                </h3>
                <p className="mt-1 text-sm text-black">
                  Total Out : {record.totalOut} (ML)
                </p>
              </div>

              <p className="text-sm font-medium text-gray-400 p-4 bg-slate-200 rounded-md">
                Total Available : {record.availableBlood} (ML)
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:w-2/3 w-full mt-4 overflow-auto space-y-3">
        <h1 className=" p-3 w-full overflow-hidden rounded-md text-gray-700 text-5xl lg:aspect-none group-hover:opacity-75 ">
          Recent Blood Records
        </h1>
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  rounded-tl rounded-bl">
                Blood Group
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                Inventory Type
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                Quantity
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                Donar Email
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                Date & Time
              </th>
            </tr>
          </thead>

          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td className="px-4 py-3">{record.bloodGroup}</td>
                <td className="px-4 py-3">{record.inventoryType}</td>
                <td className="px-4 py-3">{record.quantity} (ML)</td>
                <td className="px-4 py-3">{record.email}</td>
                <td className="px-4 py-3">
                  {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytic;
