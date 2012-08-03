window.NumberGameView = Backbone.View.extend({
	el : "body",
	numberModel : null,
	initialize : function(){
		this.numberModel = this.model;
	},
	events : {
		"click #btnClick" : "play"
	},
	play : function(){

		var n = parseInt($("#n1").val());
		this.numberModel.set("number",n);
		this.numberModel.guessNumber();
		$("#message").text(this.numberModel.get("message"));
		$("#attempts").text(this.numberModel.get("attempts"));	
		this.addToHistory(this.numberModel.get("attempts"),this.numberModel.get("number"));	
	},
	addToHistory : function(attemptsVal,guessText) {
		this.collection.add({
			attempt:attemptsVal,
			guess:guessText
		});
		$("#history").html("");
		for (var i=0; i<this.collection.length;i++) {
			var item = this.collection.at(i);
			var row = "<tr>"
			row+= "<td>" + item.get("attempt") + "</td>";
			row+= "<td>" + item.get("guess") + "</td>";
			row+= "</tr>"
			$("#history").append(row);				
		}
	}
});