import moment from "moment";
import React from "react";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { useSelector } from "react-redux";

const SliderCard = ({ data, flag = false }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg  ">
      {flag && (
        <div className="flex justify-end">
          <span className="p-1 text-end bg-cyan-400 text-white rounded-bl-md">
            {data.inventoryType === "in" || data.inventoryType === "out"
              ? moment(data.createdAt).format("DD/MM/YYYY hh:mm A")
              : data.address}
          </span>
        </div>
      )}
      {data.bloodGroup ? (
        <h1 className=" px-3 py-2 w-full overflow-hidden rounded-md text-red-600 text-5xl lg:aspect-none group-hover:opacity-75 font-medium">
          {data.bloodGroup}
        </h1>
      ) : (
        <img
          src="/org.png"
          alt="Sunset in the mountains"
          height={200}
          width={200}
          className="mt-3"
        />
      )}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.organizationName}</div>

        {user && user.role === "organization" ? (
          <p className="text-gray-700 text-base leading-relaxed bg-slate-200 rounded-md p-2">
            {data.inventoryType === "in"
              ? `Successfully add ${data.quantity}ML Blood in the Inventory.`
              : `Successfully deliver ${data.quantity}ML Blood from the Inventory.`}
          </p>
        ) : (
          <p className="text-gray-700 text-base leading-relaxed p-2 bg-slate-200 rounded-md">
            {data.inventoryType === "in"
              ? `Thanks for donating ${data.quantity} ML Blood to the ${data.organization.organizationName} organization.`
              : data.inventoryType === "out"
              ? `${data.quantity} ML Blood has been delivered successfully.`
              : "If any query related to blood donation, please do not hesitate to contact us."}
          </p>
        )}

        <div className="flex justify-between pt-3">
          {data.phone && (
            <div className="has-tooltip">
              <span className="tooltip rounded shadow-lg px-2 py-1 bg-gray-100 text-blue-600 -mt-8">
                {data.phone}
              </span>
              <button onClick={() => navigator.clipboard.writeText(data.phone)}>
                <MdOutlineLocalPhone className="h-5 w-5 hover:text-blue-600" />
              </button>
            </div>
          )}

          <div className="has-tooltip">
            <span className="tooltip rounded shadow-lg px-2 py-1 bg-gray-100 text-pink-600 -mt-8 absolute">
              {data.organization && data.organization.role === "organization"
                ? data.organization.email
                : data.email}
            </span>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  data.organization && data.organization.role === "organization"
                    ? data.organization.email
                    : data.email
                )
              }
            >
              <MdOutlineEmail className="h-5 w-5 hover:text-pink-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
