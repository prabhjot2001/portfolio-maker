import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="mt-20 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild variant={"default"}>
        <Link to="/" className="">
          <ArrowLeft /> Go Back Home
        </Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
