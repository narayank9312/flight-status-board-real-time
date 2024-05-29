import { useEffect, useState } from "react";
import { fetchFlightDetails } from "../services/api";
import { Flight } from "../types/flight";

const useFlightDetail = (id: string, refetchTime: number = 30000) => {
  const [flight, setFlight] = useState<Flight | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchFlightDetails(id);
      setFlight(data);
      setError(null);
    } catch (error) {
      setError("Error fetching flight details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, refetchTime);
    return () => clearInterval(interval);
  }, [id]);

  return { flight, loading, error };
};

export default useFlightDetail;
