package it.sella;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Summary {

	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public double getTemperature() {
		return temperature;
	}
	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}
	
	private String city;
	private double temperature;
	
}
