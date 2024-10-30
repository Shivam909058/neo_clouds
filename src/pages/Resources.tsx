import React from 'react';
import { Book, FileText, Video, Users } from 'lucide-react';
import BlogPreview from '../components/resources/BlogPreview';
import ResourceCard from '../components/resources/ResourceCard';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Resources
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ResourceCard
            icon={<Book />}
            title="Documentation"
            description="Comprehensive guides and API documentation"
            link="/docs"
          />
          <ResourceCard
            icon={<Video />}
            title="Tutorials"
            description="Step-by-step video tutorials and demos"
            link="/tutorials"
          />
          <ResourceCard
            icon={<FileText />}
            title="Case Studies"
            description="Real-world success stories and implementations"
            link="/case-studies"
          />
          <ResourceCard
            icon={<Users />}
            title="Community"
            description="Join our developer community and forums"
            link="/community"
          />
        </div>

        <h2 className="text-3xl font-bold mb-8">Latest from our Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPreview
            title="Optimizing AI Training with GPU Clusters"
            excerpt="Learn how to leverage Neo Clouds GPU clusters for optimal AI model training performance."
            date="2024-03-15"
            author="Dr. Sarah Chen"
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400"
          />
          <BlogPreview
            title="The Future of Cloud Gaming"
            excerpt="Exploring how cloud GPU technology is revolutionizing the gaming industry."
            date="2024-03-10"
            author="Michael Rodriguez"
            image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400"
          />
          <BlogPreview
            title="Enterprise GPU Solutions"
            excerpt="How enterprises are scaling their operations with cloud GPU infrastructure."
            date="2024-03-05"
            author="David Kim"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400"
          />
        </div>
      </div>
    </div>
  );
}