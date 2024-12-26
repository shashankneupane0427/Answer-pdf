import React from "react";
import image from "../assets/Laptoplogo.png";

function MainContent() {
    return (
        <section style={{
            width: "100%",
            backgroundColor: "#F5F5F5",
            padding: "20px 20px",
            margin: "0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
        }}>
            <div style={{ maxWidth: "500px" }}>
                <h2 style={{
                    fontSize: "24px",
                    color: "#333",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    marginLeft: "-74px",
                }}>
                    The Easiest Way to Keep Notes
                </h2>
                <p style={{
                    fontSize: "16px",
                    color: "#666",
                    marginBottom: "20px",
                    lineHeight: "1.6",
                }}>
                    All your notes, synced on all your devices. Get Simplenote now for iOS, Android, Mac, Windows, Linux, or in your browser.
                </p>
                <button style={{
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}>
                    Sign up now
                </button>
            </div>
            <div>
                <img src={image} alt="Laptop Icon" style={{
                    width: "200px",
                    height: "150px",
                }} />
            </div>
        </section>
    );
}

export default MainContent;
