import React from "react";
import { data } from "@/data/data";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div className="w-full relative col-span-1 lg:h-[70vh] h-[50vh] p-4 m-auto border rounded-lg bg-white overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="flex items-center bg-gray-50 hover:bg-gray-200 my-3 p-2 rounded-lg cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-purple-100">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex absolute md:hidden right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
