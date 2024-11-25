import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Volume2,
} from "lucide-react";
import { Link } from "react-router-dom";
import NamePronounciation from "@/assets/audio/prabhjot.m4a";
// import MyImage from "@/assets/images/prabhjot1.jpg";
import { useRef, useState } from "react";
import Map from "@/components/map/Map";
import Modal from "@/components/shared/Modal";
import TooltipWrapper from "../shared/TooltipWrapper";

const Hero = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const socialLinks = [
    {
      icon: <Github className="w-5" />,
      link: "Github",
      url: "https://github.com/prabhjot2001",
    },
    {
      icon: <Linkedin className="w-5" />,
      link: "Linkedin",
      url: "https://www.linkedin.com/in/prabhjot-singh001",
    },
    {
      icon: <Mail className="w-5" />,
      link: "Email",
      url: "prabhjot1671@gmail.com",
    },
  ];
  return (
    <div>
      <section className="flex flex-col items-start md:flex-row-reverse md:items-center justify-between gap-10 ">
        {/* <--- Image ---> */}
        <div>
          <img
            src={
              "https://pics.craiyon.com/2024-09-10/AjZTcBIkTKmxYYo1v707RQ.webp"
            }
            alt="prabhjot"
            className="w-56 aspect-square rounded-xl transform scale-x-[1] hover:border-2 border-amber-500"
          />
        </div>
        {/* <--- Hero section ---> */}
        <div>
          <h1 className="font-primary scroll-m-20 text-4xl font-medium tracking-normal lg:text-5xl flex items-center gap-2 flex-wrap">
            hi prabhjot{" "}
            <TooltipWrapper message="Listen pronunciation">
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => {
                  audioRef?.current?.play();
                }}
              >
                <Volume2 />
              </Button>
            </TooltipWrapper>{" "}
            <audio ref={audioRef} src={NamePronounciation} />
            here <WavingHand />
          </h1>

          <div className="space-y-2 mt-6">
            <p className="">
              23-year-old software developer from{" "}
              <TooltipWrapper message="Click to see the on map">
                <span onClick={handleOpenModal} className="hover:underline">
                  India.
                </span>
              </TooltipWrapper>
            </p>

            <p className="">
              I like to develop full-stack, drink instant coffee and get coding
              advice from my cat,{" "}
              <Link to={"/leo"} className="font-semibold hover:underline">
                Leo
              </Link>
              .
            </p>

            <p className="font-semibold">
              Ask the chatbot anything about me{" "}
              <span className="inline-block font-semibold relative">
                <ArrowDownRight className="w-4 max-h-max animate-bounce absolute -top-3" />
              </span>
            </p>
          </div>

          <div className="flex gap-6 items-center mt-6">
            <TooltipWrapper message="Download resume">
              <Button variant={"outline"}>
                Resume <FileText />
              </Button>
            </TooltipWrapper>
            {socialLinks.map((link, idx) => (
              <TooltipWrapper message={link.link}>
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

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <Map />
        </Modal>
      </section>
    </div>
  );
};

export default Hero;

const WavingHand = () => {
  return (
    <div className="inline-block hover:animate-[wave_0.7s_ease-in-out_infinite] origin-[70%_70%]">
      👋
    </div>
  );
};
