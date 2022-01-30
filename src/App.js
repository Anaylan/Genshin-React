import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from "./utils/AppRoute";

// analitycs
import ReactGA from "react-ga";
import ym from "react-yandex-metrika";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const nameApp = "Genshin Easy";

const trackPage = (page) => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

function App() {
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		ym("hit", page);
		document.body.classList.add("loaded");
		trackPage(page);
	}, [location]);

	return (
		<>
			<AppRoute />
		</>
	);
}

export default App;
