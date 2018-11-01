package fr.ub.m2gl;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.bson.Document;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

public class MongoDB {
	
	static MyObjectMapperProvider myObj = new MyObjectMapperProvider();
	static List<User> users;
	static File file = new File("/home/chemoune/Bureau/HelloWorld/carnetUsers.json");

	public static String addUserToDB(User user) {
		MongoClient mongoClient = new MongoClient();
		try {
		    MongoDatabase db = mongoClient.getDatabase("database");
		    MongoCollection<Document> collection = db.getCollection("myCollection");
		    ObjectMapper mapper = new ObjectMapper();
		    String jsonString = mapper.writeValueAsString(user);
		    Document doc = Document.parse(jsonString);
		    collection.insertOne(doc);
		    updateJson();
		    return " "+user.getFirstName()+" "+user.getLastName()+" added successfully.";
		} catch (Exception e) {
		    e.printStackTrace();
		    return " "+user.getFirstName()+" "+user.getLastName()+" not added.";
		} finally{
		    mongoClient.close();
		}
	}
	
	
	public static String deleteUserFromDB(User user) {
		MongoClient mongoClient = new MongoClient();
		try {
		    MongoDatabase db = mongoClient.getDatabase("database");
		    MongoCollection<Document> collection = db.getCollection("myCollection");
		    ObjectMapper mapper = new ObjectMapper();
		    String jsonString = mapper.writeValueAsString(user);
		    Document doc = Document.parse(jsonString);
		    
		    FindIterable<Document> fi = collection.find();
		    MongoCursor<Document> cursor = fi.iterator();
		    while(cursor.hasNext()) {
		    	Document o =  cursor.next();
		    	User us = new User((String)o.get("firstName"), (String)o.get("lastName"));
		    	if(user.getFirstName().equals(us.getFirstName()) && user.getLastName().equals(us.getLastName())) {
		    		collection.deleteOne(doc);
		    		updateJson();
		    	}
		    }
		    return " "+user.getFirstName()+" "+user.getLastName()+" removed successfully.";
		} catch (Exception e) {
		    e.printStackTrace();
		    return " "+user.getFirstName()+" "+user.getLastName()+" not removed.";
		} finally{
		    mongoClient.close();
		}
	}
	
	
	public static  List<User> getUsers() {
		List<User> userList = new ArrayList<User>();
		MongoClient mongoClient = new MongoClient();
		try {
		    MongoDatabase db = mongoClient.getDatabase("database");
		    MongoCollection<Document> collection = db.getCollection("myCollection");
		    
		    FindIterable<Document> fi = collection.find();
		    MongoCursor<Document> cursor = fi.iterator();
		    while(cursor.hasNext()) {
		    	Document o =  cursor.next();
		    	User us = new User((String)o.get("firstName"), (String)o.get("lastName"));
		    	userList.add(us);
		    }
		    cursor.close();
		} catch (Exception e) {
		    e.printStackTrace();
		} finally{
		    mongoClient.close();
		}
		return userList;
	}
	
	public static void updateJson() throws JsonGenerationException, JsonMappingException, IOException {
		users = MongoDB.getUsers();
		try {
			myObj.defaultObjectMapper.writeValue(file, users);
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
}
