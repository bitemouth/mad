package it.sella;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/reporter")
public class WeatherReporter {

	@GET
	@Path("/summary/{city}")
	@Produces(MediaType.APPLICATION_JSON)
	public Summary getSummary(@PathParam("city") String city) {
		Summary s = new Summary();
		s.setCity(city);
		s.setTemperature(Math.random()*100);
		return s;
	}
	
	@GET
	@Path("{country}/{city}")
	public String getTemperature2 (@PathParam("country") String country,@PathParam("city") String city) {
		return "Temperature of " + city + " in " + country + " is :"+ Math.random()* 100;
	}

	@GET
	@Path("{city}")
	public String getTemperature (@PathParam("city") String city) {
		return "Temperature of " + city + " is " + Math.random()* 100;
	}
	
	
	@GET
	public String getInfo()  {
		return "This is weather reporting service.";
	}
	
	@GET
	@Path("/info2")
	public String getInfo2()  {
		return "This is info 2.";
	}
	
}
