package com.conestoga.FlightBooking.document;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Legs {
	
	private String leg_id;
	private String flight_number;
	private String origin_airport_code;
	private String destination_airport_code;
	private String actual_departure_time;
	private String actual_arrival_time;
	public String getLeg_id() {
		return leg_id;
	}
	public void setLeg_id(String leg_id) {
		this.leg_id = leg_id;
	}
	public String getFlight_number() {
		return flight_number;
	}
	public void setFlight_number(String flight_number) {
		this.flight_number = flight_number;
	}
	public String getOrigin_airport_code() {
		return origin_airport_code;
	}
	public void setOrigin_airport_code(String origin_airport_code) {
		this.origin_airport_code = origin_airport_code;
	}
	public String getDestination_airport_code() {
		return destination_airport_code;
	}
	public void setDestination_airport_code(String destination_airport_code) {
		this.destination_airport_code = destination_airport_code;
	}
	public String getActual_departure_time() {
		return actual_departure_time;
	}
	public void setActual_departure_time(String actual_departure_time) {
		this.actual_departure_time = actual_departure_time;
	}
	public String getActual_arrival_time() {
		return actual_arrival_time;
	}
	public void setActual_arrival_time(String actual_arrival_time) {
		this.actual_arrival_time = actual_arrival_time;
	}
	
	
	

}
