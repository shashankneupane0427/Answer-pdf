import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Summary.css";

const Summary = ({ userName }) => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const MAX_FILE_SIZE = 50 * 1024 * 1024;

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      setFiles(result.data.data || []);
    } catch (error) {
      console.error("Error fetching files:", error);
      alert("Failed to fetch files. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length > 0) {
      const selectedFile = selectedFiles[0];

      if (selectedFile.size > MAX_FILE_SIZE) {
        alert("File size exceeds the 50 MB limit. Please select a smaller file.");
        return;
      }

      setFile(selectedFile);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-upload").click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector(".upload-section").classList.add("drag-over");
  };

  const handleDragLeave = () => {
    document.querySelector(".upload-section").classList.remove("drag-over");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector(".upload-section").classList.remove("drag-over");

    const droppedFiles = Array.from(event.dataTransfer.files);
    if (droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];

      if (droppedFile.size > MAX_FILE_SIZE) {
        alert("File size exceeds the 50 MB limit. Please select a smaller file.");
        return;
      }

      setFile(droppedFile);
    }
  };

  const submitFile = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setProgress(0);

    try {
      const result = await axios.post("http://localhost:5000/upload-files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded * 100) / event.total);
          setProgress(percent);
        },
      });

      if (result.data.status === "ok") {
        alert("Uploaded Successfully!");
        fetchFiles();
        setFile(null);
      } else {
        alert("File upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during upload.");
    } finally {
      setLoading(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const logout = () => {
    alert("Logging out...");
  };

  return (
    <div className="summary-container">
      {/* Header Section */}
      <header className="summary-header">
        <div className="logo">
          <img
            src="https://via.placeholder.com/100x50?text=Logo"
            alt="Easy Notes Logo"
          />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-actions">
          <button className="upgrade-button">
            <i className="fas fa-rocket"></i> Upgrade
          </button>
          <div className="profile-container" onClick={toggleDropdown}>
            <div className="profile-button">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="profile-image"
              />
              <span className="profile-name">{userName}</span>
              <i
                className={`fas fa-chevron-down dropdown-icon ${
                  dropdownOpen ? "open" : ""
                }`}
              ></i>
            </div>
            {dropdownOpen && (
              <div className="profile-dropdown">
                <ul>
                  <li onClick={() => navigate("/profile")}>
                    <i className="fas fa-user"></i> My Profile
                  </li>
                  <li onClick={() => navigate("/settings")}>
                    <i className="fas fa-cog"></i> Settings
                  </li>
                  <li onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="summary-main">
        <div
          className="upload-section"
          onClick={triggerFileInput}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="upload-icon-wrapper">
            <i className="fas fa-upload upload-icon"></i>
          </div>
          <p>
            Drag and Drop, <span className="highlight">Upload a file</span> or a{" "}
            <span className="highlight">URL</span>
          </p>
          <p className="file-types">PDF, DOCX, DOC, PPTX, PPT, or TXT</p>
          <input
            type="file"
            id="file-upload"
            accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </div>
        {loading && (
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        {file && (
          <div className="file-thumbnails">
            <div className="thumbnail">
              <img
                src="https://via.placeholder.com/100"
                alt={file.name}
                className="file-icon"
              />
              <span>{file.name}</span>
            </div>
          </div>
        )}
        <form onSubmit={submitFile} className="file-form">
          <button
            type="submit"
            disabled={loading || !file}
            className="submit-button"
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Uploading...
              </>
            ) : (
              <>
                <i className="fas fa-cloud-upload-alt"></i> Submit
              </>
            )}
          </button>
        </form>

        {/* Files List */}
        <div className="file-list">
          <h3>
            <i className="fas fa-folder-open"></i> All Files
          </h3>
          {files.length === 0 ? (
            <p>No files uploaded yet.</p>
          ) : (
            <table className="desktop-view">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date Created</th>
                  <th>Uploaded By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="file-row">
                    <td>{file.title}</td>
                    <td>{file.date}</td>
                    <td>Admin</td>
                    <td className="file-actions">
                      <i className="fas fa-eye action-icon"></i>
                      <i className="fas fa-pencil-alt action-icon"></i>
                      <i className="fas fa-comment action-icon"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default Summary;
