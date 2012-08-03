$().ready(function() {
			var numModel = new NumberGameModel();
			var historyColl = new GameHistoryList();
			var numView = new NumberGameView({model:numModel,collection:historyColl});			
		});
