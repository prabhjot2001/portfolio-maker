import { PreviewContext } from "@/context/previewContext";
import { useContext } from "react";

const PreviewPage = () => {
  const { previewContent, setPreviewContent } = useContext(PreviewContext);
  return (
    <div>
      <h3 className="text-lg font-medium font-primary mb-2">Preview :</h3>
      {previewContent.length > 0 ? (
        <div
          dangerouslySetInnerHTML={{ __html: previewContent }}
          className=""
        ></div>
      ) : (
        <p>No preview to show</p>
      )}
    </div>
  );
};

export default PreviewPage;
