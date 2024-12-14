import Link from 'next/link';
import { categories } from '../app/blog/data/blogPosts';

export default function BlogCategories() {
  return (
    <div className="border p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-6">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="flex justify-between text-gray-700 hover:text-primary cursor-pointer"
          >
            <Link href={`/blog/category/${category.name.toLowerCase()}`}>
              {category.name}
            </Link>
            <span>({category.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}