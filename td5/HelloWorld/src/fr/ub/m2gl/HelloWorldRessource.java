package fr.ub.m2gl;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/users")
public class HelloWorldRessource {
	@Path("/ajout")
	@POST
	@Produces("text/plain")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String confirmAdd(@FormParam("firstname")String fn, @FormParam("lastname")String ln){
		return MongoDB.addUserToDB(new User(fn, ln));
	}
	
	@Path("/delete")
	@POST
	@Produces("text/plain")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String confirmDelete(@FormParam("firstname")String fn, @FormParam("lastname")String ln){
		return MongoDB.deleteUserFromDB(new User(fn, ln));
	}

	@Path("/")
	@GET
	@Produces("text/html")
	public String getUsers() {
		StringBuilder str = new StringBuilder();
		str.append("<html><head></head><body><table><tr><td>FIRSTNAME</td><td>LASTNAME</td></tr>");
		for (User u : MongoDB.getUsers()) {
			str.append("<tr><td>" + u.getFirstName() + "</td>");
			str.append("<td>" + u.getLastName() + "</td></tr>");
		}
		str.append("<br></body></html>");
		return str+"\n";
	}
}
