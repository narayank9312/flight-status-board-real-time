import React from "react";
import { Link } from "react-router-dom";
import Table from "../ui/Table";
import TableRow from "../ui/TableRow";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import useFlightData from "../../hooks/useFlightData";
import "./FlightTable.css";
import FlightStatusChip from "../common/FlightStatusChip";
import { formatDepartureTime } from "../../utils/utils";

const FlightTable: React.FC = () => {
  const { flights, loading, error } = useFlightData();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <Table
      headers={[
        "Flight Number",
        "Airline",
        "Origin",
        "Destination",
        "Departure Time",
        "Status",
      ]}
    >
      {flights.map((flight) => (
        <TableRow
          key={flight.id}
          data={[
            <Link to={`/flight/${flight.id}`} key={flight.id}>
              {flight.flightNumber}
            </Link>,
            flight.airline,
            flight.origin,
            flight.destination,
            formatDepartureTime(flight.departureTime),
            <FlightStatusChip status={flight.status} />,
          ]}
        />
      ))}
    </Table>
  );
};

export default FlightTable;
