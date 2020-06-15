package com.conestoga.FlightBooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.conestoga.FlightBooking.document.Users;

public interface UserRepository extends MongoRepository<Users, String>{

}
