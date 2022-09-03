import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import FileSaver from 'file-saver';
export const CourseBackpack = () => {
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState('')
  const [semester, setSemester] = useState('')
  const [response, setResponse] = useState('')
  const [courseId, setCourseId] = useState('')

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("file", file);
    formData.append("courseId",courseId)
    formData.append("semester",semester)
    axios
      .post(process.env.REACT_APP_NODEJS_URL + "/file", formData)
      .then((res) => {
        alert("File uploaded successfully");
      });
  };
  // const handleDownload = (e) => {
  //   e.preventDefault();
	// 	axios({
	// 		method: "GET",
	// 		url: process.env.REACT_APP_NODEJS_URL+"/file",
	// 		responseType: "blob",
	// 		params: {
  //       'file': filename,
  //       'courseId': courseId,
  //       'semester':semester
	// 		}
	// 	}).then(res => {
	// 			FileSaver.saveAs(res.data, filename);
	// 	}).then(() => {
	// 		alert("File Downloading Completed");
	// 	});
  // };

  return (
    <><div style={{ backgroundColor: '', width: '100%', height: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody style={{ width: '100%' }}>
          <tr class='tdVal' style={{ display: 'flex' }}>
            <td style={{ flex: '1' }}><label>Course Id:</label></td>
            <td style={{ flex: '1' }}>
              <div class="">
                <label for="" class="form-label">
                  <input type="text" onChange={(e) => setCourseId(e.target.value)} class="form-control" />
                </label>
              </div>
            </td>
          </tr>
          <tr class='tdVal' style={{ display: 'flex' }}>
            <td style={{ flex: '1' }}><label>Semester:</label></td>
            <td style={{ flex: '1' }}>
              <div class="">
                <label for="" class="form-label">
                  <input type="text" onChange={(e) => setSemester(e.target.value)} class="form-control" />
                </label>
              </div>
            </td>
          </tr>
          <tr class='tdVal' style={{ display: 'flex' }}>
            <td style={{ flex: '1' }}>
              <label>
                <input
                  type="file"
                  name=""
                  id="file_id"
                  onChange={(e) => {
                    setFilename(e.target.files[0].name);
                    setFile(e.target.files[0]);
                  } }
                  required /> 
              </label>
            </td>
            <td style={{ flex: '1' }}>
              <div>
                <Button type="submit" onClick={(e) => handleUpload(e)}>Upload</Button>
                {/* <Button type="submit" onClick={(e) => handleDownload(e)}>Download</Button> */}
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div></>
  );
};
