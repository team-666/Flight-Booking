package com.conestoga.FlightBooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.conestoga.FlightBooking.document.Legs;

public interface LegsRepository extends MongoRepository<Legs, String>{

}
