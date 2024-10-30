import React from 'react';
import { 
  MonitorSmartphone, 
  RailSymbolIcon as MemoryIcon, 
  Clock, 
  Activity 
} from 'lucide-react';
import { MetricCard } from './MetricCard';

export default function UsageMetrics() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <MetricCard
        icon={<MonitorSmartphone className="w-8 h-8" />}
        title="GPU Usage"
        value="78%"
        trend="+12%"
        trendUp={true}
        color="purple"
      />
      <MetricCard
        icon={<MemoryIcon className="w-8 h-8" />}
        title="Memory Usage"
        value="12.4 GB"
        trend="-3%"
        trendUp={false}
        color="blue"
      />
      <MetricCard
        icon={<Clock className="w-8 h-8" />}
        title="Active Time"
        value="142h"
        trend="+24h"
        trendUp={true}
        color="pink"
      />
      <MetricCard
        icon={<Activity className="w-8 h-8" />}
        title="Active Instances"
        value="3"
        trend="0"
        trendUp={false}
        color="green"
      />
    </div>
  );
}