import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../app/blog/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'sidebar';
}

export default function BlogCard({ 
  post, 
  variant = 'default' 
}: BlogCardProps) {
  if (variant === 'sidebar') {
    return (
      <div className="mb-4 pb-4 border-b last:border-b-0">
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-lg hover:text-primary font-semibold"
        >
          {post.title}
        </Link>
        <div className="text-gray-600 text-sm">
          <span>{post.author}</span> | <span>{post.date}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <Image 
        src={post.image} 
        alt={post.title}
        width={800}
        height={400}
        className="w-full object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4 text-gray-600">
          <span className="mr-4">{post.author}</span>
          <span className="mr-4">{post.date}</span>
          <span className="font-semibold text-primary">{post.category}</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <Link 
          href={`/blog/${post.slug}`} 
          className="inline-block bg-[#F9F1E7] hover:bg-[#B88E2F] text-black hover:text-white px-4 py-2 rounded transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}