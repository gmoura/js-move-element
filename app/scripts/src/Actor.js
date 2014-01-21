function Actor () {
  if(typeof Actor.instance === "object"){
    return Actor.instance;
  }

  this.element  = document.getElementById("actor");
  this.axis     = { 
                    x:this.getAxis("x") ,
                    y:this.getAxis("y")
                  };
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
  var increase = this.axis.y + 5;
  this.element.style.top = increase + "px";
};
