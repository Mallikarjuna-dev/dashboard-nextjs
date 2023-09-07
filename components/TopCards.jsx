import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between p-4 border rounded-lg">
        <div className="flex flex-col w-full lg:pb-1">
          <p className="text-2xl font-bold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center rounded-lg p-2">
          <span className="text-green-800 text-lg">+15%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between p-4 border rounded-lg">
        <div className="flex flex-col w-full pb-1">
          <p className="text-2xl font-bold">$17,283</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="bg-green-200 flex items-center rounded-lg p-2">
          <span className="text-green-800 text-lg">+12%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between p-4 border rounded-lg">
        <div className="flex flex-col w-full pb-1">
          <p className="text-2xl font-bold">11,472</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="bg-green-200 flex items-center rounded-lg p-2">
          <span className="text-green-800 text-lg">+27%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
