import { useState } from "react";

function App() {
	const [inputField, setInputField] = useState(undefined);

	return (
		<>
			<div className="container">
				<form>
					<div className="inputField">
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
		</>
	);
}

export default App;
