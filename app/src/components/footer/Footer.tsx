import { socialLinks } from "@/Data/social-links";
import { Link } from "react-router-dom";
import TooltipWrapper from "@/components/shared/TooltipWrapper";

const Footer = () => {
  const date = new Date();
  return (
    <div className="flex items-center justify-between mt-20 mb-32">
      <p className="text-sm text-muted-foreground">
        &copy; {date.getFullYear()}{" "}
        <Link to={"/"} className="hover:text-primary">
          prabhjot.dev
        </Link>
        {" | "}
        <Link to={"/privacy"} className="font-medium hover:text-primary">
          privacy?
        </Link>
      </p>

      <div className="flex items-center gap-4">
        {socialLinks.map((link, idx) => (
          <TooltipWrapper key={idx} message={link.link} side={"top"}>
            <Link
              key={idx}
              target="_blank"
              to={link.url}
              className="text-muted-foreground"
            >
              {link.icon}
            </Link>
          </TooltipWrapper>
        ))}
      </div>
    </div>
  );
};

export default Footer;
