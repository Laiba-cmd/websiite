import BlogCard from './BlogCard';
import { blogPosts } from "../app/blog/data/blogPosts"

export default function RecentPosts() {
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <div className="border p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
      {recentPosts.map((post) => (
        <BlogCard key={post.id} post={post} variant="sidebar" />
      ))}
    </div>
  );
}