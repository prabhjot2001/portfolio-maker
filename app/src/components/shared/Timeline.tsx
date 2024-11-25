import { Link } from "react-router-dom";
import { Code2, Globe } from "lucide-react";
import { link } from "fs";
import { url } from "inspector";

const timelineData = [
  {
    imgUrl: "https://github.com/shadcn.png",
    date: "Sep 2020 - Apr 2024",
    title: "Random Institute of Technology & Sciences",
    description: "B.Tech in Computer Science and Engineering",
    bullet_points: [
      "Graduated with cumulative GPA 8.9",
      " Participated in Hackathon in 2023",
      "Relevant courses: DSA, OS, Computer Networking, TOC",
    ],
    links: [
      {
        link: "project",
        url: "random",
        icon: <Code2 className="w-3" />,
      },
      {
        link: "source",
        url: "random2",
        icon: <Globe className="w-3" />,
      },
      {
        link: "source",
        url: "random2",
        icon: <Globe className="w-3" />,
      },
      {
        link: "source",
        url: "random2",
        icon: <Globe className="w-3" />,
      },
    ],
  },
];

const Timeline = () => {
  return (
    <div className="border rounded-xl p-4 pl-6 space-y-10">
      <TimelineCard data={timelineData} />
    </div>
  );
};

export default Timeline;

type LinkType = {
  link: string;
  url: string;
  icon: React.ReactNode;
};

type CardType = {
  imgUrl: string;
  date: string;
  title: string;
  description: string;
  bullet_points: string[];
  links: LinkType[];
};

type TimelineCardProps = {
  data: CardType[];
};

const TimelineCard = ({ data }: TimelineCardProps) => {
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className="border-l relative">
          <img
            src={item.imgUrl}
            alt={"Logo"}
            className="absolute -left-4 top-4 rounded-full object-contain w-10 aspect-square"
          />
          <div className="ml-8">
            {/* <--- Date goes here ---> */}
            <p className="text-xs text-muted-foreground">{item.date}</p>

            {/* <--- Heading ---> */}
            <div className="text-lg font-semibold">{item.title}</div>
            {/* <--- Description ---> */}
            <p className="text-sm font-medium text-muted-foreground leading-none">
              {item.description}
            </p>

            {/* <--- Bullet Points ---> */}
            <ul className="my-4 ml-6 list-disc text-sm">
              {item.bullet_points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* <--- Additional Links go here ---> */}

            <div className="flex flex-wrap gap-2">
              {item.links.map((link, idx) => (
                <span
                  key={idx}
                  className="bg-primary text-secondary text-xs font-medium flex items-center gap-2 max-w-max max-h-max px-2 rounded-md"
                >
                  {link.icon}
                  <Link className="" to={link.url}>
                    {link.link}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
