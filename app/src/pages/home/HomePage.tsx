import Timeline from "@/components/shared/Timeline";
import Hero from "@/components/standAloneComponents/Hero";

const HomePage = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <div className="bg-secondary rounded-md py-1 px-2 inline-block">
        <h2 className="font-bold text-xl">Experience</h2>
      </div>
      <Timeline />
    </div>
  );
};

export default HomePage;
