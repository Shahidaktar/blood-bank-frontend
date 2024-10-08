import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PresentationChartLineIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { HiOutlineHome } from "react-icons/hi2";
import { BiDonateBlood } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { userNotExist } from "../../../redux/features/auth/authSlice";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogOut = () => {
    localStorage.clear();
    alert("logout successfully");
    dispatch(userNotExist());
    navigate("/login");
  };
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white flex-between w-full px-6 py-2 lg:px-10 shadow-sm border-b-2"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl ">
              <div className="relative flex h-16 items-center justify-between">
                {user && (
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                )}

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to="/">
                    <img src="./drop.svg" alt="" height={30} width={30} />
                  </Link>

                  <div className="flex flex-shrink-0 items-center">
                    <span className="text-sky-800 text-2xl font-semibold">
                      Blood
                    </span>
                    <span className="text-cyan-200 text-2xl font-medium">
                      Bank
                    </span>
                  </div>
                </div>

                {user && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {user?.role === "organization" && (
                      <>
                        {location.pathname === "/" ||
                        location.pathname === "/inventory" ||
                        location.pathname === "/donar" ||
                        location.pathname === "/hospital" ? (
                          <Link
                            to="/analytics"
                            className="relative rounded-full  p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">analytics</span>
                            <PresentationChartLineIcon
                              className="h-7 w-7"
                              aria-hidden="true"
                            />
                          </Link>
                        ) : (
                          <Link
                            to="/"
                            className="relative rounded-full  p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">organizations</span>
                            <HomeIcon className="h-7 w-7" aria-hidden="true" />
                          </Link>
                        )}
                      </>
                    )}

                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="/user1.svg"
                            alt="user"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                          <Menu.Item>
                            {({ active }) => (
                              <p
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex items-center px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {user?.name ||
                                  user?.hospitalName ||
                                  user?.organizationName}
                                <span className=" ml-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                  {user?.role}
                                </span>
                              </p>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogOut}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1  pb-3 pt-2 ">
                <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                  {
                    <MobileNavLink
                      link={navigation[9].pathName}
                      label={navigation[9].name}
                      icon={<HiOutlineHome />}
                    />
                  }
                </Disclosure.Button>
                {user?.role === "organization" && (
                  <>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[0].pathName}
                          label={navigation[0].name}
                          icon={<BiDonateBlood />}
                        />
                      }
                    </Disclosure.Button>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[1].pathName}
                          label={navigation[1].name}
                          icon={<FaRegUser />}
                        />
                      }
                    </Disclosure.Button>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[2].pathName}
                          label={navigation[2].name}
                          icon={<FaRegHospital />}
                        />
                      }
                    </Disclosure.Button>
                  </>
                )}
                {user?.role === "admin" && (
                  <>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[6].pathName}
                          label={navigation[6].name}
                          icon={<FaRegUser />}
                        />
                      }
                    </Disclosure.Button>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[7].pathName}
                          label={navigation[7].name}
                          icon={<FaRegHospital />}
                        />
                      }
                    </Disclosure.Button>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[8].pathName}
                          label={navigation[8].name}
                          icon={<VscOrganization />}
                        />
                      }
                    </Disclosure.Button>
                  </>
                )}

                {(user?.role === "donar" || user?.role === "hospital") && (
                  <>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[3].pathName}
                          label={navigation[3].name}
                          icon={<VscOrganization />}
                        />
                      }
                    </Disclosure.Button>
                  </>
                )}
                {user?.role === "hospital" && (
                  <>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[4].pathName}
                          label={navigation[4].name}
                          icon={<FaRegHospital />}
                        />
                      }
                    </Disclosure.Button>
                  </>
                )}
                {user?.role === "donar" && (
                  <>
                    <Disclosure.Button className="block rounded-md px-3 py-2 w-full">
                      {
                        <MobileNavLink
                          link={navigation[5].pathName}
                          label={navigation[5].name}
                          icon={<FaRegUser />}
                        />
                      }
                    </Disclosure.Button>
                  </>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;

const MobileNavLink = ({ link, label, icon }) => {
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
      <p className="text-lg font-semibold">{label}</p>
    </NavLink>
  );
};
