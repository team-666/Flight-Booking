package com.conestoga.FlightBooking.document;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class FlightCosts {

	private String flight_number;
	private String aircraft_type_code;
	private String valid_from_date;
	private String valid_to_date;
	private String flight_cost;
	public String getFlight_number() {
		return flight_number;
	}
	public void setFlight_number(String flight_number) {
		this.flight_number = flight_number;
	}
	public String getAircraft_type_code() {
		return aircraft_type_code;
	}
	public void setAircraft_type_code(String aircraft_type_code) {
		this.aircraft_type_code = aircraft_type_code;
	}
	public String getValid_from_date() {
		return valid_from_date;
	}
	public void setValid_from_date(String valid_from_date) {
		this.valid_from_date = valid_from_date;
	}
	public String getValid_to_date() {
		return valid_to_date;
	}
	public void setValid_to_date(String valid_to_date) {
		this.valid_to_date = valid_to_date;
	}
	public String getFlight_cost() {
		return flight_cost;
	}
	public void setFlight_cost(String flight_cost) {
		this.flight_cost = flight_cost;
	}
	
	
}
