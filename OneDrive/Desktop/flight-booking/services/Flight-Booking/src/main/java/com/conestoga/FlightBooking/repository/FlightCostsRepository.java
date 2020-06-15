package com.conestoga.FlightBooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.conestoga.FlightBooking.document.FlightCosts;

public interface FlightCostsRepository extends MongoRepository<FlightCosts, String>{

}
