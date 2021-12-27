import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactGA from 'react-ga'
import {useEffect, useRef} from "react";
import { useLocation, Switch } from 'react-router-dom';
import * as PropTypes from "prop-types";
import Home from './views/Home'
import AppRoute from './utils/AppRoute';
import LayoutDefault from './layouts/LayoutDefault';

ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
    ReactGA.set({page});
    ReactGA.pageview(page);
};

function ScrollReveal(props) {
    return null;
}

ScrollReveal.propTypes = {
    ref: PropTypes.any,
    children: PropTypes.func
};

function AppRoute(props) {
    return null;
}

AppRoute.propTypes = {
    component: PropTypes.any,
    path: PropTypes.string,
    layout: PropTypes.any,
    exact: PropTypes.bool
};
const App = () => {

    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add('is-loaded')
        childRef.current.init();
        trackPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <Switch>
                    <AppRoute exact path="/" component={Home} layout={LayoutDefault}/>
                </Switch>
            )}/>
    );
}

export default App
