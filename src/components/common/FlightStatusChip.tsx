import React from "react";
import "./FlightStatusChip.css";
interface FlightStatusChipProps {
  status: string;
}

const FlightStatusChip: React.FC<FlightStatusChipProps> = ({ status }) => {
  let backgroundColor: string;
  let textColor: string;

  switch (status) {
    case "On Time":
      backgroundColor = "#4caf50";
      textColor = "#fff";
      break;
    case "Delayed":
      backgroundColor = "#f44336";
      textColor = "#fff";
      break;
    case "Boarding":
      backgroundColor = "#ffeb3b";
      textColor = "#424242";
      break;
    case "Departed":
      backgroundColor = "#2196f3";
      textColor = "#fff";
      break;
    default:
      backgroundColor = "#9e9e9e";
      textColor = "#212121";
  }

  return (
    <div
      className="flight-status-chip"
      style={{ backgroundColor, color: textColor }}
    >
      <span className="chip-text">{status}</span>
    </div>
  );
};

export default FlightStatusChip;
