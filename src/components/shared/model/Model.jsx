import React, { useState, useRef } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import InputType from "../Form/InputType";
import API from "./../../../services/API";
import { useSelector } from "react-redux";

const Model = ({ isVisible, onClose, children}) => {
  if (!isVisible) return null;
  // const [inventoryType, setInventoryType] = useState("in");
  // const [bloodGroup, setBloodGroup] = useState("");
  // const [quantity, setQuantity] = useState(0);
  // const [email, setEmail] = useState("");
  // const { user } = useSelector((state) => state.auth);

  // const handleModelSubmit = async () => {
  //   try {
  //     if (!bloodGroup || !quantity) {
  //       return alert("please provide all fields");
  //     }
  //     const { data } = await API.post("/inventory/create-inventory", {
  //       email,
  //       organization: user?._id,
  //       inventoryType,
  //       bloodGroup,
  //       quantity,
  //     });
  //     if (data?.success) {
  //       alert(data?.message);
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     alert(error.response.data.message);
  //     console.log(error);
  //     window.location.reload();
  //   }
  // };

  // const cancelButtonRef = useRef(null);
  // const handleClose = (e) => {
  //   if (e.target.id === "wrapper") onClose();
  // };
  return (
    <>
      {/* <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="flex flex-col" style={{ width: `${width}` }}>
          <button
            className="text-white text-xl place-self-end hover:text-red-600"
            onClick={() => onClose()}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="bg-white p-2 rounded">{children}</div>
        </div>
      </div> */}

      <Transition.Root show={isVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => onClose()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                  {children}
                  {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-2">
                    <div className="mt-3">
                      <div className="flex justify-start gap-x-3">
                        <p>Blood type : </p>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="donarRadio"
                            name="in"
                            type="radio"
                            value={"in"}
                            defaultChecked
                            onChange={(e) => setInventoryType(e.target.value)}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="inRadio"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            In
                          </label>
                        </div>

                        <div className="flex items-center gap-x-3">
                          <input
                            id="out"
                            name="in"
                            type="radio"
                            value={"out"}
                            onChange={(e) => setInventoryType(e.target.value)}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="outRadio"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Out
                          </label>
                        </div>
                      </div>
                      <div className="sm:col-span-3 mt-3">
                        <label
                          htmlFor="bloodGroup"
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
                        type={"email"}
                        value={email}
                        onchange={(e) => setEmail(e.target.value)}
                      />
                      <InputType
                        label={"Quentity (ML)"}
                        type={"Number"}
                        labelFor={"quantity"}
                        value={quantity}
                        onchange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </div> */}
                  {/* <div className="bg-gray-50 px-4 py-3  sm:flex sm:flex-row-reverse sm:px-6">
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
                      onClick={() => onClose()}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* before side model */}

      {/* <Transition.Root show={isVisible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => onClose()}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Manage Blood Record
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => onClose()}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flex justify-start gap-x-3">
                            <p>Blood type : </p>
                            <div className="flex items-center gap-x-3">
                              <input
                                id="donarRadio"
                                name="in"
                                type="radio"
                                value={"in"}
                                defaultChecked
                                onChange={(e) =>
                                  setInventoryType(e.target.value)
                                }
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label
                                htmlFor="inRadio"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                In
                              </label>
                            </div>

                            <div className="flex items-center gap-x-3">
                              <input
                                id="out"
                                name="in"
                                type="radio"
                                value={"out"}
                                onChange={(e) =>
                                  setInventoryType(e.target.value)
                                }
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label
                                htmlFor="outRadio"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Out
                              </label>
                            </div>
                          </div>
                          <div className="sm:col-span-3 mt-3">
                            <label
                              htmlFor="bloodGroup"
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
                            type={"email"}
                            value={email}
                            onchange={(e) => setEmail(e.target.value)}
                          />
                          <InputType
                            label={"Quentity (ML)"}
                            type={"Number"}
                            labelFor={"quantity"}
                            value={quantity}
                            onchange={(e) => setQuantity(e.target.value)}
                          />
                          <div className="mt-6">
                            <button
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                              onClick={handleModelSubmit}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
    </>
  );
};

export default Model;
