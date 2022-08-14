import { Button } from "@mui/material";
import React, { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export const CourseBackpack = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];

  const handleUpload = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("Select you file");
    }
  };
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) setViewPdf(pdfFile);
    else setViewPdf(null);
  };

  return (
    <div>
      <form action="" onSubmit={handlePdfFileSubmit}>
        <input
          type="file"
          name=""
          id="file_id"
          onChange={handleUpload}
          required
        />
        <Button type="submit">Upload</Button>
        {pdfFileError}
      </form>
    </div>
  );
};
