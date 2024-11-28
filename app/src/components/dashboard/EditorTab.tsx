import { Eye } from "lucide-react";
import Editor from "@/components/shared/Editor";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const EditorTab = () => {
  return (
    <div>
      <h3 className="text-lg font-medium font-primary mb-3">Home</h3>
      <div className="h-96">
        {/* // todo: here goes the dynamic component */}
        <Editor />
      </div>
      <div className="flex justify-end mt-4">
        <Button asChild variant={"default"} size={"sm"}>
          <Link to="/preview">
            See preview <Eye />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EditorTab;
