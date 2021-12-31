import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutDefault from "./layouts/LayoutDefault";
import Main from "./components/layout/Main";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
function App() {
  return (
    <LayoutDefault>
      <BrowserRouter>
        <Main>
          <AppRoute />
        </Main>
      </BrowserRouter>
    </LayoutDefault>
  );
}

export default App;
