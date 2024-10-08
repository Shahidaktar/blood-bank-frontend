import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { VscOrganization } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const navigation = [
  { name: "Inventory", pathName: "/inventory" },
  { name: "Donar", pathName: "/donar" },
  { name: "Hospital", pathName: "/hospital" },
  { name: "Organization", pathName: "/organization" },
  { name: "Consumer", pathName: "/consumer" },
  { name: "Donation", pathName: "/donation" },
  { name: "Donar List", pathName: "/donar-list" },
  { name: "Hospital List", pathName: "/hospital-list" },
  { name: "Organization List", pathName: "/organization-list" },
  { name: "Home", pathName: "/" },
];
const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <aside className=" sticky left-0 top-0 flex h-screen w-fit flex-col justify-between p-3  bg-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        <SideLink
          link={navigation[9].pathName}
          label={navigation[9].name}
          icon={<HiOutlineHome />}
        />

        {user?.role === "organization" && (
          <>
            <SideLink
              link={navigation[0].pathName}
              label={navigation[0].name}
              icon={<BiDonateBlood />}
            />
            <SideLink
              link={navigation[1].pathName}
              label={navigation[1].name}
              icon={<FaRegUser />}
            />
            <SideLink
              link={navigation[2].pathName}
              label={navigation[2].name}
              icon={<FaRegHospital />}
            />
          </>
        )}
        {user?.role === "admin" && (
          <>
            <SideLink
              link={navigation[6].pathName}
              label={navigation[6].name}
              icon={<FaRegUser />}
            />
            <SideLink
              link={navigation[7].pathName}
              label={navigation[7].name}
              icon={<FaRegHospital />}
            />
            <SideLink
              link={navigation[8].pathName}
              label={navigation[8].name}
              icon={<VscOrganization />}
            />
          </>
        )}
        {(user?.role === "donar" || user?.role === "hospital") && (
          <>
            <SideLink
              link={navigation[3].pathName}
              label={navigation[3].name}
              icon={<VscOrganization />}
            />
          </>
        )}

        {user?.role === "hospital" && (
          <>
            <SideLink
              link={navigation[4].pathName}
              label={navigation[4].name}
              icon={<FaRegHospital />}
            />
          </>
        )}

        {user?.role === "donar" && (
          <SideLink
            link={navigation[5].pathName}
            label={navigation[5].name}
            icon={<FaRegUser />}
          />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

const SideLink = ({ link, label, icon }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "bg-blue-100 flex gap-4 items-center p-4 rounded-lg justify-start"
          : "flex gap-4 items-center p-4 rounded-lg justify-start"
      }
    >
      {icon}
      <p className="text-lg font-semibold max-lg:hidden">{label}</p>
    </NavLink>
  );
};
