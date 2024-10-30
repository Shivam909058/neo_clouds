import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ActivityLog() {
  const activities = [
    {
      id: 1,
      type: 'success',
      message: 'AI Training Instance started successfully',
      timestamp: '2 minutes ago',
    },
    {
      id: 2,
      type: 'alert',
      message: 'High memory usage detected on Rendering Worker',
      timestamp: '15 minutes ago',
    },
    {
      id: 3,
      type: 'success',
      message: 'Test Environment stopped successfully',
      timestamp: '1 hour ago',
    },
    {
      id: 4,
      type: 'alert',
      message: 'Approaching monthly GPU usage limit',
      timestamp: '2 hours ago',
    },
  ];

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Activity Log</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30"
          >
            {activity.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-yellow-400" />
            )}
            <div className="flex-1">
              <p className="text-sm">{activity.message}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}