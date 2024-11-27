import { createContext, useState } from "react";

export const PreviewContext = createContext("");

const PreviewContextProvider = ({ children }) => {
  const [previewContent, setPreviewContent] = useState("");
  return (
    <PreviewContext.Provider value={{ previewContent, setPreviewContent }}>
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewContextProvider;