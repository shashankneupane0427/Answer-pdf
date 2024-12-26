function Header() {
    document.body.style.margin = "0";

    return (
        <header style={{
            backgroundColor: "#e6e6e6",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h1 style={{
                fontSize: "1.5rem",
                color: "green",
                margin: "0",
                fontFamily: "'Arial', sans-serif"
            }}>
                Easy Notes
            </h1>
            <nav>
                <ul style={{
                    display: "flex",
                    listStyleType: "none",
                    gap: "1rem",
                    margin: "0",
                    padding: "0"
                }}>
                    <li><a href="#about" style={{ textDecoration: "none", color: "inherit" }}>About Us</a></li>
                    <li><a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</a></li>
                    <li><a href="#help" style={{ textDecoration: "none", color: "inherit" }}>Help</a></li>
                    <li><a href="#support" style={{ textDecoration: "none", color: "inherit" }}>Support</a></li>
                    <li>
                        <button style={{
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                            padding: "0.25rem 0.75rem",
                            cursor: "pointer",
                            borderRadius: "4px",
                            marginRight: "0.15rem"
                        }}>Log In</button>
                    </li>
                    <li>
                        <button style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black",
                            padding: "0.25rem 0.75rem",
                            cursor: "pointer",
                            borderRadius: "4px"
                        }}>Sign Up</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
