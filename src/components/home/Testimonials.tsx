import React from 'react';
import { TestimonialCard } from '../TestimonialCard';

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our customers are saying about Neo Clouds
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Dr. Sarah Chen"
            role="AI Research Lead"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
            quote="Neo Clouds has revolutionized our AI research. We've reduced our model training time by 90% and significantly improved our research output."
          />
          <TestimonialCard
            name="Michael Rodriguez"
            role="Game Developer"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
            quote="The GPU power from Neo Clouds allows us to iterate faster and create more immersive gaming experiences. It's a game-changer for indie developers."
          />
          <TestimonialCard
            name="David Kim"
            role="CTO, TechVision"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
            quote="Enterprise-grade security and unmatched performance. Neo Clouds has become an integral part of our development infrastructure."
          />
        </div>
      </div>
    </section>
  );
}