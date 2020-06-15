package com.conestoga.FlightBooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.conestoga.FlightBooking.document.FlightSchedule;

public interface FlightScheduleRepository extends MongoRepository<FlightSchedule, String>{

}
