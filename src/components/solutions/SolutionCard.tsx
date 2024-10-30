import React, { ReactNode } from 'react';

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function SolutionCard({ icon, title, description, features }: SolutionCardProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
      <div className="text-purple-400 mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400">• {feature}</li>
        ))}
      </ul>
    </div>
  );
}