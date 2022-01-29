import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from "./utils/AppRoute";
import ReactGA from "react-ga";
import { YMInitializer } from "react-yandex-metrika";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const nameApp = "Genshin Easy";

ReactGA.initialize("UA-215831491-1");
const trackPage = (page) => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

function App() {
	const childRef = useRef();
	let location = useLocation();
	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add("loaded");
		// childRef.current.init()
		trackPage(page);
	}, [location]);
	return (
		<>
			<AppRoute />
			<YMInitializer
				accounts={[86969082]}
				options={{
					webvisor: true,
					defer: true,
					accurateTrackBounce:true,
					clickmap: true,
					trackLinks: true
				}}
				version='2'
			/>
		</>
	);
}

export default App;
