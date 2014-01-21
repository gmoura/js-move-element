function View () {
	this.controller = new Controller();
}

View.prototype.init = function() {
	this.controller.moveActor();
};