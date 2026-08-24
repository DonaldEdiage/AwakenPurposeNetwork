import Image from "next/image";
import { BlogPost } from "../../../types/blog";

interface RectangleCardProps {
  post: BlogPost;
}

export default function RectangleCard({ post }: RectangleCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 font-light text-gray-600 dark:text-white tracking-tight leading-none font-cormorant font-thin font-sans tracking-wider">
          <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-cormorant font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 font-light text-gray-600 dark:text-white tracking-tight leading-none font-cormorant font-thin font-sans tracking-wider">
        <h3 className="text-xl font-cormorant font-semibold text-gray-600 mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex justify-between items-center text-xs text-gray-600">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}
