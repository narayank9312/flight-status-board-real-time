import { Flight } from "../types/flight";

const API_URL = "https://flight-status-mock.core.travelopia.cloud/flights";

export const fetchFlights = async (): Promise<Flight[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};

export const fetchFlightDetails = async (id: string): Promise<Flight> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching flight details:", error);
    throw error;
  }
};
