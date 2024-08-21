import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Input() {
	const [inputField, setInputField] = useState(undefined);

	const iconStyle = {
		fontSize: "30px",
		color: "black",
		marginLeft: "15px",
	};

	return (
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
		</div>
	);
}

export default Input;
