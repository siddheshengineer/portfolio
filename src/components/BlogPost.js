import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = {
  '1': {
    title: 'My First Post',
    content: `
      <p>This is the full content of my first post on cloud automation.</p>
      <p>More detailed paragraphs go here.</p>
    `,
  },
  '2': {
    title: 'Deep Dive into SRE',
    content: `
      <p>Reliability engineering is crucial for modern systems...</p>
      <ul>
        <li>Define SLIs, SLOs, SLAs</li>
        <li>Automate alerting and incident response</li>
      </ul>
    `,
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return (
      <div className="pt-24">
        <p className="text-gray-700">Post not found.</p>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <article className="prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/blog" className="mt-8 inline-block text-green-600 hover:underline">← Back to Blog</Link>
      </div>
    </section>
  );
};

export default BlogPost;