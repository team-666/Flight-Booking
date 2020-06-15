package com.conestoga.FlightBooking.resource;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conestoga.FlightBooking.document.FlightCosts;
import com.conestoga.FlightBooking.exceptions.FlightNotFoundException;
import com.conestoga.FlightBooking.repository.FlightCostsRepository;

@RestController
@RequestMapping("/api/flight_cost")
public class FlightCostsResource {
	
private FlightCostsRepository flightCostRepository;
	
	
	@GetMapping
	public List<FlightCosts> getAll(){
		return flightCostRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public void getFlight(@PathVariable String id) throws FlightNotFoundException {

		flightCostRepository.findById(id)
	      .orElseThrow(() -> new FlightNotFoundException(id));
	  }

	@PostMapping("/create")
	public void persist(@RequestBody FlightCosts flightcost) {
		flightCostRepository.save(flightcost);
	}
	
	@PutMapping("/edit/{id}")
	public void update(@RequestBody FlightCosts flightcost, @PathVariable String id) {
		
	}


}
