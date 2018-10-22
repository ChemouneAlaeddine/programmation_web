package fr.ub.m2gl;

import java.io.File;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

public class Main {

	public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException {
		File file = new File("/home/chemoune/Bureau/programmation_web/carnet.json");
		UserRessource usr = new UserRessource(file);
    	usr.addUser("nouveau", "arrivant");
    	usr.editUser("John3", "Fiat3", "editedFirstName", "editedLastName");
    	usr.deleteUser("John1", "Fiat1");
    	System.out.println(usr.getUsers());
    	usr.getUsers();
	}
}
