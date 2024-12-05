import { Button } from "@/components/ui/button";
import { ArrowDownRight, FileText, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import NamePronounciation from "@/assets/audio/prabhjot.m4a";
import MyImage from "@/assets/images/dp1.png";
import { useRef, useState } from "react";
import Map from "@/components/map/Map";
import Modal from "@/components/shared/Modal";
import TooltipWrapper from "../shared/TooltipWrapper";
import { socialLinks } from "@/Data/social-links";

const Hero = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <section className="flex flex-col items-start md:flex-row-reverse md:items-center justify-between gap-10 ">
        {/* <--- Image ---> */}
        <div>
          <img
            src={
              MyImage
              // ""
            }
            alt="prabhjot"
            className="w-56 aspect-square rounded-xl transform scale-x-[1]"
          />
        </div>
        {/* <--- Hero section ---> */}
        <div>
          <h1 className="font-primary scroll-m-20 text-4xl font-medium tracking-normal lg:text-5xl flex items-center gap-2 flex-wrap">
            hi prabhjot{" "}
            <TooltipWrapper message="Listen pronunciation" side={"top"}>
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
              <TooltipWrapper message="Click to see location on map" side="top">
                <span onClick={handleOpenModal} className="underline ">
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
              <TooltipWrapper message={link.link} side={"top"}>
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
