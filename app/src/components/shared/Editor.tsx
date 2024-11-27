import { useRef, useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { PreviewContext } from "@/context/previewContext";

const Editor = () => {
  const quillRef = useRef(null);
  const { previewContent, setPreviewContent } = useContext(PreviewContext);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const handleChange = (value: string) => {
    setPreviewContent(value);
  };

  return (
    <div className="">
      {/* Toolbar container */}
      <div className="">
        <ReactQuill
          theme="snow"
          ref={quillRef}
          modules={modules}
          placeholder="Write your thoughts..."
          value={previewContent}
          onChange={handleChange}
          className="h-72"
        />
      </div>
    </div>
  );
};

export default Editor;
