import { renderHook, act } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useFlightDetail from "../hooks/useFlightDetail";
import { fetchFlightDetails } from "../services/api";
import { Flight } from "../types/flight";

jest.mock("../services/api");

describe("useFlightDetail", () => {
  const flightData: Flight = {
    id: "1",
    flightNumber: "AA100",
    airline: "Airline",
    origin: "City A",
    destination: "City B",
    departureTime: "10:00",
    status: "On Time",
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it("should initialize with correct default state", () => {
    const { result } = renderHook(() => useFlightDetail("1"));

    expect(result.current.flight).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it("should fetch flight details and update state", async () => {
    (fetchFlightDetails as jest.Mock).mockResolvedValue(flightData);

    const { result } = renderHook(() => useFlightDetail("1"));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(fetchFlightDetails).toHaveBeenCalledWith("1");
    expect(result.current.flight).toEqual(flightData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should handle API errors", async () => {
    (fetchFlightDetails as jest.Mock).mockRejectedValue(
      new Error("Error fetching flight details")
    );

    const { result } = renderHook(() => useFlightDetail("1"));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(fetchFlightDetails).toHaveBeenCalledWith("1");
    expect(result.current.flight).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Error fetching flight details");
  });

  it("should refetch flight details at specified intervals", async () => {
    (fetchFlightDetails as jest.Mock).mockResolvedValue(flightData);

    const { result } = renderHook(() => useFlightDetail("1", 30000));

    // Wait for initial fetch
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Advance timers to trigger interval refetch
    act(() => {
      jest.advanceTimersByTime(30000);
    });

    // Wait for refetch
    await waitFor(() => expect(fetchFlightDetails).toHaveBeenCalledTimes(2));

    expect(result.current.flight).toEqual(flightData);
  });

  it("should clear interval on unmount", async () => {
    (fetchFlightDetails as jest.Mock).mockResolvedValue(flightData);

    const { unmount } = renderHook(() => useFlightDetail("1", 30000));

    // Wait for initial fetch
    await waitFor(() => expect(fetchFlightDetails).toHaveBeenCalledTimes(1));

    unmount();

    act(() => {
      jest.advanceTimersByTime(30000);
    });

    expect(fetchFlightDetails).toHaveBeenCalledTimes(1);
  });
});
