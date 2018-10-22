package fr.ub.m2gl;


import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.LinkedList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/hello2")

public class UserRessource {
	private MyObjectMapperProvider myObj = new MyObjectMapperProvider();
	private LinkedList<User> users = new LinkedList<User>();
	private File file;
	 
	 
	public UserRessource(File file) throws IOException {
		this.file = file;
		User[] myObjects;
		try {
			myObjects = myObj.defaultObjectMapper.readValue(file, User[].class);
			for(User user : myObjects) {
	    		users.add(user);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	 	 
    @GET
    @Produces("text/JSON") 
    public void addUser(String firstName, String lastName) throws IOException {
    	users.add(new User(firstName, lastName));
    }
    
    @GET
    @Produces("text/JSON") 
    public void editUser(String firstName, String lastName, String newFirstName, String newLastName) throws IOException {
    	for(User user : users) {
    		if(user.getFirstName().equals(firstName) && user.getLastName().equals(lastName)) {
    			user.setFirstName(newFirstName);
    			user.setLastName(newLastName);
    		}
		}
    }
    
    @GET
    @Produces("text/JSON") 
    public void deleteUser(String firstName, String lastName) throws IOException {
    	Iterator<User> itr = users.iterator();
    	while(itr.hasNext()) {
    		User u = itr.next();
    		if(u.getFirstName().equals(firstName) && u.getLastName().equals(lastName)) {
    			itr.remove();
    		}
		}
    }
    
    @GET
    public String getUsers() throws IOException {
    	myObj.defaultObjectMapper.writeValue(file, users);
    	StringBuilder myBuffered = new StringBuilder("");
    	for(User user : users) {
    		myBuffered.append(user.toString()+"\n");
    	}
    	return myBuffered.toString();
    }
}