import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Form() {
	const [inputField, setInputField] = useState(undefined);

	const iconStyle = {
		fontSize: "33px",
		color: "black",

		marginLeft: "15px",
	};

	return (
		<div>
			<form>
				<div className="inputField">
					<CiSearch style={iconStyle} />
					<input
						type="search"
						placeholder="Search for a country..."
						value={inputField}
						onChange={(e) => {
							setInputField(e.target.value);
						}}
					/>
					<i className="fas fa-search"></i>
				</div>
				<select id="region" name="region">
					<option value="All" defaultValue>
						All
					</option>
					<option value="Africa">Africa</option>
					<option value="Americas">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</form>
		</div>
	);
}

export default Form;
