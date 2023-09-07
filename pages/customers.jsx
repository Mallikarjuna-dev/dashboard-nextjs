import { data } from "@/data/data";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Dashboard</h2>
        <h2>Welcome back, clint</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 bg-white rounded-lg overflow-y-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 my-3 p-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-200 my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 rounded-lg cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
