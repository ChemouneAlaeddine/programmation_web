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
	
	@Path("/edit")
	@GET
	@Produces("text/html")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String confirmEdit(@QueryParam("firstname")String fn1, @QueryParam("lastname")String ln1){
		
		StringBuilder str = new StringBuilder();
		str.append("<html><head></head><body>");
		str.append("<form action=\"/HelloWorld/users/edited?firstname="+fn1+"&lastname="+ln1+"\" target=\"_blank\" method=\"POST\">\n"
		+ "  New First name:<br>\n" + "<input type=\"text\" name=\"newfirstname\" value=\"\">\n"
		+ "  <br>\n"
		+ "  New Last name:<br>\n" + "<input type=\"text\" name=\"newlastname\" value=\"\">\n"
		+ "  <br><br>\n"
		+ "  <input type=\"submit\" value=\"Edit User\">\n"
		+ "</form>");
		str.append("<br></body></html>");
		return str+"\n";
	}
	
	
	@Path("/edited")
	@POST
	@Produces("text/plain")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String confirmEdit1(@QueryParam("firstname")String fn1, @QueryParam("lastname")String ln1,
			@FormParam("newfirstname")String fn2, @FormParam("newlastname")String ln2){
		return MongoDB.editUserFromDB(new User(fn1, ln1), new User(fn2, ln2));
	}
	
	
	@Path("/delete")
	@GET
	@Produces("text/plain")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String confirmDelete(@QueryParam("firstname")String fn, @QueryParam("lastname")String ln){
		return MongoDB.deleteUserFromDB(new User(fn, ln));
	}

	@Path("/")
	@GET
	@Produces("text/html")
	public String getUsers() {
		StringBuilder str = new StringBuilder();
		str.append("<html><head><style>"
				+ "</style></head><body><table><tr><td>FIRSTNAME</td><td>LASTNAME</td></tr><tbody>");
		for (User u : MongoDB.getUsers()) {
			str.append("<tr><td name=\"firstname\">" + u.getFirstName() + "</td>");
			str.append("<td name=\"lastname\">" + u.getLastName() + "</td>");
			str.append("<td><a href=\"/HelloWorld/users/delete?firstname="+u.getFirstName()+"&lastname="+u.getLastName()+"\">Delete User</a></td>");
			str.append("<td><a href=\"/HelloWorld/users/edit?firstname="+u.getFirstName()+"&lastname="+u.getLastName()+"\">Edit User</a></td></tr>");
		}
		str.append("</tbody><br></body></html>");
		return str+"\n";
	}
}
