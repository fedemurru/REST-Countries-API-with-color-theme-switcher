/* eslint-disable react/prop-types */
function Card({ country }) {
	console.log(country);
	return (
		<div
			style={{
				border: "1px solid #ccc",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
				margin: "10px",
				textAlign: "left",

				width: "250px",
				height: "350px",
				backgroundColor: "#f9f9f9",
			}}
		>
			<img
				src={country.flags.svg}
				alt={`${country.common} flag`}
				style={{
					width: "100%",
					height: "50%",
					objectFit: "cover",
				}}
			/>
			<h2
				style={{
					fontSize: "1.5rem",
					margin: "10px 0",
					color: "#333",
					paddingLeft: "15px",
				}}
			>
				{country.name.common}
			</h2>
			<h4
				style={{
					fontSize: "1rem",
					margin: "5px 0",
					color: "#555",
					paddingLeft: "15px",
					display: "inline",
				}}
			>
				Population:
			</h4>{" "}
			<span> {country.population.toLocaleString()}</span>
			<br />
			<h4
				style={{
					fontSize: "1rem",
					margin: "5px 0",
					color: "#555",
					paddingLeft: "15px",
					display: "inline",
				}}
			>
				Region:
			</h4>
			<span> {country.region}</span>
			<br />
			<h4
				style={{
					fontSize: "1rem",
					margin: "5px 0",
					color: "#555",
					paddingLeft: "15px",
					display: "inline",
				}}
			>
				Capital:
			</h4>
			<span> {country.capital}</span>
		</div>
	);
}

export default Card;
