import React from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

export default function BillingOverview() {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Billing Overview</h2>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400">Current Balance</span>
          <span className="text-2xl font-bold">$842.50</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 rounded-full h-2"
            style={{ width: '70%' }}
          ></div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-gray-400">Monthly Budget: $1,200</span>
          <span className="text-gray-400">70% remaining</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">This Month's Usage</span>
          <span className="font-semibold">$357.50</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Projected Usage</span>
          <span className="font-semibold">$512.30</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Last Month's Usage</span>
          <span className="font-semibold">$892.40</span>
        </div>
      </div>

      <button className="w-full bg-purple-500 hover:bg-purple-600 py-2 rounded-lg inline-flex items-center justify-center gap-2">
        <CreditCard className="w-4 h-4" />
        Add Funds
      </button>
    </div>
  );
}