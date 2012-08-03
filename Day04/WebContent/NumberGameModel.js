window.GameHistory = Backbone.Model.extend({
	defaults : {
		attempt : 0,
		guess : 0
	}
});

window.GameHistoryList = Backbone.Collection.extend({
	model : GameHistory
});

window.NumberGameModel = Backbone.Model.extend({
	defaults : {
		number : 0,
		attempts : 0,
		message : "",
		target : Math.floor(Math.random()*100)	
	},
	guessNumber : function() {
				
		var num = this.get("number");
		var a = this.get("attempts");
		var target = this.get("target");
		a++;
		this.set("attempts",a);
		
		if(num > target)
			this.set("message","Aim Lower");
		if(num < target)
			this.set("message","Aim Higher");
		if(num == target)
			this.set("message","You have got it in " + this.get("attempts") + " attempts");
	}
	
});
