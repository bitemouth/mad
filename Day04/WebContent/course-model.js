window.Course = Backbone.Model.extend ({
	
	defaults : {
		
		id :undefined,
		name : ""
	},
	url : "stpi/courses/add"
	
});

window.CourseList = Backbone.Collection.extend({
	model : Course,
	url : "stpi/courses/list",
	
});
