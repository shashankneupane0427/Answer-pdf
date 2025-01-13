import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainContent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the benefit of using your platform?",
            answer:
                "Our platform simplifies workflows by providing secure document sharing, role-based access, and integration with SSO solutions. It's designed to help teams focus on productivity without worrying about security or operational bottlenecks.",
        },
        {
            question: "How secure is my data on your platform?",
            answer:
                "Your data is protected with enterprise-grade 256-bit encryption, both in transit and at rest. Additionally, we employ advanced role-based security to ensure only authorized personnel can access sensitive information.",
        },
        {
            question: "Can I integrate this with my existing tools?",
            answer:
                "Yes! Our platform supports integrations with popular tools like Google Workspace, Okta, and other SSO providers, enabling seamless workflows and efficient collaboration.",
        },
        {
            question: "Is your platform scalable for large teams?",
            answer:
                "Absolutely! Whether you're a small team or a large enterprise, our platform is designed to scale effortlessly, accommodating your growing needs while maintaining top-tier performance and security.",
        },
        {
            question: "What support options are available?",
            answer:
                "We provide 24/7 customer support, a comprehensive knowledge base, and dedicated account managers for premium users to ensure your team has all the help it needs.",
        },
        {
            question: "Can I try the platform before purchasing?",
            answer:
                "Yes, we offer a free trial so you can experience the full suite of features. Additionally, our onboarding team is available to help you get started quickly and efficiently.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            style={{
                width: "100%",
                backgroundColor: "#F9FAFB",
                padding: "60px 20px",
                textAlign: "center",
                boxSizing: "border-box",
            }}
        >
            <h2
                style={{
                    fontSize: "36px",
                    color: "#111827",
                    fontWeight: "700",
                    marginBottom: "20px",
                }}
            >
                Empower Your Team with Cutting-Edge Solutions
            </h2>
            <p
                style={{
                    fontSize: "18px",
                    color: "#6B7280",
                    lineHeight: "1.8",
                    maxWidth: "800px",
                    margin: "0 auto 40px",
                }}
            >
                Simplify your team's workflow with our advanced tools. Effortlessly manage documents, answer questions, and provide secure access to key resources — all in one platform.
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    gap: "30px",
                }}
            >
                {/* Feature 1 */}
                <div
                    style={{
                        flex: "1 1 250px",
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#E5E7EB",
                            borderRadius: "50%",
                            margin: "0 auto 20px",
                        }}
                    >
                        {/* Placeholder for an image */}
                    </div>
                    <h3
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#111827",
                            marginBottom: "10px",
                        }}
                    >
                        Secured Private Cloud
                    </h3>
                    <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: "1.6" }}>
                        Share files securely with your team and control access to ensure trusted use.
                    </p>
                </div>
                {/* Feature 2 */}
                <div
                    style={{
                        flex: "1 1 250px",
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#E5E7EB",
                            borderRadius: "50%",
                            margin: "0 auto 20px",
                        }}
                    >
                        {/* Placeholder for an image */}
                    </div>
                    <h3
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#111827",
                            marginBottom: "10px",
                        }}
                    >
                        Encrypted at Rest
                    </h3>
                    <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: "1.6" }}>
                        Ensure your files remain secure with enterprise-grade 256-bit encryption.
                    </p>
                </div>
                {/* Feature 3 */}
                <div
                    style={{
                        flex: "1 1 250px",
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#E5E7EB",
                            borderRadius: "50%",
                            margin: "0 auto 20px",
                        }}
                    >
                        {/* Placeholder for an image */}
                    </div>
                    <h3
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#111827",
                            marginBottom: "10px",
                        }}
                    >
                        Role-Based Security
                    </h3>
                    <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: "1.6" }}>
                        Customize access levels based on roles to protect sensitive data.
                    </p>
                </div>
                {/* Feature 4 */}
                <div
                    style={{
                        flex: "1 1 250px",
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }} 
                >
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#E5E7EB",
                            borderRadius: "50%",
                            margin: "0 auto 20px",
                        }}
                    >
                        {/* Placeholder for an image */}
                    </div>
                    <h3
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#111827",
                            marginBottom: "10px",
                        }}
                    >
                        Single Sign-On
                    </h3>
                    <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: "1.6" }}>
                        Streamline login processes with SSO support for Google, Okta, and more.
                    </p>
                </div>
            </div>
            <Link to="/signup">
                <button
                    style={{
                        marginTop: "40px",
                        padding: "12px 30px",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        backgroundColor: "#2563EB",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        textDecoration: "none",
                    }}
                >
                    Sign Up Now
                </button>
            </Link>
            {/* FAQ Section */}
            <div
                style={{
                    marginTop: "60px",
                    padding: "40px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    maxWidth: "800px",
                    margin: "60px auto",
                }}
            >
                <h3
                    style={{
                        fontSize: "28px",
                        color: "#111827",
                        fontWeight: "700",
                        marginBottom: "30px",
                    }}
                >
                    Frequently Asked Questions
                </h3>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: "20px",
                            textAlign: "left",
                        }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            style={{
                                background: "none",
                                border: "none",
                                fontSize: "18px",
                                fontWeight: "600",
                                color: "#2563EB",
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                padding: "10px 0",
                            }}
                        >
                            {faq.question}
                            <span
                                style={{
                                    fontSize: "24px",
                                    lineHeight: "0",
                                    transition: "transform 0.2s",
                                    transform: activeIndex === index ? "rotate(180deg)" : "rotate(0)",
                                }}
                            >
                                &#x25BC;
                            </span>
                        </button>
                        {activeIndex === index && (
                            <p
                                style={{
                                    fontSize: "16px",
                                    color: "#6B7280",
                                    lineHeight: "1.6",
                                    paddingLeft: "10px",
                                }}
                            >
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MainContent;
