import React from "react";
import "./Error.css";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default Error;
