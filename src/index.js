import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { YMInitializer } from "react-yandex-metrika";
import ReactGA from "react-ga";

ReactGA.initialize("UA-215831491-1");

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		<YMInitializer
			accounts={[87332749]}
			options={{
				defer: true,
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true,
				trackHash: true,
			}}
			version='2'
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
