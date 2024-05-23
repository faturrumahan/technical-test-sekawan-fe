import React from "react";

export default function UnresolvedTicket() {
  return (
    <div className="bg-white rounded-lg font-bold text-lg">
      <div className="px-6 pt-6 mb-2 flex justify-between">
        <div>
          <p>Unresolved Ticket</p>
          <p className="text-sm text-gray-400">
            Group: <span className="text-gray-600">Support</span>
          </p>
        </div>
        <div className="text-blue-500">View details</div>
      </div>
      <div className="grid grid-rows-4 divide-y-2">
        <div className="flex flex-1 justify-between p-6">
          <p>Waiting on Feature Request</p>
          <p className="text-gray-400">4238</p>
        </div>
        <div className="flex flex-1 justify-between p-6">
          <p>Awaiting Customer Response</p>
          <p className="text-gray-400">1005</p>
        </div>
        <div className="flex flex-1 justify-between p-6">
          <p>Awaiting Developer Fix</p>
          <p className="text-gray-400">914</p>
        </div>
        <div className="flex flex-1 justify-between p-6">
          <p>Pending</p>
          <p className="text-gray-400">281</p>
        </div>
      </div>
    </div>
  );
}
