requirejs.config({
	baseUrl : "script/lib",
	paths : {
		app : "../app/",
		models : "../app/models",			
		views : "../app/views"		
	}
});
require(["jquery","underscore-min","backbone-min","app/init"],
		function(a,b,c,initializer){
			initializer.initialize();			
			console.log("Loaded all the required configuration files");
});

