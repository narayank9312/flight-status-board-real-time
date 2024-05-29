import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlightTable from "./components/flighListing/FlightTable";
import FlightDetail from "./components/flightDetail/FlightDetail";
import NotFound from "./components/ui/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightTable />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
