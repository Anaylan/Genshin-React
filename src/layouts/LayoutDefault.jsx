import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

ReactDOM.render(
    <>
        <Header/>
        <main className="site-content">
            {/* eslint-disable-next-line no-undef */}
            {children}
        </main>
        <Footer/>
    </>
)