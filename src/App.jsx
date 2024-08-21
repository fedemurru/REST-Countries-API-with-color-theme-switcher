/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "./Card";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./Form";

import Navbar from "./components/Navbar";
import Input from "./components/Input";

function App() {
	const [inputField, setInputField] = useState(undefined);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://restcountries.com/v3.1/all");
			const data = await response.json();
			setCountries(data);
		}

		fetchData();
	}, []);

	//console.log(countries[0].name.common);

	return (
		<>
			<Router>
				<Routes>
					<Route path="/:country" element={<h1>Hello</h1>} />
					<Route
						path="/"
						element={
							<>
								<Navbar />
								<div
									style={{
										backgroundColor: "#F2F2F2",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										padding: "10px",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
										maxWidth: "1200px",
										margin: "0 auto",
									}}
								>
									<div
										style={{
											display: "flex",

											flexDirection: "row",
											flexWrap: "nowrap", // Prevent wrapping
											justifyContent: "space-between",
											alignItems: "center",
											width: "100%", // Ensure it uses the full width of the container
											maxWidth: "800px", // Limit the maximum width
											minWidth: "400px", // Ensure it doesn't go below this width
											marginTop: "20px", // Add some space above
											padding: "10px", // Add some padding inside the container
										}}
									>
										<Input style={{ minWidth: "100px" }} />
										<Form
											style={{
												minWidth: "150px",

												maxHeight: "50px",
											}}
										/>
									</div>

									<div
										style={{
											display: "flex",
											flexDirection: "row",
											flexWrap: "wrap",
											justifyContent: "center",
											marginTop: "20px", // Add some space above the cards
										}}
									>
										{countries.map((country) => (
											<Card key={country.cca3} country={country} />
										))}
									</div>
								</div>
							</>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
