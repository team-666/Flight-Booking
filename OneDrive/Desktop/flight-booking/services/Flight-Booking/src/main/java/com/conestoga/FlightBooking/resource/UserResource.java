package com.conestoga.FlightBooking.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conestoga.FlightBooking.document.Users;
import com.conestoga.FlightBooking.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserResource {
	
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/all")
	public List<Users> getAll(){
		List<Users> users = userRepository.findAll();
		return users;
	}
	
	@PostMapping("/create")
	public void persist(@RequestBody Users user1) {
		//Users user = new Users(1, "rad", "hello");
		userRepository.save(user1);
		
	}

}
