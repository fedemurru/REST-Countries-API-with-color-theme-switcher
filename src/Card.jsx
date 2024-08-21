/* eslint-disable react/prop-types */
function Card({ country }) {
	console.log(country);
	return (
		<div
			style={{
				border: "1px solid #ccc",
				borderRadius: "10px",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
				padding: "20px",
				margin: "10px",

				textAlign: "center",

				backgroundColor: "#f9f9f9",
			}}
		>
			<img
				src={country.flags.svg}
				alt={`${country.common} flag`}
				style={{
					width: "100%", // Make the image take up the full width of its container
					height: "auto", // Maintain the aspect ratio based on the width
					maxHeight: "200px", // Limit the image's maximum height
					maxWidth: "250px", // Limit the image's maximum width
					borderRadius: "10px", // Add rounded corners to the image
				}}
			/>
			<h2
				style={{
					fontSize: "1.5rem",
					margin: "10px 0",
					color: "#333",
				}}
			>
				{country.name.common}
			</h2>
			<h4
				style={{
					fontSize: "1rem",
					margin: "5px 0",
					color: "#555",
				}}
			>
				Population: {country.population.toLocaleString()}
			</h4>
			<h4
				style={{
					fontSize: "1rem",
					margin: "5px 0",
					color: "#555",
				}}
			>
				Region: {country.region}
			</h4>
			<h4
				style={{
					fontSize: "1rem",
					margin: "5px 0",
					color: "#555",
				}}
			>
				Capital: {country.capital}
			</h4>
		</div>
	);
}

export default Card;
