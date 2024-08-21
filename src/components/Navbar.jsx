import { useState } from "react";

function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	const navStyle = {
		backgroundColor: "white",
		padding: "22px",
		display: "flex",
		borderBottom: "1px solid black",
		justifyContent: "space-between",
		alignItems: "center",
	};

	const linkStyle = {
		color: "black",
		textDecoration: "none",
		padding: "8px",
		fontWeight: "bold",
	};

	return (
		<nav style={navStyle}>
			<div style={{ fontSize: "24px", fontWeight: "bold" }}>
				<h2>Where in the world? </h2>
			</div>

			<div>
				<a onClick={toggleDarkMode} style={linkStyle}>
					{isDarkMode ? "Light Mode" : "Dark Mode"}
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
