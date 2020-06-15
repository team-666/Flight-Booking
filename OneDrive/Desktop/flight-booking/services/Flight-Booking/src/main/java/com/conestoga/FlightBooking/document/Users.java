package com.conestoga.FlightBooking.document;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Users {
	
	
	private String name;
	private String teamName;
	
	public Users(String name, String teamName) {
		this.name = name;
		this.teamName = teamName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	
	

}
