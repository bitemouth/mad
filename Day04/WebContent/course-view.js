window.AddCourseView = Backbone.View.extend({
	el : "#addCourse",
	events : {
		"click #addCourseBtn" : "addCourse"
	},
	addCourse : function(){
		this.model.save({
			name:$("#courseNameText").val()
		},
		{
			success : function(src,response){
				$("#results").text(response.output);
				app.courseList.fetch({
					success : function(src,response){
						src.reset();
						for(var i=0;i<response.courses.length;i++){
							src.add(response.courses[i]);
						}
						app.courseListView.render();
					}
				});				
			},
			error : function(src,response){
				$("#results").text("Error");
			},
		});
	} 
});

window.CourseListView = Backbone.View.extend({
	el : "#courseList",
	render : function(){
		$(this.el).html("");
		for(var i=0;i<this.collection.length;i++){
			var item = this.collection.at(i);
			var li = "<li>" + item.get("name") + "</li>";
			$(this.el).append(li);
		}
	}
});