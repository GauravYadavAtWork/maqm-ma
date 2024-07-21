import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevView from "./pages/DeveloperView";
import Tester from "./pages/TesterView";
import EndUser from "./pages/EndUserView";
import FuzzyCalculator from "./pages/Fuzzycalculator";

function App(){
	return(
		<BrowserRouter>
		  <Routes>
			<Route element={<DevView></DevView>} path="/"></Route>
			<Route element={<Tester></Tester>} path="/tester"></Route>
			<Route element={<EndUser></EndUser>} path="/enduser"></Route>
			<Route element={<FuzzyCalculator></FuzzyCalculator>} path="/fuzzycalc"></Route>
		  </Routes>
		</BrowserRouter>
	);
}

export default App;