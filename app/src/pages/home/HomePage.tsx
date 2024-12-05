import PrimaryCard from "@/components/shared/PrimaryCard";
import Timeline from "@/components/shared/Timeline";
import Hero from "@/components/standAloneComponents/Hero";
import ProjectPage from "../project/ProjectPage";
import Projects from "@/components/standAloneComponents/Projects";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogPostCard from "@/components/shared/BlogPostCard";
import ExpEdu from "@/components/standAloneComponents/ExpEdu";

const HomePage = () => {
  return (
    <div className="space-y-10 pb-20">
      <Hero />
      <SectionHeading>{""}</SectionHeading>
      <ExpEdu />
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
