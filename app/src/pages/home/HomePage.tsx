import PrimaryCard from "@/components/shared/PrimaryCard";
import Timeline from "@/components/shared/Timeline";
import Hero from "@/components/standAloneComponents/Hero";
import ProjectPage from "../project/ProjectPage";
import Projects from "@/components/standAloneComponents/Projects";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogPostCard from "@/components/shared/BlogPostCard";

const HomePage = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <SectionHeading>Experience</SectionHeading>
      <Timeline />
      <SectionHeading
        showAdditionalButton={true}
        buttonText="View more"
        buttonLink="/projects"
      >
        Projects
      </SectionHeading>
      <Projects />
      <SectionHeading>Recent posts</SectionHeading>
      <BlogPostCard />
    </div>
  );
};

export default HomePage;
