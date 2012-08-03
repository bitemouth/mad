window.CountryView = Backbone.View.extend({
	el : "body",
	country : null,
	initialize : function(){
		this.country = this.model;
		this.render();		
	},
	render : function(){
		$(this.el).prepend("<h1>Backbone example 1</h1>");
	},
	events : {
		"click #btnClick" : "getCapital",
		"mouseover #capital" : "changeColorToRed",
		"mouseout #capital" : "changeColorToWhite",
	},
	changeColorToWhite : function(event){
		$(event.currentTarget).css("background-color","white");
	},
	changeColorToRed : function(event){
		$(event.currentTarget).css("background-color","red");
	},
	getCapital : function(){

		var countryText = $("#countrytxt").val();
		this.country.set("name",countryText);
		this.country.computeCapital();
		$("#capital").text(this.country.get("capital"));
	}	
});