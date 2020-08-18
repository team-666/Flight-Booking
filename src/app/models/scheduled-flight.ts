import { Schedule } from './schedule';
import { FlightDetails } from './flightDetails';

export class ScheduledFlight {
    scheduleFlightId: number;
    flight: FlightDetails;
    availableSeats: number;
    schedule: Schedule;
}
