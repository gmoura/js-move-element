function Controller () {
	if(typeof Controller.instance === "object"){
		return Controller.instance;
	}

	this.actor = new Actor();
	this.keysMoveActor = [
		37, // left 
		38, // up
		39, // right
		40, // down
		65, // top right
		83, // top left
		68, // down right
		70  // down left 
	];
}


Controller.prototype.moveActor = function() {
	self = this;
	window.onkeydown = function(e){
		if(e.which === self.keysMoveActor[0] ) {
			self.actor.moveShortToLeft();
		}
		else if(e.which === self.keysMoveActor[1] ) {
			self.actor.moveShortToTop();
		}
		else if(e.which === self.keysMoveActor[2] ) {
			self.actor.moveShortToRight();
		}
		else if(e.which === self.keysMoveActor[3] ) {
			self.actor.moveShortToDown();				
		}
		else if(e.which === self.keysMoveActor[4]) {
			self.actor.moveShortToTopRight();				
		}
		else if(e.which === self.keysMoveActor[5]) {
			self.actor.moveShortToTopLeft();				
		}
		else if(e.which === self.keysMoveActor[6]) {
			self.actor.moveShortToDownRight();				
		}
		else if(e.which === self.keysMoveActor[7]) {
			self.actor.moveShortToDownLeft();				
		}

	
	};
};