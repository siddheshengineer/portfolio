import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: '1', title: 'My First Post', excerpt: 'Introductory thoughts on cloud automation...' },
  { id: '2', title: 'Deep Dive into SRE', excerpt: 'Exploring reliability engineering best practices...' },
  // Add more posts here or fetch from an API
];

const BlogList = () => (
  <section className="pt-24 pb-12 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              <Link to={`/blog/${post.id}`} className="hover:text-green-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="block mt-4 text-green-600 hover:underline">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogList;