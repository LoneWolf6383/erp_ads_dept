import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import FileSaver from 'file-saver';
export const CourseBackpack = () => {
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState('')
  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("file", file);
    console.log(formData);
    axios
      .post(process.env.REACT_APP_NODEJS_URL + "/file", formData)
      .then((res) => {
        alert("File uploaded successfully");
      });
  };
  const handleDownload = (e) => {
    e.preventDefault();
		axios({
			method: "GET",
			url: process.env.REACT_APP_NODEJS_URL+"/file",
			responseType: "blob",
			params: {
				'file': filename
			}
		}).then(res => {
				FileSaver.saveAs(res.data, filename);
		}).then(() => {
			alert("File Downloading Completed");
		});
  };

  return (
    <div>
      <input
        type="file"
        name=""
        id="file_id"
        onChange={(e) => {
          setFilename(e.target.files[0].name)
          setFile(e.target.files[0])
        }}
        required
      />
      <Button type="submit" onClick={(e)=>handleUpload(e)}>Upload</Button>
      <Button type="submit" onClick={(e)=>handleDownload(e)}>Download</Button>
    </div>
  );
};
