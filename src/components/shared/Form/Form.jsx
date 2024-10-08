import React, { useState } from "react";
import InputType from "./InputType";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ submitBtn, formType, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-2 mb-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {formTitle}
        </h2>
      </div>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              email,
              password,
              role,
              name,
              hospitalName,
              organizationName,
              address,
              phone,
              website
            );
        }}
      >
        <div className="flex justify-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <input
              id="donarRadio"
              name="role"
              type="radio"
              value={"donar"}
              defaultChecked
              onChange={(e) => setRole(e.target.value)}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="donarRadio"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Donar
            </label>
          </div>

          {formType === "login" && (
            <div className="flex items-center gap-x-3">
              <input
                id="adminRadio"
                name="role"
                type="radio"
                value={"admin"}
                onChange={(e) => setRole(e.target.value)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="adminRadio"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Admin
              </label>
            </div>
          )}

          <div className="flex items-center gap-x-3">
            <input
              id="hospitalRadio"
              name="role"
              type="radio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="hospitalRadio"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Hospital
            </label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              id="oraganizationRadio"
              name="role"
              type="radio"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="oraganizationRadio"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Organization
            </label>
          </div>
        </div>

        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    value={email}
                    required={"required"}
                    label={"email address"}
                    labelFor={"email"}
                    onchange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    value={password}
                    required={"required"}
                    label={"password"}
                    labelFor={"password"}
                    onchange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "donar" || role === "admin") && (
                    <InputType
                      id={"name"}
                      name={"name"}
                      type={"text"}
                      value={name}
                      required={"required"}
                      label={"Name"}
                      labelFor={"name"}
                      onchange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      id={"hospitalName"}
                      name={"hospitalName"}
                      type={"text"}
                      value={hospitalName}
                      required={"required"}
                      label={"Hospital Name"}
                      labelFor={"hospitalName"}
                      onchange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  {role === "organization" && (
                    <InputType
                      id={"organization"}
                      name={"organization"}
                      type={"text"}
                      value={organizationName}
                      required={"required"}
                      label={"Organization Name"}
                      labelFor={"organization"}
                      onchange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}

                  <InputType
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    value={email}
                    required={"required"}
                    label={"email address"}
                    labelFor={"email"}
                    onchange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    value={password}
                    required={"required"}
                    label={"password"}
                    labelFor={"password"}
                    onchange={(e) => setPassword(e.target.value)}
                  />

                  <InputType
                    id={"address"}
                    name={"address"}
                    type={"text"}
                    value={address}
                    required={"required"}
                    label={"Address"}
                    labelFor={"Address"}
                    onchange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    id={"phone"}
                    name={"phone"}
                    type={"text"}
                    value={phone}
                    required={"required"}
                    label={"Phone"}
                    labelFor={"phone"}
                    onchange={(e) => setPhone(e.target.value)}
                  />
                  <InputType
                    id={"website"}
                    name={"website"}
                    type={"text"}
                    value={website}
                    label={"Website"}
                    labelFor={"website"}
                    onchange={(e) => setWebsite(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
