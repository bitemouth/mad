<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<% String name = request.getParameter("name");
   name=name.toUpperCase();
   // {""output" : "Sachin"}
   System.out.println(name);
   String json="{\"output\":\"" +name+ "\"}";
   out.println(json);
%>