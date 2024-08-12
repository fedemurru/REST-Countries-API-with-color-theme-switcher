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
				maxWidth: "300px",
				textAlign: "center",

				backgroundColor: "#f9f9f9",
			}}
		>
			<img
				src={country.flags.svg}
				alt={`${country.common} flag`}
				style={{
					width: "100%",
					height: "auto",
					borderRadius: "10px",
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
