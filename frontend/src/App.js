import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import Plots from "./pages/plots/Plots";
import LandingPage from "./pages/landingpage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage/>
            </>
          }
        />

        <Route path="/main" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plots" element={<Plots />} />
      </Routes>
    </Router>
  );
}

export default App;
