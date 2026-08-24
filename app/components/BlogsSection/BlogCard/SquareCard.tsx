import Image from "next/image";
import { BlogPost } from "../../../types/blog";

interface SquareCardProps {
  post: BlogPost;
}

export default function SquareCard({ post }: SquareCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer aspect-square">
      {/* Image */}
      <div className="relative h-2/3 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 h-1/3 flex flex-col justify-center dark:text-white tracking-tight leading-none font-cormorant font-thin font-sans tracking-wider">
        <h3 className="text-lg font-cormorant font-semibold text-gray-600 mb-2 text-center">
          {post.title}
        </h3>
        <div className="text-center">
          <span className="text-blue-300 text-sm font-cormorant font-medium">
            {post.category}
          </span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-gray-600 text-xs">by {post.author}</span>
        </div>
      </div>
    </div>
  );
}
