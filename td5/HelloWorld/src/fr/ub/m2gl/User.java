package fr.ub.m2gl;

import javax.ws.rs.GET;
import javax.ws.rs.POST;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
	
	@JsonProperty("firstName")
	private String firstName;
	@JsonProperty("lastName")
	private String lastName;

	public User() {
		this.firstName = "default";
		this.lastName = "default";
	}
	
	public User(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	
	@GET
    public String getUsers() {
		return "";
    }
	
	
	@POST
    public void addUser() {
    }
	
	
	// Getters & Setters
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String toString() {
		return String.format("firstName : " + firstName + " lastName :" + lastName);
	}
}
