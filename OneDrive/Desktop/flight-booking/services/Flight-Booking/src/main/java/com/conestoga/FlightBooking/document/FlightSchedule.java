package com.conestoga.FlightBooking.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class FlightSchedule {
	
	@Id
	private String _id;
	private String airline_code;
	private String aircraft_type_code;
	private String origin_airport_code;
	private String destination_airport_code;
	private String departure_date_time;
	private String arrival_date_time;
	
	
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getAirline_code() {
		return airline_code;
	}
	public void setAirline_code(String airline_code) {
		this.airline_code = airline_code;
	}
	public String getAircraft_type_code() {
		return aircraft_type_code;
	}
	public void setAircraft_type_code(String aircraft_type_code) {
		this.aircraft_type_code = aircraft_type_code;
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
	public String getDeparture_date_time() {
		return departure_date_time;
	}
	public void setDeparture_date_time(String departure_date_time) {
		this.departure_date_time = departure_date_time;
	}
	public String getArrival_date_time() {
		return arrival_date_time;
	}
	public void setArrival_date_time(String arrival_date_time) {
		this.arrival_date_time = arrival_date_time;
	}
	

}
