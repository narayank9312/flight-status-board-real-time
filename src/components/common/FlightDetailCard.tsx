import React from "react";
import FlightStatusChip from "./FlightStatusChip";
import "./FlightDetailCard.css";
import { formatDepartureTime } from "../../utils/utils";

interface Flight {
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

interface Props {
  flight: Flight;
}

const FlightDetailCard: React.FC<Props> = ({ flight }) => {
  return (
    <div className="flight-detail-card">
      <div className="header">
        <span className="airline">{flight.airline}</span>
      </div>
      <div className="row">
        <label>Flight Number:</label>
        <span>{flight.flightNumber}</span>
      </div>
      <div className="row">
        <label>Origin:</label>
        <span>{flight.origin}</span>
        <label>Destination:</label>
        <span>{flight.destination}</span>
      </div>
      <div className="row">
        <label>Departure Time:</label>
        <span>{formatDepartureTime(flight.departureTime)}</span>
      </div>
      <div className="status-row">
        <label>Status:</label>
        <span>
          <FlightStatusChip status={flight.status} />
        </span>
      </div>
    </div>
  );
};

export default FlightDetailCard;
