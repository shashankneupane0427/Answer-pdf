import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#0F172A",
                color: "#E2E8F0",
                padding: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            {/* Top Section with Links */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    maxWidth: "1200px",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>ABOUT US</h4>
                    <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            <a
                                href="#about"
                                style={{
                                    color: "#E2E8F0",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                                onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                            >
                                Who We Are
                            </a>
                        </li>
                        <li>
                            <a
                                href="#mission"
                                style={{
                                    color: "#E2E8F0",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                                onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                            >
                                Our Mission
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>HELP</h4>
                    <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            <a
                                href="#terms"
                                style={{
                                    color: "#E2E8F0",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                                onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                            >
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="#privacy"
                                style={{
                                    color: "#E2E8F0",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                                onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>CONTACT</h4>
                    <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        <li>
                            <a
                                href="#contact"
                                style={{
                                    color: "#E2E8F0",
                                    textDecoration: "none",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                                onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                            >
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social Media Icons */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5rem",
                }}
            >
                <a
                    href="#facebook"
                    style={{
                        color: "#E2E8F0",
                        fontSize: "1.5rem",
                        transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#3b5998")}
                    onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                >
                    <FaFacebookF />
                </a>
                <a
                    href="#instagram"
                    style={{
                        color: "#E2E8F0",
                        fontSize: "1.5rem",
                        transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#C13584")}
                    onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                >
                    <FaInstagram />
                </a>
                <a
                    href="#phone"
                    style={{
                        color: "#E2E8F0",
                        fontSize: "1.5rem",
                        transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                    onMouseLeave={(e) => (e.target.style.color = "#E2E8F0")}
                >
                    <FaPhoneAlt />
                </a>
            </div>

            {/* Bottom Section */}
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: "#94A3B8" }}>
                    &copy; 2025 Pratik Technologies Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
