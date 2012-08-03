define(["views/NumberGameView","models/NumberGameModel.js"],function(){
	return {
		initialize : function(){
			var numModel = new NumberGameModel();
			var historyColl = new GameHistoryList();
			var numView = new NumberGameView({model:numModel,collection:historyColl});			
		
		}
	};
});