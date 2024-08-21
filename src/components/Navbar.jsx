import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	const navStyle = {
		backgroundColor: "white",
		padding: "22px",
		display: "flex",
		borderBottom: "2px solid black",
		justifyContent: "space-between",
	};

	const linkStyle = {
		color: "black",
		textDecoration: "none",
		display: "flex", // Align icon and text horizontally
		alignItems: "center",
		padding: "8px",
		fontWeight: "bold",
	};

	const iconStyle = {
		marginRight: "7px",
		marginTop: "8px",
		fontSize: "1.5rem",
	};

	return (
		<nav style={navStyle}>
			<div style={{ fontSize: "24px", fontWeight: "bold" }}>
				<h2>Where in the world? </h2>
			</div>

			<div>
				<a onClick={toggleDarkMode} style={linkStyle}>
					<span style={iconStyle}>
						{isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
					</span>
					{isDarkMode ? "Light Mode" : "Dark Mode"}
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
