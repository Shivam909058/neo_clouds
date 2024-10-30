import React from 'react';
import { Brain, Code, Gamepad2, Workflow } from 'lucide-react';
import SolutionCard from '../components/solutions/SolutionCard';
import PerformanceComparison from '../components/solutions/PerformanceComparison';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Cloud Solutions
        </h1>
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          Discover how Neo Clouds can transform your workflow with our powerful GPU-accelerated solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <SolutionCard
            icon={<Brain className="w-12 h-12" />}
            title="AI & Machine Learning"
            description="Train models up to 1000x faster with our optimized GPU clusters. Perfect for deep learning, neural networks, and AI research."
            features={[
              'Distributed Training',
              'Model Optimization',
              'Neural Network Processing',
              'Real-time Inference'
            ]}
          />
          <SolutionCard
            icon={<Code className="w-12 h-12" />}
            title="Development & Rendering"
            description="Accelerate your development workflow with powerful GPU resources for 3D rendering, video processing, and more."
            features={[
              '3D Rendering',
              'Video Processing',
              'Batch Processing',
              'Real-time Preview'
            ]}
          />
          <SolutionCard
            icon={<Gamepad2 className="w-12 h-12" />}
            title="Cloud Gaming"
            description="Build and test games with enterprise-grade GPU power. Perfect for game development and testing."
            features={[
              'Game Development',
              'Physics Simulation',
              'Asset Creation',
              'Performance Testing'
            ]}
          />
          <SolutionCard
            icon={<Workflow className="w-12 h-12" />}
            title="Enterprise Solutions"
            description="Custom GPU solutions for enterprise needs, with dedicated support and scalable infrastructure."
            features={[
              'Custom Deployments',
              'Priority Support',
              'Dedicated Resources',
              'Security Compliance'
            ]}
          />
        </div>

        <PerformanceComparison />
      </div>
    </div>
  );
}