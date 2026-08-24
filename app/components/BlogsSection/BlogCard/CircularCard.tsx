import Image from "next/image";
import { BlogPost } from "../../../types/blog";

interface CircularCardProps {
  post: BlogPost;
}

export default function CircularCard({ post }: CircularCardProps) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      {/* Circular Image Container */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-purple-600 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 rounded-full" /> */}
      </div>

      {/* Content */}
      <div className="text-center font-light text-gray-600 dark:text-white tracking-tight leading-none font-cormorant font-thin font-sans tracking-wider">
        <h3 className="font-cormorant font-semibold text-gray-600 mb-1 text-lg">
          {post.category}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{post.title}</p>
        <div className="text-xs text-gray-600">{post.readTime}</div>
      </div>
    </div>
  );
}
