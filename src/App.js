import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from "./utils/AppRoute";

// analytics
import ReactGA from "react-ga";
import ym, {YMInitializer} from "react-yandex-metrika";

import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const nameApp = "Genshin Easy";

ReactGA.initialize("UA-215831491-1");
const trackPage = (page) => {
    ReactGA.set({page});
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
            <AppRoute/>
            <YMInitializer
                accounts={[87332749]}
                options={{
                    defer: true,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                }}
                version='2'
            />
        </>
    );
}

export default App;
