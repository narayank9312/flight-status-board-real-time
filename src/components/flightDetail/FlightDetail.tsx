import React from "react";
import { useParams } from "react-router-dom";
import useFlightDetail from "../../hooks/useFlightDetail";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import FlightDetailCard from "../common/FlightDetailCard";
import "./FlightDetail.css";

const FlightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { flight, loading, error } = useFlightDetail(id as string);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!flight) {
    return <div>No flight details available.</div>;
  }

  return (
    <div className="flight-detail-container">
      <FlightDetailCard flight={flight} />
    </div>
  );
};

export default FlightDetail;
