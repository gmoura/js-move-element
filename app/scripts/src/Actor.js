function Actor () {
  if(typeof Actor.instance === "object"){
    return Actor.instance;
  }

  this.element  = document.getElementById("actor");
}
 
/**
 * Get Axis the Actor element
 * @param  {String} axis
 * @return {Inter}
 */
Actor.prototype.getAxis = function(axis) {
  if(axis === "x"){
    return this.element.offsetLeft + this.element.offsetWidth;
  }
  if(axis === "y"){
    return this.element.offsetTop;
  }
};

Actor.prototype.moveShortToTop = function() {
  var increase = this.getAxis('y') - 5;
  this.element.style.top = increase + "px";
};

Actor.prototype.moveShortToDown = function() {
  var decrements = this.getAxis('y') + 5 ;
  this.element.style.top = decrements + "px";

};

Actor.prototype.moveShortToLeft = function() {
  var increase = this.getAxis('x') - 1 - this.element.offsetWidth; 
  this.element.style.left = increase + "px";

};

Actor.prototype.moveShortToRight = function() {
  var decrements = this.getAxis('x') + 1 ;
  this.element.style.left = decrements + "px";

};
