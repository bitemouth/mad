<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

    <%
    	String user = request.getParameter("user");
		String pwd = request.getParameter("pwd");
		String result;
		
		System.out.println("user : " + user +  "pwd : " + pwd);
		
		if(user.equals("admin") && pwd.equals("admin")) {
			  result="Success";			
		}else {
			result="Invalid credentials";	
		}
		String json="{\"output\":\"" +result+ "\"}";		
		out.println(json);			
    
    %>