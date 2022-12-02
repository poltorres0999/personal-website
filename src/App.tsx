import "./App.css";
import { BrowserRouter, Routes, Route, Router, Navigate } from "react-router-dom";
import Layout from "./components/core/layout/layout";
import { HomePage } from "./components/pages/home/home";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route element={<Layout />}>
          {" "}
          {/* put url base here and nest children routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-website" element={<HomePage />} />
        </Route>
        {/* navigate to default route if no url matched */}
      </Routes>
    </HashRouter>
  );
}

export default App;
