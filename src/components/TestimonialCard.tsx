import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-colors">
      <Quote className="w-8 h-8 text-purple-400 mb-4" />
      <p className="text-gray-300 mb-6">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}