package com.conestoga.FlightBooking.resource;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conestoga.FlightBooking.document.Legs;
import com.conestoga.FlightBooking.exceptions.FlightNotFoundException;
import com.conestoga.FlightBooking.repository.LegsRepository;

@RestController
@RequestMapping("/api/flight_legs")
public class LegsResource {

	
	private LegsRepository legsRepository;
	
	
	@GetMapping
	public List<Legs> getAll(){
		return legsRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public void getLeg(@PathVariable String id) throws FlightNotFoundException {

		legsRepository.findById(id)
	      .orElseThrow(() -> new FlightNotFoundException(id));
	  }

	@PostMapping("/create")
	public void persist(@RequestBody Legs legs) {
		legsRepository.save(legs);
	}
	
	@PutMapping("/edit/{id}")
	public void update(@RequestBody Legs legs, @PathVariable String id) {
		
	}

}
