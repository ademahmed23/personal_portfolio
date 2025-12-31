import BlogCard from "../components/BlogCard";
import WrapCard from "../components/WrapCard";
import { blogs } from "../constants/blog";

const Blog = () => {
  return (
    <section id="blog" className="py-12 px-4 bg-background">
      <div className="mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Blog</h2>
        <p className="text-gray-600 text-center mt-2">
          Read my latest thoughts and tutorials.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {blogs.map((blog, index) => (
            <WrapCard key={index}>
              <BlogCard blog={blog} />
            </WrapCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;