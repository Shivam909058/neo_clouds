import React from 'react';

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export default function BlogPreview({ title, excerpt, date, author, image }: BlogPreviewProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{author}</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}