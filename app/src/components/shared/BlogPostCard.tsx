import { Link } from "react-router-dom";

const BlogPostCard = () => {
  const blogId = "sdafjlsf";
  return (
    <Link
      to={`blog/${blogId}`}
      className="border shadow-md rounded-xl p-8 pl-6 flex flex-col gap-4"
    >
      <h2 className="font-semibold text-lg leading-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        reiciendis?
      </h2>
      <p className="text-muted-foreground text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam
        consequuntur modi incidunt similique provident, nobis unde totam maxime
        sapiente.
      </p>
    </Link>
  );
};

export default BlogPostCard;
