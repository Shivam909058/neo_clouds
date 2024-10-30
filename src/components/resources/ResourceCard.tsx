import React, { ReactNode } from 'react';

interface ResourceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function ResourceCard({ icon, title, description, link }: ResourceCardProps) {
  return (
    <a
      href={link}
      className="block bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
}