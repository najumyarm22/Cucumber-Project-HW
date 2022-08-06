package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabasePage {
	
	Connection connection;
	Statement statement;
	ResultSet resultSet;
	String columnValue;

	public String getDataFromDB(String columnName) {

		try {
//			Setting properties for MySQL:
			Class.forName("com.mysql.cj.jdbc.Driver");
			String sqlUrl = "jdbc:mysql://localhost:3306/feb2022"; // to get url, open MySQL Workbench/Database menu/Manage Connections/127.0.0.1 = localhost/use any of those and Test Connection/
			String sqlUsername="root";
			String sqlPassword="root";
			String sqlQuery="select * from users;";
			
//			Create a connection to local DB:
			connection=DriverManager.getConnection(sqlUrl, sqlUsername, sqlPassword);
			
//			Empowering the connection reference variable to execute queries:
			statement=connection.createStatement();
			
//			Execute/Deliver query:
			resultSet=statement.executeQuery(sqlQuery);
			while(resultSet.next()) {
				columnValue=resultSet.getString(columnName); // we get the value of username column. to get value from password column, we need to make it dynamic by adding String columnName parameter in the method and use here.
				return columnValue; // this brings value out of while loop
			}
			
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {  // after our try catch, we need to close resultSet and connections
			if(resultSet!=null) {
				try {
					resultSet.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			
			if(connection !=null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		
		return columnValue; // this returns the output/end result of the method 
//		to call this method in stepDefinition class, create the page object and use the method inside switch case to get data from DB.
	}
}
