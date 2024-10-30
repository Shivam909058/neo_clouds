import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({ title, price, features, highlighted = false }: PricingCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl p-8 h-full
        ${highlighted
          ? 'bg-gradient-to-b from-purple-900/50 to-blue-900/50 border-2 border-purple-500/50 transform hover:-translate-y-2'
          : 'bg-gray-800/50 border border-gray-700 transform hover:-translate-y-1'
        }
        transition-all duration-300
      `}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`
          w-full py-3 px-6 rounded-lg font-semibold
          ${highlighted
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            : 'bg-gray-700 hover:bg-gray-600'
          }
          transition-colors
        `}
      >
        Get Started
      </button>
    </div>
  );
}