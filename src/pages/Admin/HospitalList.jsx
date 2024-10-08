import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import Spinner from "../../components/shared/Spinner";
import API from "./../../services/API";

const HospitalList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getHospitals = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("/admin/hospital-list");

      if (data?.success) {
        setLoading(false);
        setData(data?.hospitalData);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

  const handleDelete = async (id) => {
    try {
      let ans = window.prompt("Are you sure to delete the record", "Yes");
      if (!ans) return;
      const { data } = await API.delete(`/admin/delete-record/${id}`);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8 lg:py-10">
            <div className=" w-full mx-auto mt-10 overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  rounded-tl rounded-bl">
                      Name
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                      Email
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                      Phone
                    </th>

                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                      Date & Time
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((record) => (
                    <tr key={record._id}>
                      <td className="px-4 py-3">{record.hospitalName}</td>
                      <td className="px-4 py-3">{record.email}</td>
                      <td className="px-4 py-3">{record.phone}</td>

                      <td className="px-4 py-3">
                        {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                      </td>
                      <td className="px-4 py-3 ">
                        <button onClick={() => handleDelete(record._id)}>
                          <ArchiveBoxXMarkIcon
                            className="h-6 w-6 text-red-600 hover:text-red-500"
                            aria-hidden="true"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HospitalList;
