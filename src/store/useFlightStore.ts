import create from "zustand";
import { Flight } from "../types/flight";

interface FlightStore {
  flights: Flight[];
  setFlights: (flights: Flight[]) => void;
}

export const useFlightStore = create<FlightStore>((set) => ({
  flights: [],
  setFlights: (flights) => set({ flights }),
}));
