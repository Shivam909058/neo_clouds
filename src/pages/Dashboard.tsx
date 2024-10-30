import React from 'react';
import { CreditCard, Power, RefreshCw } from 'lucide-react';
import UsageMetrics from '../components/dashboard/UsageMetrics';
import InstancesList from '../components/dashboard/InstancesList';
import BillingOverview from '../components/dashboard/BillingOverview';
import ActivityLog from '../components/dashboard/ActivityLog';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">Monitor your GPU instances and resource usage</p>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg inline-flex items-center gap-2">
              <Power className="w-4 h-4" />
              Launch Instance
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg inline-flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        <UsageMetrics />

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <InstancesList />
          </div>
          <div>
            <BillingOverview />
          </div>
        </div>

        <ActivityLog />
      </div>
    </div>
  );
}