requirejs.config({
	baseUrl : "script/lib",
	paths : {
		app : "../app/",
		models : "../app/models",			
		views : "../app/views"		
	}
});
require(["jquery","underscore-min","backbone-min","models/NumberGameModel","views/NumberGameView","app/init"],
		function(){
			console.log("Loaded all the required configuration files");
});

