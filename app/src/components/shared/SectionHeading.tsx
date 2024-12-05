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
      <div className="bg-secondar rounded-md inline-block underline decoration-wavy underline-offset-2 bg-clip-text text-transparent bg-secondary-foreground">
        <h2 className="font-semibold text-2xl font-primary">{children}</h2>
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
