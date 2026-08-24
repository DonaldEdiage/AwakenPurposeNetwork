import { BlogPost } from "../../types/blog";
import RectangleCard from "./BlogCard/RectangleCard";
import SquareCard from "./BlogCard/SquareCard";
import CircularCard from "./BlogCard/CircularCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  // The posts are already defined with different shapes in our data
  // They will display in the order they appear in the array
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        switch (post.shape) {
          case "rectangle":
            return <RectangleCard key={post.id} post={post} />;
          case "square":
            return <SquareCard key={post.id} post={post} />;
          case "circular":
            return <CircularCard key={post.id} post={post} />;
          default:
            return <RectangleCard key={post.id} post={post} />;
        }
      })}
    </div>
  );
}
