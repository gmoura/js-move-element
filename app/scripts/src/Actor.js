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
    return this.element.offsetLeft + ( this.element.offsetWidth / 2 );
  }
  if(axis === "y"){
    return this.element.offsetTop;
  }
};

Actor.prototype.moveShortToTop = function() {
  var increase = this.getAxis('y') - 5;
  
  this.changeClass('rotate-to-up');
  this.element.style.top = increase + "px";
};

Actor.prototype.moveShortToDown = function() {
  var decrements = this.getAxis('y') + 5 ;

  this.changeClass('rotate-to-down');
  this.element.style.top = decrements + "px";
};

Actor.prototype.moveShortToLeft = function() {
  var increase = this.getAxis('x') - 5; 

  this.changeClass('rotate-to-left');
  this.element.style.left = increase + "px";
};

Actor.prototype.moveShortToRight = function() {
  var decrements = this.getAxis('x') + 5;

  this.changeClass('rotate-to-right');
  this.element.style.left = decrements + "px";
};

Actor.prototype.moveShortToTopRight = function() {
  var 
    increaseY = this.getAxis('y') - 5,
    increaseX = this.getAxis('x') + 5;

  this.changeClass('rotate-to-top-right');
  this.element.style.top  = increaseY + "px";
  this.element.style.left = increaseX + "px";

};

Actor.prototype.moveShortToTopLeft = function() {
  var 
    increaseY = this.getAxis('y') - 5,
    increaseX = this.getAxis('x') - 5;

  this.changeClass('rotate-to-top-left');
  this.element.style.top  = increaseY + "px";
  this.element.style.left = increaseX + "px";

};

Actor.prototype.moveShortToDownRight = function() {
  var 
    increaseY = this.getAxis('y') + 5,
    increaseX = this.getAxis('x') - 5;

  this.changeClass('rotate-to-down-right');
  this.element.style.top  = increaseY + "px";
  this.element.style.left = increaseX + "px";

};

Actor.prototype.moveShortToDownLeft = function() {
  var 
    increaseY = this.getAxis('y') + 5,
    increaseX = this.getAxis('x') + 5;

  this.changeClass('rotate-to-down-left');
  this.element.style.top  = increaseY + "px";
  this.element.style.left = increaseX + "px";

};



Actor.prototype.changeClass = function(newValue) {
  var 
    classReg = new RegExp(newValue),
    oldClass = this.element.className,
    newClass = ""; 

    //Verify if newClass existe
    if( ! classReg.test(oldClass) ) {
      //Remove All class with started 'rotate-'
      newClass = oldClass.replace(/ rotate.*/,"");

      //New string class
      newClass += " " + newValue;
      
      this.element.className = newClass;
    }

};


