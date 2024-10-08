import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import Spinner from "../../components/shared/Spinner";
import API from "./../../services/API";

const Hospital = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getHospitals = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("/inventory/get-hospitals");

      if (data?.success) {
        setLoading(false);
        setData(data?.hospitals);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

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
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((record) => (
                    <tr key={record._id}>
                      <td className="px-4 py-3">{record.hospitalName}</td>
                      <td className="px-4 py-3">{record.email}</td>
                      <td className="px-4 py-3">{record.phone}</td>
                      <td className="px-4 py-3">{record.address}</td>
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

export default Hospital;
