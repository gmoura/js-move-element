function Controller () {
	if(typeof Controller.instance === "object"){
		return Controller.instance;
	}

	this.actor = new Actor();
	this.keysMoveActor = [
		37, // left
		38, // up
		39, // right
		40  // down
	];
}

Controller.prototype.moveActor = function() {
	self = this;
	window.onkeydown = function(e){
		switch(e.keyCode){

			//left
			case self.keysMoveActor[0]:

			break;

			//up
			case self.keysMoveActor[1]:
				console.log('oi');
				self.actor.moveShortToTop();
			break;

			// right
			case self.keysMoveActor[2]:
			break;

			// down
			case self.keysMoveActor[3]:
			break;
		}
	};
};