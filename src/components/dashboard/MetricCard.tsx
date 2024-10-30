import React, { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  color: 'purple' | 'blue' | 'pink' | 'green';
}

const colorVariants = {
  purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/50',
  blue: 'from-blue-500/20 to-blue-900/20 border-blue-500/50',
  pink: 'from-pink-500/20 to-pink-900/20 border-pink-500/50',
  green: 'from-green-500/20 to-green-900/20 border-green-500/50',
};

export function MetricCard({ icon, title, value, trend, trendUp, color }: MetricCardProps) {
  return (
    <div className={`bg-gradient-to-br ${colorVariants[color]} border rounded-2xl p-6`}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-gray-800/50 rounded-lg">{icon}</div>
        <div className={`flex items-center gap-1 text-sm ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
          {trendUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {trend}
        </div>
      </div>
      <h3 className="text-gray-400 mb-1">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}