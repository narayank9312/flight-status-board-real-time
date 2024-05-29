const formatDepartureTime = (departureTime: string): string => {
  const formattedDepartureTime = new Date(departureTime).toLocaleString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    }
  );
  return formattedDepartureTime;
};

export { formatDepartureTime };
