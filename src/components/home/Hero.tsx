import React from 'react';
import { CircuitBoard, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-glow"></div>
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <CircuitBoard className="w-20 h-20 text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unleash the Power
            </span>
            <br />
            of Cloud Computing
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Access unlimited GPU power for AI training, rendering, and gaming. Transform your workflow with Neo Clouds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors inline-flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}