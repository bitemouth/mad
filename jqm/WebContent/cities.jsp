<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
	String india="{\"cities\":[\"Chennai\",\"Cochin\",\"Mumbai\"]}";
	String usa="{\"cities\":[\"New york\",\"New jersey\",\"Houston\"]}";
	String uk="{\"cities\":[\"London\",\"Bristol\",\"Essex\"]}";
	
	String con = request.getParameter("country");
	System.out.println(con);
	
	if("India".equalsIgnoreCase(con)) out.println(india);
	if("USA".equalsIgnoreCase(con)) out.println(usa);
	if("UK".equalsIgnoreCase(con)) out.println(uk);
	
			
%>