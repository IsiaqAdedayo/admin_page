import React, { useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Transition, Menu } from "@headlessui/react";
import MenuComponents from './MenuComponents';
import UserDetailsComponent from './UserDetailsComponent';


const Overview = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const menuClick = () => {
    if(isUserOpen === true){
      setIsUserOpen(isUserOpen === false)
      setIsMenuOpen(isMenuOpen === true)
    }else{
      setIsMenuOpen(!isMenuOpen)
    }
  }

  const userClick = () => {
    if(isMenuOpen === true){
      setIsUserOpen(isUserOpen === true)
      setIsMenuOpen(isMenuOpen === false)
    }else{
      setIsUserOpen(!isUserOpen)
    }
  }

    const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: 'Expense',
            data: [33, 53, 85, 41, 44, 65, 23, 75, 45, 74, 67, 50],
            responsive: true,
            backgroundColor: "rgba(40, 40, 252, 0.699)",
            borderColor: "rgba(40, 40, 252, 0.993)",
            borderWidth: 1,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        }
    ]
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                Min: 0,
                Max: 1000
              }
            }
          ]
        }
      };

    return (
        <div className="max-w-full col-span-7 md:col-span-5 h-full lg:col-span-4 sm:p-4 md:p-2 lg:p-4 md:border-r-4 border-gray-100">
            <div className="flex flex-row justify-between items-center">
              <div onClick={menuClick} className="border-2 border-gray-100 shadow-md rounded-full h-10 w-10 flex items-center justify-center bg-blue-50 md:mr-3 lg:hidden">
                <i className="fas fa-bars text-blue-900"></i>
              </div>
              <div className="flex items-center rounded-full bg-gray-100 h-14 font-bold w-8/12 md:w-full">
                  <i className="fas fa-search h-6 text-blue-900 inline-flex pl-4 md:pl-6 pt-1"></i>
                  <input type="text" placeholder="Search For Product" className="truncate ml-3 items-center bg-transparent outline-none placeholder-blue-900 placeholder-opacity-50 flex-shrink md:inline-flex w-full" />
              </div>
              <div onClick={userClick} className="border-2 border-gray-100 shadow-md rounded-full h-10 w-10 flex items-center justify-center bg-blue-50 md:hidden">
                <i className="fas fa-user text-blue-900" />
              </div>
              
            </div>

            <Transition
              show={isMenuOpen}
              enter="transition ease-out duration-500 transform origin-left"
              enterFrom="opacity-0 -translate-x-full"
              enterTo="opacity-100 -translate-x-0"
              leave="transition ease-in duration-1000 transform origin-left"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
              className="absolute z-20 pb-14 pt-5 text-blue-700 bg-blue-50 lg:bg-white w-screen md:w-2/4 lg:hidden pl-3 left-0"
            >
              <MenuComponents />
            </Transition>

            <Transition
                  show={isUserOpen}
                  enter="transition ease-out duration-500 transform origin-right"
                  enterFrom="opacity-0 translate-x-full"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in duration-1000 transform origin-right"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                  className="absolute z-50 p-3 py-5 text-blue-700 bg-blue-50 md:bg-white w-screen pl-3 left-0 md:hidden"
                >
                  <UserDetailsComponent />
            </Transition>

            <div className="mt-14 text-blue-900">
                <h1 className="mb-5 font-bold text-xl">Overview</h1>
                <div className="grid space-y-3 md:space-y-0 md:grid-cols-4 space-x-1">
                    <div className="border-2 border-gray-100 shadow rounded-md h-32 max-w-48 p-7">
                      <div className="flex flex-row justify-between pb-3">
                        <i className="fas fa-shopping-bag text-yellow-600 "></i>
                        <h1 className="text-green-400 font-bold">+24%</h1>
                      </div>
                      <div>
                        <h1 className="font-extrabold">$27,340.00</h1>
                        <p className="font-bold text-blue-900 opacity-30 text-xs">Total Sales</p>
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 shadow rounded-md h-32 max-w-48 p-7">
                      <div className="flex flex-row justify-between pb-3">
                        <i className="fas fa-chart-pie text-purple-500"></i>
                        <h1 className="text-red-400 font-bold">-32%</h1>
                      </div>
                      <div>
                        <h1 className="font-extrabold">$27,340.00</h1>
                        <p className="font-bold text-blue-900 opacity-30 text-xs">Total Expenses</p>
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 shadow rounded-md h-32 max-w-48 p-7">
                      <div className="flex flex-row justify-between pb-3">
                        <i className="fas fa-users text-green-400"></i>
                        <h1 className="text-green-400 font-bold">+48%</h1>
                      </div>
                      <div>
                        <h1 className="font-extrabold">18,260.00</h1>
                        <p className="font-bold text-blue-900 opacity-30 text-xs">Total Visitors</p>
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 shadow rounded-md h-32 max-w-48 p-7">
                      <div className="flex flex-row justify-between pb-3">
                        <i className="fas fa-shopping-cart text-red-700"></i>
                        <h1 className="text-red-400 font-bold">-12%</h1>
                      </div>
                      <div>
                        <h1 className="font-extrabold">$11,340.00</h1>
                        <p className="font-bold text-blue-900 opacity-30 text-xs">Total Orders</p>
                      </div>
                    </div>
                </div>

                <div className="border-2 border-gray-100 shadow rounded-md min-h-96 w-full mt-5 p-4">
                    <div className="flex flex-row justify-between">
                      <h1 className="mb-5 font-bold text-xl">Income</h1>

                      <div className="relative inline-block text-left text-blue-900">
                        <Menu>
                          {({ open }) => (
                            <>
                              <span className="rounded-md shadow-sm">
                                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-blue-900 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                  <span className="font-bold text-blue-900">2021</span>
                                  <svg
                                    className="w-5 h-5 ml-2 -mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </Menu.Button>
                              </span>

                              <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                >
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#l"
                                          className={`${
                                            active
                                              ? "bg-blue-100 text-gray-900"
                                              : "text-blue-900"
                                          } flex justify-between w-full px-4 py-2 font-bold text-sm leading-5 text-left`}
                                        >
                                          2020
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#b"
                                          className={`${
                                            active
                                              ? "bg-blue-100 text-gray-900"
                                              : "text-blue-900"
                                          } flex justify-between w-full px-4 py-2 font-bold text-sm leading-5 text-left`}
                                        >
                                          2019
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#c"
                                          className={`${
                                            active
                                              ? "bg-blue-100 text-gray-900"
                                              : "text-blue-900"
                                          } flex justify-between w-full px-4 py-2 font-bold text-sm leading-5 text-left`}
                                        >
                                          2018
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#d"
                                          className={`${
                                            active
                                              ? "bg-blue-100 text-gray-900"
                                              : "text-blue-900"
                                          } flex justify-between w-full px-4 py-2 font-bold text-sm leading-5 text-left`}
                                        >
                                          2017
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      </div>
                    </div>
                    <Bar data={data} options={options}/>
                </div>

                <div className="border-2 border-gray-100 shadow rounded-md min-h-96 w-full mt-5 p-4 overflow-x-scroll">
                  <h1 className="mb-5 font-bold text-xl">Popular Products</h1>

                  <table className="border-collapse w-full text-left text-xs font-bold">
                    <thead className="bg-blue-50 rounded-md text-blue-900 opacity-70">
                      <tr>
                        <th className="p-2 text-center">Photos</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Date</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Brand</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td className="p-2 flex justify-center">
                          <div className="border-2 border-gray-100 shadow-md rounded h-10 w-10 grid place-items-center bg-blue-50">
                              <img src="https://toppng.com/uploads/preview/iphone-png-black-and-white-s-11545691331qkvchv75kk.png" alt="smartphone" />
                          </div>
                        </td>
                        <td className="p-2">
                          <h1>Smartphone</h1>
                          <h1>#43765875575</h1>
                        </td>
                        <td className="p-2">Aug 12, 2021</td>
                        <td className="p-2">Gadget</td>
                        <td className="p-2">Mito</td>
                        <td className="p-2 text-green-600">$99.89</td>
                        <td>
                          <h1>Available</h1>
                          <h1>18k viewers</h1>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="p-2 flex justify-center">
                          <div className="border-2 border-gray-100 shadow-md rounded h-10 w-10 grid place-items-center bg-blue-50">
                          <img src="https://media.istockphoto.com/illustrations/cowboy-has-illustration-id165731699?k=6&m=165731699&s=612x612&w=0&h=40f8wK2cwedfIPX8NThQhlyRmv5u1ICPeqHD10e_JZg=" alt="cowboy_hat" />
                          </div>
                        </td>
                        <td className="p-2">
                          <h1>Cowboy Hat</h1>
                          <h1>#34974497649747</h1>
                        </td>
                        <td className="p-2">Aug 12, 2021</td>
                        <td className="p-2">Fashion</td>
                        <td className="p-2">Swallow</td>
                        <td className="p-2 text-green-600">$99.89</td>
                        <td>
                          <h1>Available</h1>
                          <h1>18k viewers</h1>
                        </td>
                      </tr>                      
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    )
}

export default Overview
