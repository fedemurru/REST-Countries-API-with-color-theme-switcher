/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "./Card";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./Form";
import Navbar from "./components/Navbar";

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
							<div>
								<Navbar />
								<Form />
								<div className="container">
									<div className="card-container">
										{countries.map((country) => (
											<Card key={country.cca3} country={country} />
										))}
									</div>
								</div>
							</div>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
