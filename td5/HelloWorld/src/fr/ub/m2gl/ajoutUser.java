package fr.ub.m2gl;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/")
public class ajoutUser {
	@GET
	@Produces("text/html")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String HelloWorld() {
		return "<html>"
				+ "<body>"
				+ "<td><a href=\"http://localhost:8080/HelloWorld/users/\">Show users</a></td>"
				+ "<form action=\"/HelloWorld/users/ajout\" target=\"_blank\" method=\"POST\">\n"
				+ "  First name:<br>\n" + "<input type=\"text\" name=\"firstname\" value=\"\">\n"
				+ "  <br>\n"
				+ "  Last name:<br>\n" + "<input type=\"text\" name=\"lastname\" value=\"\">\n"
				+ "  <br><br>\n"
				+ "  <input type=\"submit\" value=\"Add User\">\n"
				+ "</form>"
				+ "</form>"
				+ "</body>" + "</html>";
	}
}
