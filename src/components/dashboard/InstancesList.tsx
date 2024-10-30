import React from 'react';
import { 
  ExternalLink, 
  Pause, 
  Play, 
  X 
} from 'lucide-react';

// Rest of the code remains the same
export default function InstancesList() {
  const instances = [
    {
      id: 'inst-1',
      name: 'AI Training Instance',
      type: 'GPU-V100',
      status: 'running',
      uptime: '24h 12m',
      usage: 87,
    },
    {
      id: 'inst-2',
      name: 'Rendering Worker',
      type: 'GPU-A100',
      status: 'running',
      uptime: '12h 45m',
      usage: 92,
    },
    {
      id: 'inst-3',
      name: 'Test Environment',
      type: 'GPU-T4',
      status: 'stopped',
      uptime: '0h 0m',
      usage: 0,
    },
  ];

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Active Instances</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="pb-4">Name</th>
              <th className="pb-4">Type</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Uptime</th>
              <th className="pb-4">Usage</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {instances.map((instance) => (
              <tr key={instance.id} className="border-b border-gray-700/50">
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {instance.name}
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </td>
                <td className="py-4">{instance.type}</td>
                <td className="py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      instance.status === 'running'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}
                  >
                    {instance.status}
                  </span>
                </td>
                <td className="py-4">{instance.uptime}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-500 rounded-full h-2"
                        style={{ width: `${instance.usage}%` }}
                      ></div>
                    </div>
                    <span>{instance.usage}%</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {instance.status === 'running' ? (
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Pause className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Play className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-1 hover:bg-gray-700 rounded text-red-400">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}