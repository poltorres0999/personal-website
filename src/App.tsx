import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/core/layout/layout";
import { HomePage } from "./components/pages/home/home";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="personal-website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
