function Form() {
	const styleSelect = {
		width: "100%", // Full width to match container
		padding: "10px",
		fontSize: "16px", // Smaller font size for the select element
		border: "1px solid #ccc", // Light border color

		boxSizing: "border-box", // Include padding in width/height calculation
	};

	return (
		<div>
			<select id="region" name="region" style={styleSelect}>
				<option value="All" defaultValue>
					Filter By Region
				</option>
				<option value="Africa">Africa</option>
				<option value="Americas">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	);
}

export default Form;
