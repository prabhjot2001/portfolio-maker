import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div>
      <Button variant={"link"}>
        <ArrowLeft />
        <Link to={"/blog"}>back to blog</Link>
      </Button>

      <div className="mt-10">
        <img
          src="https://tedawf.com/_next/image?url=%2Ftedawf-com.png&w=1920&q=75"
          alt="image"
        />
      </div>
      <div className="mt-16">
        <h1 className="scroll-m-20 font-primary text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iusto.
        </h1>
        <p className="text-sm text-muted-foreground mt-6">September 27, 2024</p>
      </div>
      <div className="mt-10 text-muted-foreground leading-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        error veniam in rerum culpa, blanditiis quis quidem sunt nulla ullam,
        odit quae quas nobis totam voluptates aperiam, ut omnis. Exercitationem.
      </div>
    </div>
  );
};

export default Blog;
