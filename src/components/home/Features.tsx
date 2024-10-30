import React from 'react';
import { Cpu, Zap, Shield, Boxes } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Supercharge Your Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Access enterprise-grade GPU power for all your computational needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Cpu className="w-12 h-12 text-purple-400" />}
            title="High-Performance GPUs"
            description="Access the latest NVIDIA GPUs for maximum performance in AI training and rendering."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-purple-400" />}
            title="Instant Scaling"
            description="Scale your computational power up or down instantly based on your needs."
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-purple-400" />}
            title="Enterprise Security"
            description="Bank-grade encryption and security protocols to keep your data safe."
          />
          <FeatureCard
            icon={<Boxes className="w-12 h-12 text-purple-400" />}
            title="Flexible Integration"
            description="Easy integration with popular tools and frameworks via our robust API."
          />
        </div>
      </div>
    </section>
  );
}