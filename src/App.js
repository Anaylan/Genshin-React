import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from "./utils/AppRoute";
import ReactGA from 'react-ga';
import ym, {YMInitializer} from "react-yandex-metrika";
// import * as url from "url";

ReactGA.initialize(process.env.REACT_APP_GA_CODE_DEV);
const name = '| Genshin Easy'
// ym(86969082, 'init', {
//     defer: true,
//     clickmap: true,
//     trackLinks: true,
//     accurateTrackBounce: true
// })
// let options;

export const initGA = () => {
    ReactGA.initialize('UA-215831491-1'); // put your tracking id here
}

function App() {
    return (
        <>
            <AppRoute/>
            <YMInitializer accounts={[86969082]} options={{webvisor: true}} version="2"/>
        </>
    );
}

export default App;
