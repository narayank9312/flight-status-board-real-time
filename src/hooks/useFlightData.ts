import { useEffect, useState } from "react";
import { fetchFlights } from "../services/api";
import { useFlightStore } from "../store/useFlightStore";

const useFlightData = (refetchTime: number = 30000) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { flights, setFlights } = useFlightStore();

  const fetchData = async () => {
    try {
      const data = await fetchFlights();
      setFlights(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError("Error fetching flight data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, refetchTime); // Fetch every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return { flights, loading, error };
};

export default useFlightData;
