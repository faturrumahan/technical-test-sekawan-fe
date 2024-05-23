import React from "react";

export default function Tasks() {
  return (
    <div className="bg-white rounded-lg font-bold text-lg">
      <div className="px-6 pt-6 mb-2 flex justify-between">
        <div>
          <p>Tasks</p>
          <p className="text-sm text-gray-400">Today</p>
        </div>
        <div className="text-blue-500">View details</div>
      </div>
      <div className="grid grid-rows-4 divide-y-2">
        <div className="flex flex-1 justify-between p-6">
          <p className="text-gray-400">Create new task</p>
          <div className="p-2 bg-gray-200 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-1 justify-between p-6">
          <div className="flex gap-3 items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
            />
            <label>Finish ticket update</label>
          </div>
          <div className="bg-orange-400 rounded-xl py-1 px-4 text-white font-light">
            Urgent
          </div>
        </div>
        <div className="flex flex-1 justify-between p-6">
          <div className="flex gap-3 items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
            />
            <label>Create new ticket example</label>
          </div>
          <div className="bg-green-400 rounded-xl py-1 px-4 text-white font-light">
            NEW
          </div>
        </div>
        <div className="flex flex-1 justify-between p-6">
          <div className="flex gap-3 items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
            />
            <label>Update ticket report</label>
          </div>
          <div className="bg-gray-200 rounded-xl py-1 px-4 text-gray-600 font-light">
            DEFAULT
          </div>
        </div>
      </div>
    </div>
  );
}
