import React from 'react';

export default function PerformanceComparison() {
  const metrics = [
    { task: 'AI Model Training', standard: '48 hours', neocloud: '2.4 hours', speedup: '20x' },
    { task: '4K Video Rendering', standard: '6 hours', neocloud: '18 minutes', speedup: '20x' },
    { task: '3D Scene Rendering', standard: '12 hours', neocloud: '36 minutes', speedup: '20x' },
    { task: 'Data Processing', standard: '24 hours', neocloud: '1.2 hours', speedup: '20x' },
  ];

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Performance Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-4 px-6">Task</th>
              <th className="text-left py-4 px-6">Standard Hardware</th>
              <th className="text-left py-4 px-6">Neo Clouds</th>
              <th className="text-left py-4 px-6">Speed Improvement</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                <td className="py-4 px-6">{metric.task}</td>
                <td className="py-4 px-6 text-gray-400">{metric.standard}</td>
                <td className="py-4 px-6 text-green-400">{metric.neocloud}</td>
                <td className="py-4 px-6 text-purple-400">{metric.speedup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}