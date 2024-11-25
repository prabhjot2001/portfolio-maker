import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Timeline = () => {
  return (
    <div className="border rounded-xl p-4 pl-6 space-y-10">
      <TimelineCard />
      <TimelineCard />
    </div>
  );
};

export default Timeline;

const TimelineCard = () => {
  return (
    <div className="border-l relative">
      <img
        src={"https://github.com/shadcn.png"}
        alt={"Logo"}
        className="absolute -left-4 top-4 rounded-full object-contain w-10 aspect-square"
      />
      <div className="ml-8">
        {/* <--- Date goes here ---> */}
        <p className="text-xs text-muted-foreground"> Sep 2020 - Apr 2024</p>

        {/* <--- Heading ---> */}
        <div className="text-lg font-semibold">
          Random Institute of Technology & Sciences
        </div>
        {/* <--- Description ---> */}
        <p className="text-sm font-medium leading-none">
          B.Tech in Computer Science and Engineering
        </p>

        {/* <--- Points ---> */}
        <ul className="my-4 ml-6 list-disc text-sm">
          <li>Graduated with cumulative GPA 8.9</li>
          <li>Participated in Hackathon in 2023</li>
          <li>Relevant courses: DSA, OS, Computer Networking, TOC</li>
        </ul>

        {/* <--- Additional Links ---> */}

        <div>
          <Button asChild size={"sm"}>
            <Link to={""}>
              Source <Globe />{" "}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
