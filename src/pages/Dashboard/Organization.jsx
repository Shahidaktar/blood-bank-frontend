import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/shared/Layout/Layout";
import SliderCard from "../../components/shared/Layout/SliderCard";
import Spinner from "../../components/shared/Spinner";
import API from "./../../services/API";

const Organization = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getOrganizations = async () => {
    setLoading(true);
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-organizations");

        if (data?.success) {
          setLoading(false);
          setData(data?.organizations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-organizations-for-hospital"
        );

        if (data?.success) {
          setLoading(false);
          setData(data?.organizations);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganizations();
  }, [user]);
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center mt-3">
          {data.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 ">
              {data.map((i) => (
                <SliderCard data={i} key={i._id} flag={true} />
              ))}
            </div>
          ) : (
            <h1 className=" p-3 w-full overflow-hidden rounded-md text-gray-700 text-5xl">
              There is no record
            </h1>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Organization;
