function Controller () {
	if(typeof Controller.instance === "object"){
		return Controller.instance;
	}

	this.actor = new Actor();
	this.keysMoveActor = {
		37 : false, // left 
		38 : false, // up
		39 : false, // right
		40 : false  // down
	};
}


Controller.prototype.moveActor = function() {
	var 
		self = this;

	window.onkeydown = function(e){
		console.log(e.keyCode);
		checkKey = [];
		if(e.keyCode in self.keysMoveActor ) {
			
			self.keysMoveActor[e.keyCode] = true; 
			
			for (var i in self.keysMoveActor) {
				if( self.keysMoveActor[i] === true ){
					if(  checkKey.indexOf(i) === -1 ){
						checkKey.push( i );
					}
				}
			}

			if(checkKey.length === 2) {
				if ( self.keysMoveActor[38] && self.keysMoveActor[39] ){
					self.actor.moveShortToTopRight();		
				}
				else if ( self.keysMoveActor[38] && self.keysMoveActor[37] ){
					self.actor.moveShortToTopLeft();		
				}
				else if ( self.keysMoveActor[40] && self.keysMoveActor[39] ){
					self.actor.moveShortToDownRight();		
				}
				else if ( self.keysMoveActor[40] && self.keysMoveActor[37] ){
					self.actor.moveShortToDownLeft();		
				}
			} else {
				if( self.keysMoveActor[38] ){
					self.actor.moveShortToTop();			
				}

				else if ( self.keysMoveActor[40] ) {
					self.actor.moveShortToDown();			
				}

				else if ( self.keysMoveActor[39] ){
					self.actor.moveShortToRight();			
				}

				else if ( self.keysMoveActor[37] ) {
					self.actor.moveShortToLeft();		
				}
			}

		}
	};

	window.onkeyup = function (e) {
		if(e.keyCode in self.keysMoveActor ) {
			self.keysMoveActor[e.keyCode] = false; 
		}
	};
};