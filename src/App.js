import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DiscoverPage from "./components/DiscoverPage/DiscoverPage";
import CardDetails from "./components/CardDetails/CardDetails";
import "./App.css";

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Discover Page */}
          <Route path="/" element={<DiscoverPage />} />

          {/* Route for detailed card view */}
          <Route path="/details/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
