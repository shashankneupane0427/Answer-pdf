import React from "react";
import image from "../assets/instalogo.jpeg";

function Footer() {
    return (
        <footer style={{
            backgroundColor: "#8d9dce",
            padding: "2rem 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            color: "white",
        }}>
            <div style={{ flex: "1" }}>
                <ul style={{
                    listStyleType: "none",
                    padding: "0",
                    margin: "0",
                    lineHeight: "2rem",
                    textAlign: "left",
                }}>
                    <li style={{ paddingLeft: "8rem", fontWeight: "bold" }}>ABOUT US :</li>
                    <li style={{ paddingLeft: "8rem", fontWeight: "bold" }}>TERMS AND CONDITIONS :</li>
                    <li style={{ paddingLeft: "8rem", fontWeight: "bold" }}>CONTACTS :</li>
                </ul>
            </div>
            <div style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <span style={{ fontSize: "1.5rem", 
                          cursor: "pointer",
                          color: "#3b5998" }}>f</span>
                    </div>
                    <p>Facebook</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        border: "2px solid white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                    }}>
                        <img src={image} alt="Instagram" style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            cursor: "pointer"
                        }} />
                    </div>
                    <p>Instagram</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        border: "2px solid white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <span style={{ fontSize: "1.5rem",
                          cursor: "pointer",
                          color: "white" }}>📞</span>
                    </div>
                    <p>Contact us</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
