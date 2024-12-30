import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Hero() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

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
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
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
          <h4>Upload Pdf in React</h4>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="file"
            class="form-control"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <button class="btn btn-primary" type="submit">
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
