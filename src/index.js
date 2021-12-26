import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Footer from "./components/Footer"
import Header from "./components/Header"
ReactDOM.render(
	<React.StrictMode>
		<Header />
	</React.StrictMode>,
	document.getElementById("header")
)

ReactDOM.render(
	<React.StrictMode>
		<App />

	</React.StrictMode>,
	document.getElementById("root")
)

ReactDOM.render(
	<React.StrictMode>
		<Footer />
	</React.StrictMode>,
	document.getElementById("footer")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
