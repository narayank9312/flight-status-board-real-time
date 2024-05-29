# Flight Status Board

This project is a real-time flight status board web application built using React. It allows users to view a list of flights with their status and details, and provides a detailed view for each flight.

## Features

- **Flight Table**: Displays a list of flights with columns for Flight Number, Airline, Origin, Destination, Departure Time, and Status. Data is updated in real-time.
- **Detail View**: Clicking on a flight displays more detailed information about that flight.
- **Navigation**: Uses React Router for navigation
- **Error Handling**: Provides feedback to users for network errors or when flight details are unavailable.
- **Styling**: The design is user-friendly and easily readable

## Installation

1. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run start`
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Details

- Flight data is fetched from the following API endpoints:
  - Flight list: `https://flight-status-mock.core.travelopia.cloud/flights`
  - Flight details: `https://flight-status-mock.core.travelopia.cloud/flights/:id`

## Project Structure

- `src/components`: Contains React components.
- `src/hooks`: Contains custom hooks used in the application.
- `src/services`: Contains service files for API integration.
- `src/utils`: Contains utility functions.
- `__tests__`: Contains test files for unit testing.

## Testing

Unit tests are written using Jest and React Testing Library. To run the tests, use the command `npm run test`.
