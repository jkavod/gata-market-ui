import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import {
  Profile,
  Logo,
  Order,
  Orders,
  Vendor,
  Like,
  UserProfile,
  SearchIcon,
  Light,
} from "../assets";
import './ui.css'

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-darkShade">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 py-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={Logo} alt="Gata Market" />
                </div>
              </div>

              <div className="lg:flex items-center justify-center sm:items-stretch sm:justify-start" id="input">
                <div className="bg-darkButtons py-2 px-10 lg:flex items-center gap-10 justify-between rounded">
                  <img className="h-8 w-auto" src={SearchIcon} alt="Search" />
                  <input
                    className="bg-darkButtons p-2 focus:outline-none focus:text-white px-4"
                    placeholder="Search"
                    type="text"
                  />
                  <a
                    href="#"
                    className="bg-yellowShade text-darkShade font-bold py-1 px-5 rounded"
                  >
                    Search
                  </a>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Orders</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={Light}
                    alt="Light"
                  />
                </button>

                <button
                  type="button"
                  className="relative rounded-full p-1 text-darkShade hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Liked Products</span>
                  <img className="h-8 w-8 rounded-full" src={Order} alt="Order" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-darkShade text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={Profile}
                        alt="User Profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-10 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-darkShadeReduced py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-darkShade" : "",
                              "px-4 py-2 text-sm text-white flex justify-start items-center gap-3"
                            )}
                          >
                            <img
                              className="h-8 w-8 rounded-full"
                              src={UserProfile}
                              alt="Profile"
                            />
                            My Account
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-darkShade" : "",
                              "px-4 py-2 text-sm text-white flex justify-start items-center gap-3"
                            )}
                          >
                            <img
                              className="h-8 w-8 rounded-full"
                              src={Orders}
                              alt="My Order"
                            />
                            My Order
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-darkShade" : "",
                              "px-4 py-2 text-sm text-white flex justify-start items-center gap-3"
                            )}
                          >
                            <img
                              className="h-8 w-8 rounded-full"
                              src={Vendor}
                              alt="Vendor"
                            />
                            Become A Vendor
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
