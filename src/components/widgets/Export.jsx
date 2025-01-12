import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import topTost from "@/utils/topTost";

const Export = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files[0];
    if (
      file &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setUploadedFile(file); // Do not close modal here, just set the file
    } else {
      topTost("error", "Please upload a valid Excel file (.xlsx)");
    }
  };

  const handleFileDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleFileDragLeave = () => {
    setDragOver(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setUploadedFile(file);
    } else {
      alert("Please upload a valid Excel file (.xlsx)");
    }
  };

  const handleSubmit = () => {
    if (uploadedFile) {
      // Add your file processing or server upload logic here
      topTost("success", `${uploadedFile.name} uploaded successfully`);
      setUploadedFile(null); // Reset the uploaded file after submission
      setIsModalVisible(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <CButton color="primary" onClick={() => setIsModalVisible(true)}>
        Export
      </CButton>

      {/* Modal */}
      <CModal
        alignment="top"
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <CModalHeader className="p-3">Upload Excel File</CModalHeader>
        <CModalBody className="py-4">
          <div
            onDragOver={handleFileDragOver}
            onDragLeave={handleFileDragLeave}
            onDrop={handleFileDrop}
            style={{
              border: dragOver ? "2px dashed #0d6efd" : "2px dashed #ccc",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              backgroundColor: dragOver ? "#e7f3ff" : "#f9f9f9",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {dragOver ? (
              <p>Drop your Excel file here</p>
            ) : (
              <p>
                Drag and drop your Excel file here, or{" "}
                <span style={{ color: "#0d6efd", textDecoration: "underline" }}>
                  click to upload
                </span>
              </p>
            )}
            <input
              type="file"
              accept=".xlsx"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
              onChange={handleFileSelect}
            />
          </div>

          {/* Display uploaded file name */}
          {uploadedFile && (
            <div className="mt-3">
              <strong>Uploaded File: &nbsp;</strong>
              <img
                src="https://icon2.cleanpng.com/20180206/vkw/avinwktl5.webp"
                alt="Excel Logo"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              {uploadedFile.name}
            </div>
          )}
        </CModalBody>
        <CModalFooter className="p-3">
          <CButton
            color="primary"
            onClick={handleSubmit}
            disabled={!uploadedFile}
          >
            Submit Upload
          </CButton>
          <CButton color="secondary" onClick={() => setIsModalVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Export;
