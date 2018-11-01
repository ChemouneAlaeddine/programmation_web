package fr.ub.m2gl;

public class Main {

	public static void main(String[] args) {
		System.out.println("Hello");
		User user = new User("chemoune","alaeddine");
		System.out.println(MongoDB.deleteUserFromDB(user));
	}
}
