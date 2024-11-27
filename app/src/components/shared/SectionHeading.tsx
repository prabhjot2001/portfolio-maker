import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type SectionHeadingProps = {
  children: string;
  showAdditionalButton?: boolean;
  buttonLink?: string;
  buttonText?: string;
};

const SectionHeading = ({
  children,
  showAdditionalButton = false,
  buttonLink = "",
  buttonText,
}: SectionHeadingProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="bg-secondar rounded-md py-1 px-2 inline-block">
        <h2 className="font-medium text-2xl font-primary">{children}</h2>
      </div>
      {showAdditionalButton && (
        <Button
          variant={"link"}
          className="text-muted-foreground hover:text-accent-foreground"
        >
          <Link to={buttonLink}>{buttonText}</Link>
          <ArrowRight className="w-4" />
        </Button>
      )}
    </div>
  );
};

export default SectionHeading;
