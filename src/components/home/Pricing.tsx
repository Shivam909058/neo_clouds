import React from 'react';
import { PricingCard } from '../PricingCard';

export default function Pricing() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include unlimited access to our GPU infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="49"
            features={[
              '4 GPU Hours/month',
              'Basic Support',
              'Standard Security',
              'API Access'
            ]}
          />
          <PricingCard
            title="Professional"
            price="199"
            features={[
              '20 GPU Hours/month',
              'Priority Support',
              'Advanced Security',
              'API Access',
              'Custom Integrations'
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="499"
            features={[
              'Unlimited GPU Hours',
              '24/7 Support',
              'Enterprise Security',
              'Custom API Solutions',
              'Dedicated Account Manager'
            ]}
          />
        </div>
      </div>
    </section>
  );
}