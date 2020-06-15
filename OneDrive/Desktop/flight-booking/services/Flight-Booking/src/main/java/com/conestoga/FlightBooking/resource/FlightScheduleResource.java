package com.conestoga.FlightBooking.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conestoga.FlightBooking.document.FlightSchedule;
import com.conestoga.FlightBooking.exceptions.FlightNotFoundException;
import com.conestoga.FlightBooking.repository.FlightScheduleRepository;

@RestController
@RequestMapping("/api/flight_schedule")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FlightScheduleResource {
	
	
	@Autowired
	private FlightScheduleRepository flightRepository;
	
	
	@GetMapping
	public List<FlightSchedule> getAll(){
		return flightRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<FlightSchedule> getFlight(@PathVariable String id) throws FlightNotFoundException {

		Optional<FlightSchedule> flightScheduleData = flightRepository.findById(id);

		  if (flightScheduleData.isPresent()) {
		    return new ResponseEntity<>(flightScheduleData.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	  }

	@PostMapping
	public void persist(@RequestBody FlightSchedule flight_schedule) {
		flightRepository.save(flight_schedule);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<FlightSchedule> update(@RequestBody FlightSchedule flight_schedule, @PathVariable String id) {
		Optional<FlightSchedule> flightData = flightRepository.findById(id);

		  if (flightData.isPresent()) {
			  FlightSchedule _flight_schedule = flightData.get();
			  _flight_schedule.setAirline_code((flight_schedule.getAirline_code() != null || flight_schedule.getAirline_code() != "" )?flight_schedule.getAirline_code():
				  _flight_schedule.getAirline_code());
			  _flight_schedule.setAircraft_type_code((flight_schedule.getAircraft_type_code() != null || flight_schedule.getAircraft_type_code() != "" )?flight_schedule.getAircraft_type_code():
				  _flight_schedule.getAircraft_type_code());
			  
			  _flight_schedule.setOrigin_airport_code((flight_schedule.getOrigin_airport_code() != null || flight_schedule.getOrigin_airport_code() != "" )?flight_schedule.getOrigin_airport_code():
				  _flight_schedule.getOrigin_airport_code());
			  _flight_schedule.setDestination_airport_code((flight_schedule.getDestination_airport_code() != null || flight_schedule.getDestination_airport_code() != "" )?flight_schedule.getDestination_airport_code():
				  _flight_schedule.getDestination_airport_code());
			  _flight_schedule.setDeparture_date_time((flight_schedule.getDeparture_date_time() != null || flight_schedule.getDeparture_date_time() != "" )?flight_schedule.getDeparture_date_time():
				  _flight_schedule.getDeparture_date_time());
			  _flight_schedule.setArrival_date_time((flight_schedule.getArrival_date_time() != null || flight_schedule.getArrival_date_time() != "" )?flight_schedule.getArrival_date_time():
				  _flight_schedule.getArrival_date_time());
			  
		    return new ResponseEntity<>(flightRepository.save(_flight_schedule), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable String id) {
		flightRepository.deleteById(id);
	}

}
