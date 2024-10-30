import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      
    </div>
  );
}