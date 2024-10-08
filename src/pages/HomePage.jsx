import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import InputType from "../components/shared/Form/InputType";
import Layout from "../components/shared/Layout/Layout";
import SliderCard from "../components/shared/Layout/SliderCard";
import Model from "../components/shared/model/Model";
import Spinner from "../components/shared/Spinner";
import API from "../services/API";

const HomePage = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");

  const handleModelSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("please provide all fields");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        email,
        organization: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });
      if (data?.success) {
        alert(data?.message);
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  const [data, setData] = useState([]);
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodRecords();
  }, []);
  const [showModel, setShowModel] = useState(false);

  return (
    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8 lg:py-10">
              <div className="flex justify-center items-start space-x-2">
                <FaPlus
                  className="my-auto text-green-600 h-6 w-6 "
                  onClick={() => setShowModel(true)}
                />

                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Add Inventory
                </h2>
              </div>
              <Model isVisible={showModel} onClose={() => setShowModel(false)}>
                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-2">
                  <div className="mt-3">
                    <div className="flex justify-start gap-x-3">
                      <p>Blood type : </p>
                      <div className="flex items-center gap-x-3">
                        <input
                          id={"in"}
                          name={"in"}
                          type={"radio"}
                          value={"in"}
                          defaultChecked
                          onChange={(e) => setInventoryType(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="in"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          In
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id={"out"}
                          name={"in"}
                          type={"radio"}
                          value={"out"}
                          onChange={(e) => setInventoryType(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="out"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Out
                        </label>
                      </div>
                    </div>
                    <div className="sm:col-span-3 mt-3">
                      <label
                        htmlFor="group"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Choose Blood Group
                      </label>
                      <div className="mt-4">
                        <select
                          id="group"
                          name="group"
                          onChange={(e) => setBloodGroup(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Enter Blood Group</option>
                          <option value={"A+"}>A+</option>
                          <option value={"B+"}>B+</option>
                          <option value={"O+"}>O+</option>
                          <option value={"AB+"}>AB+</option>
                          <option value={"A-"}>A-</option>
                          <option value={"B-"}>B-</option>
                          <option value={"O-"}>O-</option>
                          <option value={"AB-"}>AB-</option>
                        </select>
                      </div>
                    </div>
                    <InputType
                      label={"Email"}
                      labelFor={"email"}
                      id={"email"}
                      type={"email"}
                      value={email}
                      autoComplete={"autoComplete"}
                      onchange={(e) => setEmail(e.target.value)}
                    />
                    <InputType
                      label={"Quentity (ML)"}
                      labelFor={"quantity"}
                      id={"quantity"}
                      type={"Number"}
                      value={quantity}
                      onchange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3  sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleModelSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setShowModel(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Model>
              <div className="flex justify-center mt-9">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 ">
                  {data.map((i) => (
                    <SliderCard data={i} key={i._id} flag={true} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
