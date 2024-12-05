import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Experience from "./Experience";
import Education from "./Education";

const ExpEdu = () => {
  return (
    <div className="">
      <Tabs
        defaultValue="experience"
        className="flex flex-col items-center justify-center mx-auto"
      >
        <TabsList className="w-full">
          <TabsTrigger value="experience" className="w-full">
            experience
          </TabsTrigger>
          <TabsTrigger value="education" className="w-full">
            education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="w-full">
          <Experience />
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <Education />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExpEdu;
