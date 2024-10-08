import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Layout from "../../components/shared/Layout/Layout";
import SliderCard from "../../components/shared/Layout/SliderCard";
import Spinner from "../../components/shared/Spinner";
import API from "./../../services/API";
const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getOrgs = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("/inventory/get-all-organizations");

      if (data?.success) {
        setLoading(false);
        setData(data?.orgData);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getOrgs();
  }, []);
  return (
    <Layout>
      <section className="text-gray-600 mt-10">
        <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center ">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mb-10">
              <img src="./drop.svg" alt="" height={80} width={80} />
            </div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to the BloodBlank
            </h1>
            <p className="mb-8 leading-relaxed max-w-2xl">
              This full-stack application empowers users to easily donate blood
              at hospitals through the organization, fostering a sense of
              community and promoting public health. It simplifies the donation
              process, enhancing accessibility and encouraging participation in
              life-saving initiatives.
            </p>
            {(user?.role === "donar" || user?.role === "hospital") && (
              <button className="animate-bounce p-3  bg-white  font-semibold text-cyan-600 shadow-xl rounded-full">
                <FaArrowDown className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </section>
      {(user?.role === "donar" || user?.role === "hospital") && (
        <>
          {!loading ? (
            <>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 mt-6 mb-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 max-md:text-center">
                  All organizations
                </h1>
              </div>
              {data.length > 0 ? (
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
                    {data.map((i) => (
                      <SliderCard data={i} key={i._id} />
                    ))}
                  </div>
                </div>
              ) : (
                <h1 className=" p-3 w-full overflow-hidden rounded-md text-gray-700 text-5xl">
                  There is no organization
                </h1>
              )}
            </>
          ) : (
            <Spinner />
          )}
        </>
      )}
    </Layout>
  );
};

export default AdminHome;
