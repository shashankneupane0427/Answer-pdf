import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Hero() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPdf();

        
        navigate("/Summary");
      } else {
        alert("File upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during upload.");
    }
  };

  return (
    <section
      style={{
        width: "100vw",
        height: "80vh",
        backgroundColor: "#7C89CA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0",
        margin: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
          padding: "30px 20px",
          width: "50%",
          height: "50%",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          overflow: "hidden",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="hover-container"
      >
        <span className="line top"></span>
        <span className="line right"></span>
        <span className="line bottom"></span>
        <span className="line left"></span>

        <form className="formStyle" onSubmit={submitImage}>
          <h4>Upload PDF in React</h4>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: "10px",
              width: "90%",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <br />
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              padding: "10px",
              width: "90%",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              cursor: "pointer",
            }}
          />
          <br />
          <button
            className="btn btn-primary"
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </form>
        <p
          style={{
            fontSize: "20px",
            color: "white",
            lineHeight: "1.5",
          }}
        >
          Remember everything and tackle any project with your notes, tasks, and
          schedule all in one place.
        </p>
      </div>

      <style>
        {`
                .hover-container {
                    position: relative;
                    overflow: hidden;
                }
                .hover-container .line {
                    position: absolute;
                    background-color: #007BFF;
                    transition: transform 0.4s ease;
                }
                .hover-container .line.top,
                .hover-container .line.bottom {
                    height: 2px;
                    width: 100%;
                    left: 0;
                }
                .hover-container .line.top {
                    top: 0;
                    transform: scaleX(0);
                }
                .hover-container .line.bottom {
                    bottom: 0;
                    transform: scaleX(0);
                }
                .hover-container .line.left,
                .hover-container .line.right {
                    width: 2px;
                    height: 100%;
                    top: 0;
                }
                .hover-container .line.left {
                    left: 0;
                    transform: scaleY(0);
                }
                .hover-container .line.right {
                    right: 0;
                    transform: scaleY(0);
                }
                .hover-container:hover .line.top,
                .hover-container:hover .line.bottom {
                    transform: scaleX(1);
                }
                .hover-container:hover .line.left,
                .hover-container:hover .line.right {
                    transform: scaleY(1);
                }
                `}
      </style>
    </section>
  );
}

export default Hero;